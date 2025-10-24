<script setup lang="ts">
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core'
import { useCssVar } from '@vueuse/core'

const { width, height } = useWindowSize()
const smScreen = 992
const props = defineProps<{
  activeCompetences: Array<String>
  activeExemples: Array<LinkItem> | undefined
  defaultInfos: Array<String>
}>()

const hasInfos = computed(() => {
  if ((props.activeCompetences && props.activeCompetences.length > 0)
  || (props.activeExemples && props.activeExemples.length > 0))
    return true
  else
    return false
})

</script>

<template>
     <div class="left-column">
        <h2 class="title">Informations</h2>
        <div class="left-menu section-container">
            <!-- Liste d'Exemples -->
             <template v-if="width > smScreen">
              <div v-if="activeExemples && activeExemples.length > 0">
              <div class="section-title">Exemples</div>
              <ul class="section-content highlight-info" >
                <li v-for="exemple in activeExemples">
                  <a :href="exemple.link">{{ exemple.label }}</a>
                </li>
              </ul>
            </div>
          <!-- Liste de Compétences -->
              <div v-if="activeCompetences && activeCompetences.length > 0">
                <div class="section-title">Compétences</div>
                <ul class="section-content highlight-info" >
                  <li v-for="competence in activeCompetences">
                    {{ competence }}
                  </li>
                </ul>
              </div>
             </template>
             <div>
            <div class="section-title">Contacts</div>
            <ul class="section-content highlight-info" >
              <li v-for="info in defaultInfos">
                {{ info }}
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>

<style scoped lang="scss">
.left-column {
  display: grid;
  grid-template-rows: 4rem 3fr;
}
.left-menu {
  background-color: $background-color;
  border-radius: 3px;
  min-height: 0;
  min-width: 0;
  @include global-list;
}
.section-title {
  border-radius: 3px;
  @include section-title($primary-color, $background-color);
}
.section-container {
    max-width: 80%;
    @include section-container($background-color);
    overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: $primary-color;
  height: 95%;
}
.section-content {
  @include section-content($terciary-bkg-color);
  @include b-border-radius;
  @include t-border-radius;
}
.highlight-info {
  position: relative;       /* pour que le pseudo-élément soit positionné par rapport au UL */
}
.highlight-info::before {
  content: "";
  position: absolute;
  left: 0.5rem;                   /* à gauche du UL */
  top: 1rem;                  /* 10% pour centrer verticalement (80% de hauteur) */
  height: calc(100% - 2.5rem);               /* hauteur 80% du UL */
  width: 3px;                /* épaisseur de la ligne */
  background-color: $highlight-color2;     /* couleur du border-left */
  border-radius: 3px;        /* optionnel, pour arrondir les coins */
}

.title {
  padding-left: 1rem;
}

a {
  color: $secondary-color;
}
a:hover {
    color: $highlight-color2;
}

@media (max-width: $sm-screen)  {
  .section-container {
    max-width: 100%;
}
}
</style>
