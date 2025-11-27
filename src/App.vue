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
const defaultInfos = [
  "Développeur Géographe",
  "Hector Caillaud",
  "hectorcaillaud@yahoo.fr",
  "06 31 84 44 40",
  "30/09/1994"]
const activeExperience = ref<ActiveExp>();

const activeCompetences = computed(() => {
  if (activeExperience.value) {
     var exp = experiences.concat(formations).find(exp => exp.title == activeExperience.value?.exp)
     if (!exp) {
      exp = experiences.concat(formations)
      .find(exp => exp.projectSets?.find(projectSet => projectSet.title == activeExperience.value?.exp))
      if (exp && exp.projectSets){
        let project = exp.projectSets.flatMap(set => set.projects).find(project => project.title == activeExperience.value?.project)
        return project ? project.competences : []
      }
     }
     if (exp) {
      let project = exp.projects?.find(exp => exp.title == activeExperience.value?.project)
      return project ? project.competences : []
     }
  }
  return []
})
const activeExemples = computed((): Array<LinkItem> => {
  if (activeExperience.value) {
    let exp = experiences.concat(formations).find(exp => exp.title == activeExperience.value?.exp)
    if (!exp) {
      exp = experiences.concat(formations)
      .find(exp => exp.projectSets?.find(projectSet => projectSet.title == activeExperience.value?.exp))
      if (exp && exp.projectSets) {
        let project = exp.projectSets.flatMap(set => set.projects).find(project => project.title == activeExperience.value?.project)
        if (project){
          return project.exemples? project.exemples : []
        }
      }
    }
    else if (exp?.projects) {
      let project = exp.projects.find(exp => exp.title == activeExperience.value?.project)
        if (project){
          return project.exemples? project.exemples : []
        }
      }
  }
  return []
})

const mainContentRef =  ref()

function setActiveExperience(exp : ActiveExp) {
  activeExperience.value = exp
}
function goHome() {
  setActiveExperience(null);
  mainContentRef.value.setActiveTab("experiences")
}
</script>

<template>
  <!-- <GrainEffect> -->
    <!-- <WormEffect v-if="width > 992"/> -->
  <div class="wrapper">
    <div class="header"  @click="goHome">
      <h1 class="header-title" @mouseenter="setActiveExperience(null)">
        <i class="ri-id-card-line"></i>
      Curriculum
    </h1>
    </div>
    <div class="content-wrapper">
      <LeftColumn
      :active-competences="activeCompetences"
      :active-exemples="activeExemples"
      :default-infos="defaultInfos"/>
      <MainContent
        ref="mainContentRef"
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
  // background: #F9627D;
  background: linear-gradient(-182deg,rgba(249, 98, 125, 0.6) 0%, rgba(192, 234, 191, 0.6) 6%, rgba(42, 68, 148, 0.4) 60%,  rgba(42, 68, 148, 0.9) 100%);
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
}

.header-title {
  color: $primary-color;
  font-size: 3rem;
  i {
      font-size: 2.5rem;
      position: relative;
      top: 3px
    };
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
  max-width: 1240px;
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
.header-title {
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
