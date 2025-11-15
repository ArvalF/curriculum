<script setup lang="ts">
import {  ref } from 'vue'
import { useDefineExperiences, useDefineFormations, useDefineCompetences } from '@/composables/defineExperiences'
const canvasRef = ref(null)

const competences = useDefineExperiences().concat(useDefineFormations())
  .flatMap(exp => exp.projects ?? [])
  .flatMap(project => project.competences ?? [])

function compterOccurrences(arr: Array<string>): [string, number][] {
  const compte: { [key: string]: number } = {};

  arr.forEach(str => {
    compte[str] = (compte[str] || 0) + 1;
  });

  return Object.entries(compte);
}
</script>

<template>
    <div class="section-container">
      <div v-for="cs, key in useDefineCompetences()">
        <div class="section-title">{{ key }}</div>
        <div class="competences-list">
          <div v-for="c in cs" class="competence">
            {{ c }}
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.section-container {
    @include section-container($background-color);
}
.section-title {
  border-radius: 3px;
  @include section-title($primary-color, $background-color);
}
.competences-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: inherit;
  overflow-x: hidden;
}

@media (max-width: $sm-screen)  
{
  .competences-list {
    margin-top: 1rem;
  }
}
.competence{
  width: max-content;
  background-color: $tertiary-bkg-color;
  line-height: 2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding : 0.5rem;
  border-radius: 3px;
  &:hover {
    background-color: $secondary-bkg-color;
    font-weight: bold;
  }
  span {
    color: $highlight-color2;
    font-weight: bold;
  }
}
</style>