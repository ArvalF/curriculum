<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, computed } from 'vue'
import WordCloud from 'wordcloud'
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

function cb(word, weight, fontSize, distance, theta) {
    
    const colors = ['#2a4494', '#5da9e9', '#C0EABF', '#F9627D', '#92A8D1']
    const randomElement = colors[Math.floor(Math.random() * colors.length)];

    return randomElement
}
onMounted(() => {
  const canvas = (canvasRef.value as HTMLCanvasElement | null)
  WordCloud(canvas, {
    list: compterOccurrences(competences),
    gridSize: 100,
    weightFactor: 10,
    fontFamily: 'Funnel, sans-serif',
    color: cb,
    rotateRatio: 0.5,
    backgroundColor: 'transparent',
  })
})

onBeforeUnmount(() => {
})
</script>

<template>
    <div>
    </div>
  <canvas ref="canvasRef" />
  <!-- <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; color: tomato;">
    transparency {{ wormTransparency }}
  </div> -->
</template>

<style scoped>
canvas {
  width: max-content;
  height: fit-content;
}

</style>