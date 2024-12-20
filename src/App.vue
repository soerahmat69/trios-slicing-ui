<template>
  <OverleyCompo />

  <HeaderCompo />

  <!-- <RouterView /> -->
  <router-view> </router-view>

  <FooterCompo />
</template>

<style src="./assets/styles/styles.sass"></style>

<script lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FooterCompo from './components/Footer-compo.vue'
import HeaderCompo from './components/Header-compo.vue'
import OverleyCompo from './components/Overley.vue'

gsap.registerPlugin(ScrollTrigger)
export default {
  components: {
    FooterCompo,
    HeaderCompo,
    OverleyCompo,
  },
  methods: {
    hero_text() {
      gsap.from('#hero_text', {
        duration: 1,
        opacity: 0,
        stagger: 0.05,
        y: 50,
        ease: 'power2.out',
      })
    },
    animateImages() {
      const imgs = document.querySelectorAll('img')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                duration: 1,
                opacity: 1,
                scale: 1,
                ease: 'power2.out',
              })
            } else {
              gsap.set(entry.target, { opacity: 0, scale: 0.8 })
            }
          })
        },
        { threshold: 0.2 },
      )

      imgs.forEach((img) => observer.observe(img))
    },
    animatedDiscoverPopup() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to('.pop-up', {
                duration: 1,
                opacity: 1,
                y: 50,
                ease: 'power2.out',
              })
            } else {
              gsap.to('.pop-up', {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: 'power2.out',
              })
            }
          })
        },
        { threshold: 0.1 },
      )

      const target = document.querySelector('.section-mark')
      if (target) {
        observer.observe(target)
      }
    },

    animatedNavScroll() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to('#nav_trigger_down', {
                duration: 1,
                opacity: 1,
                y: -70,
                ease: 'power2.out',
              })
            } else {
              gsap.to('#nav_trigger_down', {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: 'power2.out',
              })
            }
          })
        },
        { threshold: 0.1 },
      )

      const target = document.getElementById('sticky_nav')
      if (target) {
        observer.observe(target)
      }
    },
    animatedScrollGalery() {
      const timeline = gsap.timeline()
      timeline.to('.galery-wrap', { x: -2000 }).to('.item-galery-end', { x: 501 })
      ScrollTrigger.create({
        animation: timeline,
        trigger: '.galery-wrap',
        endTrigger: 'item-galery-end',
        start: () => 'center center',
        end: () => `+=${window.innerWidth * 3}`,
        scrub: 0.5,
        pin: true,
        // markers: false,
      })
    },
  },
  mounted() {
    this.hero_text()
    this.animateImages()
    this.animatedDiscoverPopup()
    this.animatedNavScroll()
  },
}
</script>
