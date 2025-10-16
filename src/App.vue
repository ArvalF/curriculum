<script setup lang="ts">
import { computed, ref } from 'vue';

import GrainEffect from './GrainEffect.vue';
import LeftColumn from './LeftColumn.vue';
import MainContent from './MainContent.vue';
import { useDefineExperiences } from '@/composables/defineExperiences';

const experiences = useDefineExperiences();
const defaultInfos = ["", "hectorcaillaud@yahoo.fr", "06 31 84 44 40"]
const activeProject = ref();
const activeCompetences = computed(() => {
  if (activeProject.value) {
     let exp = experiences.find(exp => exp.title == activeProject.value.exp)
     if (exp) {
      const project = exp.projects[activeProject.value.project]
      return project ? project.competences : []
     }
  }
  return []
})
</script>

<template>
  <GrainEffect>

  <div class="wrapper">
    <h1 class="header">Curriculum</h1>
    <div class="content-wrapper">
      <LeftColumn
      :active-competences="activeCompetences"
      :default-infos="defaultInfos"/>
      <MainContent
        :experiences="experiences"
        v-model="activeProject"
      />
    </div>
</div>
</GrainEffect>
  
</template>

<style lang="scss">

body {
  font-family: $font-family;
  font-size: $font-size;
  color: $primary-color;
  background-color: $background-color;
  // overflow-y: hidden;
}
ul {
  padding: 1rem;
}

.header {
  text-align: center;
  margin : 0;
}
.wrapper {
  z-index: 2;
  // height: 90vh;
  // margin: 1rem auto;
  padding: 1rem;
  background-color: $background-color;
  display: grid;
  grid-template-rows:  3rem 1fr;
  border-radius: 3px;
}
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 0;
  column-gap: 30px;
}

.main-content {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: $primary-color $background-color;
  scrollbar-gutter: stable both-edges;
  min-height: 0; 
}

</style>
