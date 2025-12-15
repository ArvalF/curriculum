<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core'
import { useCssVar } from '@vueuse/core'

const { width, height } = useWindowSize()
const smScreen = 992
const props = defineProps<{
  activeCompetences: Array<String>
  activeExemples: Array<LinkItem>
  defaultInfos: Array<String>
}>()

const activeCompetencesRef = ref(props.activeCompetences)
watch(() => props.activeCompetences, (val) => {
  activeCompetencesRef.value = val;
})

const activeExemplesRef = ref<Array<LinkItem> | undefined>(props.activeExemples)
  
watch(() => props.activeExemples, (val) => {
  activeExemplesRef.value = val;
})
const hasInfos = computed(() => {
  if ((activeCompetencesRef.value && activeCompetencesRef.value.length > 0)
  || (activeExemplesRef.value && activeExemplesRef.value.length > 0))
    return true
  else
    return false
})
function deactiveSelection() {
  activeCompetencesRef.value = []
  activeExemplesRef.value = []
}
</script>

<template>
     <div class="left-column">
        <h2 class="title" @click="deactiveSelection">
            <i class="ri-information-2-line"></i>
            Informations
        </h2>
        <div class="left-menu section-container">
            <!-- Liste d'Exemples -->
             <template v-if="width > smScreen">
              <div v-if="activeExemplesRef && activeExemplesRef.length > 0">
              <div class="section-title">Références</div>
              <ul class="section-content highlight-info" >
                <li v-for="exemple in activeExemplesRef">
                  <a :href="exemple.link">{{ exemple.label }}</a>
                </li>
              </ul>
            </div>
          <!-- Liste de Compétences -->
              <div v-if="activeCompetencesRef && activeCompetencesRef.length > 0">
                <div class="section-title">Compétences</div>
                <ul class="section-content highlight-info competences" >
                  <li v-for="competence in activeCompetencesRef">
                    {{ competence }}
                  </li>
                </ul>
              </div>
             </template>
              <template v-if="
              width < smScreen 
              || !hasInfos">
              <div>
                <div class="profile">
                  <img src="/profile-pic.png" class="profile-pic">
                  <div class="name">
                    <p>Hector</p>
                    <p>Caillaud</p>
                  </div>
                </div>
                <div class="section-content text-justify" >
                  <div>
                    <b>Développeur, géographe et enseignant </b> avec une solide expérience en création d'<b>interfaces web cartographiques.</b>
                  </div> 
                  <br>
                  <div>
                    Profil à la fois technique et analytique, je souhaite contribuer en priorité à des projets intégrant une <b>visualisation de données spatialisées</b>.
                  </div>
                </div>
              </div>
          <div>
            <div class="section-title">
              <i class="ri-contacts-line"></i>
              Contacts
            </div>
            <ul class="section-content highlight-info" >
              <li v-for="info in defaultInfos">
                {{ info }}
              </li>
            </ul>
          </div>
              </template>
           

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
  @include section-content($tertiary-bkg-color);
  @include b-border-radius;
  @include t-border-radius;
}
.text-justify {
  text-align: justify;
  margin-bottom: 1rem;
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
  cursor: pointer;
    i {
      font-size: 1.5rem;
      position: relative;
      top: -2px
    };
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

.competences  {
  font-weight: bolder;

}
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  .name {
    font-weight: bold;
    line-height: 0.5rem;
    font-size: 1.5rem;
  }
}
.profile-pic {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0.25rem solid;
  padding: 5px;
}
</style>
