<script setup lang="ts">
const props = defineProps<{
  title: string
  place: String
  date: string
  projectSets?: ProjectSet[]
  projects?: Project[]
}>()

const activeProject = defineModel<ActiveExp>()
function setActiveProject(exp: string, project: string) {
    activeProject.value = {exp: exp, project: project};
}
</script>

<template>
    <div class="section-container">
        <div class="section-title">
            {{ title }}, <span class="place">{{ place }}</span>
            <div class="date">{{ date }}</div>
        </div>
        <div class="section-content">
            <!-- Liste de Groupe de projets -->
            <ul v-if="projectSets" v-for="projectSet in projectSets">
                <div v-if="projectSet.title" class="project-set"><span>{{ projectSet.title.toUpperCase() }}</span></div>
                <li 
                v-for="project in projectSet?.projects"
                ref="arrayProjectRefs"
                @mouseover="setActiveProject(projectSet.title, project.title)"
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
            <!-- Liste simple de Projets -->
            <ul v-if="projects">
                <li 
                v-for="project in projects"
                ref="arrayProjectRefs"
                @mouseover="setActiveProject(title, project.title)"
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
//   @include section-content($tertiary-bkg-color);
  @include section-content($tertiary-bkg-color);
@include t-border-radius;
@include b-border-radius;
  @include global-list;
  .project-title {
    font-weight: bold;
    font-style: italic;
    font-size: 1.1rem;
}
    ul {
        li:not(:first-child){
            padding-top: 1.1rem;
        }
    }
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
    font-style: normal;
    margin-left: 1rem;
    color: $primary-color;
    margin-top: 0.5rem;
}
.project-set {
    font-weight: bold;
    width: fit-content;
        span::after {
            content: '';
            display: block;
            width: inherit;
            border-bottom: 3px solid $primary-color;
        }
}

@media (max-width: $sm-screen)  {
    .section-content > ul {
        padding: 0.1rem;
    }
}
@media (min-width: $sm-screen)  {
    .project-title.active > span {
      background-color: $highlight-color2; /* surligné au survol */
    }
}
</style>
