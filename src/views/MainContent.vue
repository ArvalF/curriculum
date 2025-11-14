<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

import Section from '@/components/Section.vue'
import WordCloud from '@/components/WordCloud.vue'

import { useAppStore } from '@/store/appStore';

const props = defineProps<{
  experiences?: Array<Experience>
  formations?: Array<Experience>
}>()

const store = useAppStore();
const activeProject = defineModel<ActiveExp>()
const activeTab = ref<'experiences' | 'formations' | 'competences'>('experiences')
const mainContentRef = ref(null)

const { top, left, width, height } = useElementBounding(mainContentRef)

function setActiveTab(e: Event) {
  const target = e.target as HTMLElement
  activeProject.value = undefined
  if (target.id === 'experiences') {
    activeTab.value = 'experiences'
  } else if (target.id === 'formations') {
    activeTab.value = target.id
  } else if (target.id === 'competences') {
    activeTab.value = target.id
  }
}
onMounted(() => {
  store.setMainContentBounding(width.value, height.value, top.value, left.value)
})
</script>

<template>
      <div class="parent">
        <div class="tabs-menu" 
          @click="setActiveTab($event)">
          <h2 id="experiences" class="title" :class="{ 'active-tab': 'experiences' === activeTab }">Expériences</h2>
          <h2 id="formations" class="title" :class="{ 'active-tab': 'formations' === activeTab }">Formations</h2>
          <h2 id="competences" class="title" :class="{ 'active-tab': 'competences' === activeTab }">Compétences</h2>
        </div>
        <div ref="mainContentRef" class="main-content">
          <div class="fit-border-radius">
          <Section
            v-show="activeTab === 'experiences'"
            v-for="exp in experiences" 
            :title="exp.title"
            :place="exp.place"
            :date="exp.date"
            :projects="exp.projects"
            v-model="activeProject"/>
          <Section
            v-show="activeTab === 'formations'"
            v-for="formation in formations" 
            :title="formation.title"
            :place="formation.place"
            :date="formation.date"
            :projects="formation.projects"
            v-model="activeProject"/>

          <WordCloud v-if="activeTab === 'competences'"/>
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

.tabs-menu {
  display: flex;
  justify-content: left;
  gap: 2rem;
  .title {
    cursor: pointer;
    padding-bottom: 0.5rem;
    &::after {
      content: '';
      display: block;
      width: 0%;
      height: 2px;
      transition: width 0.3s;
      background-color: $primary-color;
    }
    &:hover::after {
      width: 100%;
      background-color: $primary-color;
    }
    /* Quand active-tab est présent, le soulignement reste à 100% */
    &.active-tab::after {
      width: 100%;
      background-color: $highlight-color2;
    }
  }
}

@media (max-width: $sm-screen)  {
  .fit-border-radius {
    overflow: hidden;
    height: auto;
  }
  .main-content {
    width: 100%;
    max-width: 88vw;;
  }
  .tabs-menu {
    gap: 1rem;
    max-width: 88vw;
    overflow-y: hidden;
    overflow-x: auto;
     /* Masquer la scrollbar sous Firefox */
    scrollbar-width: none; /* Firefox */

/* Masquer la scrollbar sous Chrome, Edge et Safari */
&::-webkit-scrollbar {
  display: none;
}
  }
}


</style>
