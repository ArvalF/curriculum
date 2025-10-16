<script setup lang="ts">
import Section from './Section.vue'

const props = defineProps<{
  experiences?: Array<Experience>
}>()

const activeProject = defineModel()

</script>

<template>
      <div class="main-content">
        <h2>Expériences</h2>
        <Section
        v-for="exp in experiences" 
        :title="exp.title"
        :place="exp.place"
        :date="exp.date"
        :projects="Object.keys(exp.projects)"
        v-model="activeProject"
      />
      </div>
</template>

<style scoped lang="scss">
left-column {
    display: flex;
    flex-direction: column;
  }
.left-menu {
  background-color: $background-color;
  border-radius: 3px;
  height: -webkit-fill-available;
  ul {
    list-style-type: none;
    max-width: inherit;
    background-color: $terciary-bkg-color;
  }
}

</style>
