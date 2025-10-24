<script setup lang="ts">
import Section from '@/components/Section.vue'

const props = defineProps<{
  experiences?: Array<Experience>
}>()

const activeProject = defineModel<ActiveExp>()

</script>

<template>
      <div class="parent">
        <h2 class="title">Expériences</h2>
        <div class="main-content">
          <div class="fit-border-radius">
          <Section
            v-for="exp in experiences" 
            :title="exp.title"
            :place="exp.place"
            :date="exp.date"
            :projects="exp.projects"
            v-model="activeProject"/>
        </div>
      </div>
      </div>
</template>

<style scoped lang="scss">
.parent {
  display: grid;
  grid-template-rows: 4rem 3fr;

}
.main-content {
  overflow: hidden;
  border-radius: 3px;
  width: 90%;
}

.fit-border-radius {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: $primary-color;
  height: 100%;
}
.title {
  padding-left: 1rem;
}

@media (max-width: $sm-screen)  {
  .fit-border-radius {
    overflow: hidden;
    height: auto;
  }
  .main-content {
    width: 100%;
  }
}

</style>
