<script setup lang="ts">


const props = defineProps<{
  activeCompetences?: Array<String>
  defaultInfos?: Array<String>
}>()

</script>

<template>
     <div class="left-column">
        <h2>Informations</h2>
        <div class="left-menu">
          <ul>
            <li v-if="activeCompetences"
                v-for="competence in activeCompetences">
              {{ competence }}
            </li>
            <li v-else
                v-for="info in defaultInfos">
              {{ info }}
            </li>
          </ul>
        </div>
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
