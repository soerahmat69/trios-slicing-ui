<template>
  <main>
    <div class="pop-up">
      <div id="overley_left_popup">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 8C3.58172 8 -1.93129e-07 4.41828 0 -3.49691e-07L-3.49691e-07 8L8 8Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <h2 class="t-primary">Discover us!</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7.41 8.29496L6 9.70496L12 15.705L18 9.70496L16.59 8.29496L12 12.875L7.41 8.29496Z"
          fill="#7C7F8D"
        ></path>
      </svg>
    </div>

    <div class="pop-up-contact">
      <div id="overley_left_popup-contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0C8 4.41828 4.41828 8 0 8H8V0Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <h2 class="t-grey">
        Give us a problem.
        <span class="t-primary"> We find the solution </span>
      </h2>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          fill="currentColor"
        ></path>
      </svg>
      <div class="peopple-img">
        <img src="./assets/images/674f0c34429e670b3566a0c7_sticky-contact-portret-2.png" alt="" />
        <img
          class="p-2"
          src="./assets/images/674f0c34429e670b3566a0c7_sticky-contact-portret-2.png"
          alt=""
        />
      </div>
    </div>
    <section id="hero">
      <div class="overlay_hero"></div>
      <h1 id="hero_text"><span>Trios</span>. Reliable solutions for 30 years</h1>
    </section>

    <section class="bg-secondary container story">
      <div class="space-xl"></div>
      <div class="">
        <article class="intro-text">
          <div class="text_dot"></div>
          <p class="t-white">
            For 30 years, our team has treated every project as if it were our own, with a great
            sense of responsibility. About the result, about your budget and your secrets. We
            realize what your company really needs and ensure that the solution stands like a stone
            <br />
            <br />
            We combine experience in various sectors and craftsmanship into customized solutions. In
            this, we go further than simply executing; we think along and always keep your interests
            in mind. That is where our strength lies. Trust in solutions that go beyond demand.
          </p>
        </article>
      </div>
      <div class="space-xl"></div>
    </section>

    <div class="swap">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 78"
        fill="white"
        preserveAspectRatio="xMidYMid meet"
        style="display: block; line-height: 0"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M407.949 0C401.35 0 396 5.34991 396 11.9494V32C396 38.6274 390.627 44 384 44H0V78H396H412H1440V0H407.949Z"
          fill="#ECF5FF"
        ></path>
      </svg>
    </div>

    <SectionMark />

    <SectionTeam />

    <SectionGalery />

    <SectionDesc />

    <SectionVacature />
  </main>
</template>

<script lang="ts">
import SectionDesc from '@/components/Section-desc.vue'
import SectionGalery from '@/components/Section-galery.vue'
import SectionMark from '@/components/Section-Mark.vue'
import SectionTeam from '@/components/Section-team.vue'
import SectionVacature from '@/components/Section-vacature.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: 'About-us',
  components: {
    SectionTeam,
    SectionMark,
    SectionDesc,
    SectionGalery,
    SectionVacature,
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
    this.animatedScrollGalery()
  },
}
</script>
