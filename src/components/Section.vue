<script setup lang="ts">
import { ref, watch } from 'vue';
import { useAppStore } from '@/store/appStore';
const props = defineProps<{
  title: string
  place: String
  date: string
  projects?: Array<Project> 
}>()

const store = useAppStore()
const activeProject = defineModel<ActiveExp>()
function setActiveProject(project: string) {
    activeProject.value = {exp: props.title, project: project};
}
const arrayProjectRefs = ref([])


watch (() => store.activeElement, (element) => {
    if (element && element instanceof HTMLElement) {
        let filtered = arrayProjectRefs.value.filter(project => element == project);
        if (filtered.length > 0 && filtered[0]) {
            let active = filtered[0] as HTMLElement
            let activeTitle = active.getAttribute("title")
            if (activeTitle) {
                setActiveProject(activeTitle)
                console.log("Setting hit project to ", activeTitle)
                store.setHitProject()
            }
        }
    }
})
</script>

<template>
    <div class="section-container">
        <div class="section-title">
            {{ title }}, <span class="place">{{ place }}</span>
            <div class="date">{{ date }}</div>
        </div>
        <div class="section-content">
            <ul>
                <li 
                v-for="project in projects"
                ref="arrayProjectRefs"
                @mouseover="setActiveProject(project.title)"
                :id="project.title"
                class="section-list-element"
                :title="project.title"
                :keys="project.title">
                    <div class="project-title" :class="{ active: activeProject?.project === project.title }">
                        <span>{{ project.title }}</span>
                    </div>
                    <div class="project-description">{{ project.description }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.section-content {
//   @include section-content($terciary-bkg-color);
  @include section-content($terciary-bkg-color);
@include t-border-radius;
@include b-border-radius;
  @include global-list;
  .project-title {
    font-weight: bold;
}
    ul {
        margin: 0;
    }
}
.project-title.active > span {
      background-color: $highlight-color2; /* surligné au survol */
}
.section-container {
    @include section-container($background-color);
}
.section-title {
    @include section-title($primary-color, $background-color);
    @include t-border-radius;
}
.date {
    font-size: small;
    font-style: italic;
}
.place {
    font-size: small;
    font-style: italic;
    background-color: $highlight-color;
    max-width: fit-content;
}

.project-description {
    font-size: 0.9rem;
    font-style: normal;
    margin-left: 1rem;
    color: $primary-color;
}

@media (max-width: $sm-screen)  {
        .section-content > ul {
            padding: 0.1rem;
        }
    }
</style>
