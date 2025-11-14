<!-- https://webcv.charleslaverdure.com/index.html#mywork -->

<script setup lang="ts">
import { computed, ref } from 'vue';

import GrainEffect from '@/components/GrainEffect.vue';
import LeftColumn from '@/views/LeftColumn.vue';
import MainContent from '@/views/MainContent.vue';
import { useDefineExperiences, useDefineFormations } from '@/composables/defineExperiences';
import WormEffect from '@/components/WormEffect.vue';
import { useWindowSize } from '@vueuse/core';

const {width, height} = useWindowSize();
const experiences = useDefineExperiences();
const formations = useDefineFormations();
const defaultInfos = ["Hector Caillaud", "hectorcaillaud@yahoo.fr", "06 31 84 44 40"]
const activeExperience = ref<ActiveExp>();

const activeCompetences = computed(() => {
  if (activeExperience.value) {
     let exp = experiences.concat(formations).find(exp => exp.title == activeExperience.value?.exp)
     if (exp) {
      const project = exp.projects?.find(exp => exp.title == activeExperience.value?.project)
      return project ? project.competences : []
     }
  }
  return []
})
const activeExemples = computed(() => {
  if (activeExperience.value) {
    let exp = experiences.concat(formations).find(exp => exp.title == activeExperience.value?.exp)
     if (exp) {
      const project = exp.projects?.find(exp => exp.title == activeExperience.value?.project)
      return project ? project.exemples : []
     }
  }
})
</script>

<template>
  <!-- <GrainEffect> -->
    <WormEffect v-if="width > 992"/>
  <div class="wrapper">
    <h1 class="header">Curriculum</h1>
    <div class="content-wrapper">
      <LeftColumn
      :active-competences="activeCompetences"
      :active-exemples="activeExemples"
      :default-infos="defaultInfos"/>
      <MainContent
        :experiences="experiences"
        :formations="formations"
        v-model="activeExperience"
      />
    </div>
</div>
<!-- </GrainEffect> -->
  
</template>

<style lang="scss">
body {
  font-family: $font-family;
  font-size: $font-size;
  color: $primary-color;
  background-color: $primary-color;
  overflow: hidden;
}

.header {
  color: $primary-color;
  text-align: center;
  font-size: 3rem;
  margin: 0 auto;
  margin-left: 50%;
}
.wrapper {
  z-index: 2;
  height: 92vh;
  margin: 1rem auto;
  padding: 1rem;
  background-color: $background-color;
  display: grid;
  grid-template-rows:  5rem 1fr;
  border-radius: 3px;
}
.content-wrapper {
  color: $primary-color;
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 0;
  column-gap: 30px;
}
.content-wrapper > * {
  min-height: 0; // ✅ important pour les enfants grid/flex contenant des scrolls
  min-width: 0;  // ✅ évite les débordements horizontaux (text overflow)
}

@media (max-width: $sm-screen)  {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
  .header {
  margin-left: 0;
}
.wrapper {
  height: 100%;
}
body {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: $primary-color;
}
}

</style>
