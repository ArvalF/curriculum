<script setup lang="ts">
const props = defineProps<{
  title: string
  place: String
  date: string
  projects?: Array<Project> 
}>()

const activeProject = defineModel<ActiveExp>()
function setActiveProject(project: string) {
    activeProject.value = {exp: props.title, project: project};
}
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
                @mouseover="setActiveProject(project.title)"
                :id="project.title"
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
