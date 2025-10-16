<script setup lang="ts">


const props = defineProps<{
  title?: string
  place?: String
  date?: String
  projects?: Array<String> 
}>()

const activeProject = defineModel()
function setActiveProject(project: String) {
    activeProject.value = {exp: props.title, project: project};
}
</script>

<template>
    <div class="section-container">
        <div class="section-title">{{ title }}, <span class="place">{{ place }}</span></div>
        <div class="date">{{ date }}</div>
        <div class="section-content">
            <ul class="project-list">
                <li @mouseover="setActiveProject(project)" v-for="project in projects ">
                    {{ project }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.section-container {
  padding : 1rem;
  border-radius: 3px;
  max-width: 80%;
}
.section-content {
  border-radius: 3px;
  background-color: $terciary-bkg-color;
}
.section-title {
    font-size: large;
    font-weight: bold;
    color: $primary-color;
    background-color: $background-color;
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
.project-list {
    list-style-type: none;
    font-size: 0.9rem;
    li {
        margin-bottom: 0.5rem;
    }
}
</style>
