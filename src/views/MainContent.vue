<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

import Section from '@/components/Section.vue'
import WordCloud from '@/components/WordCloud.vue'

import { useAppStore } from '@/store/appStore';
import LinkList from '@/components/LinkList.vue';

const props = defineProps<{
  experiences?: Array<Experience>
  formations?: Array<Experience>
}>()

const store = useAppStore();
const activeProject = defineModel<ActiveExp>()
const validTabs = ['experiences', 'formations', 'competences', 'liens'] as const
type TabType = typeof validTabs[number]
const activeTab = ref<TabType>('experiences')
const mainContentRef = ref(null)

const { top, left, width, height } = useElementBounding(mainContentRef)

function setActiveTab(id: String) {
  if (!validTabs.includes(id as TabType)) return
  else activeTab.value = id as TabType
}

function onTabMenuClick(e: Event) {
  const target = e.target as HTMLElement
  const h2 = target.closest('h2')
  activeProject.value = undefined
  setActiveTab(h2? h2.id : "");
}

defineExpose({
  setActiveTab
})
onMounted(() => {
  store.setMainContentBounding(width.value, height.value, top.value, left.value)
})
</script>

<template>
      <div class="parent">
        <div class="tabs-menu" 
          @click="onTabMenuClick($event)">
          <h2 id="experiences" class="title" :class="{ 'active-tab': 'experiences' === activeTab }">
            <i class="ri-settings-3-line"></i>
            <span>Expériences</span>
          </h2>
          <h2 id="formations" class="title" :class="{ 'active-tab': 'formations' === activeTab }">
            <i class="ri-school-line"></i>
            <span>Formations</span>
          </h2>
          <h2 id="liens" class="title" :class="{ 'active-tab': 'liens' === activeTab }">
            <i class="ri-links-line"></i>
            <span>Liens</span>
          </h2>
          <h2 id="competences" class="title" :class="{ 'active-tab': 'competences' === activeTab }">
            <i class="ri-stack-overflow-line"></i>
            <span>Compétences</span>
          </h2>
        </div>
        <div ref="mainContentRef" class="main-content">
          <div class="fit-border-radius">
          <Section
            v-show="activeTab === 'experiences'"
            v-for="exp in experiences" 
            :title="exp.title"
            :place="exp.place"
            :date="exp.date"
            :project-sets="exp.projectSets"
            :projects="exp.projects"
            v-model="activeProject"/>
          <Section
            v-show="activeTab === 'formations'"
            v-for="formation in formations" 
            :title="formation.title"
            :place="formation.place"
            :date="formation.date"
            :project-sets="formation.projectSets"
            :projects="formation.projects"
            v-model="activeProject"/>

          <WordCloud v-if="activeTab === 'competences'"/>
          <LinkList v-if="activeTab === 'liens'"/>
        </div>
      </div>
      </div>
</template>

<style scoped lang="scss">
.parent {
  display: grid;
  grid-template-rows: 5rem 3fr;

}
.main-content {
  overflow: hidden;
  border-radius: 3px;
  width: 90%;
  justify-self: right;
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
  justify-content: center;
  gap: 1rem;
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

    i {
      font-size: 1.5rem;
      position: relative;
      top: -2px
    };
    span {
      margin-left: 0.5rem;
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
    justify-content: left;
    scrollbar-width: thin;
    padding-bottom: 8px;
    box-sizing: content-box;
    &::-webkit-scrollbar {
      width: 3px; /* extra fin */
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      margin: 6px 0; /* retire visuellement les "flèches" */
    }

  }
}


</style>
