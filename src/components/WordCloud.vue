<script setup lang="ts">
import {  ref } from 'vue'
import { useDefineExperiences, useDefineFormations } from '@/composables/defineExperiences'
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
    <div class="competences-list">
      <div v-for="w in compterOccurrences(competences).sort((a,b) => b[1] - a[1])"
        class="competence">
        {{ w[0] }} <span>{{ w[1] }}</span>
      </div>
    </div>
</template>

<style scoped lang="scss">
canvas {
  width: max-content;
  height: fit-content;
}

.competences-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: inherit;
  overflow-x: hidden;
  margin-top: 4.3rem;
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