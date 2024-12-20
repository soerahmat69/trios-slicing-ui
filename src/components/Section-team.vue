<template>
  <section class="container bg-primary team-section">
    <div class="space-xl"></div>
    <div class="space-xl"></div>
    <dir class="wrap-title">
      <article class="intro-text">
        <div class="text_dot"></div>
        <p class="t-primary">Our professionals. The driving force behind our solutions</p>
      </article>
    </dir>

    <div class="team-grid">
      <div v-for="team in teams" :key="team.name" class="team-card">
        <div class="team-image">
          <img :src="team.image" :alt="team.name" />
        </div>
        <div class="team-card-text">
          <h3>{{ team.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { Team } from '@/types/abouts'
import ina from '../assets/images/6751cb02fc6576289b79638f_Trios-Portretten-Liike-2700px-0402069.jpg'
import sil from '../assets/images/6751ca4967227b93a7240d78_Trios-Portretten-Liike-2700px-0402012.jpg'
import hef from '../assets/images/6751ca5cc8df56e77609770c_Trios-Portretten-Liike-2700px-0402020.jpg'
import wessel from '../assets/images/6751ca0de85c1178d5151108_Trios-Portretten-Liike-2700px-0401979.jpg'
import max from '../assets/images/6751ca6aa7388431918c69d8_Trios-Portretten-Liike-2700px-0402028.jpg'
import hans from '../assets/images/6751c9dfe29855d6d517b6a9_Trios-Portretten-Liike-2700px-0401966.jpg'
import erik from '../assets/images/6751c9c788dc8ddccaa1c5ce_Trios-Portretten-Liike-2700px-0401962.jpg'
import mick from '../assets/images/6751cac1e85c1178d515e4e5_Trios-Portretten-Liike-2700px-0402051.jpg'
export default {
  name: 'section-team',
  setup() {
    const teams: Team = [
      {
        name: 'Ina Hulzink',
        image: ina,
      },
      {
        name: 'Sil Screever',
        image: sil,
      },
      {
        name: 'Hefney de Haan',
        image: hef,
      },
      {
        name: 'Wessel Warmink',
        image: wessel,
      },
      {
        name: 'Max Porskamp',
        image: max,
      },
      {
        name: 'Hans Groothornte',
        image: hans,
      },
      {
        name: 'Erik van Gaasbeek',
        image: erik,
      },
      {
        name: 'Mick Borgelink',
        image: mick,
      },
    ]
    return {
      teams,
    }
  },
}
</script>
