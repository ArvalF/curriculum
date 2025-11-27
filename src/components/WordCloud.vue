<script setup lang="ts">
import { useDefineCompetences } from '@/composables/defineExperiences'
</script>

<template>
    <div class="section-container">
      <div v-for="cs, key in useDefineCompetences()" class="competence-type">
        <div class="section-title"><span>{{ key }}</span></div>
        <div class="competences-list">
          <div v-for="c in cs" class="competence">
            {{ c }}
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.section-container {
    @include section-container($background-color);
}
.section-title {
  border-radius: 3px;
  @include section-title($primary-color, $background-color);
}
.competences-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: inherit;
  overflow-x: hidden;
}
.competence-type:hover {
  .section-title > span {
    background-color: $highlight-color2;

  }
}

@media (max-width: $sm-screen)  
{
  .competences-list {
    margin-top: 1rem;
  }
}
.competence{
  width: max-content;
  background-color: $tertiary-bkg-color;
  line-height: 2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding : 0.5rem;
  border-radius: 3px;
  font-weight: bold;
  opacity: 0.8;
  &:hover {
    background-color: $secondary-bkg-color;
    font-weight: bold;
  }
  span {
    color: $highlight-color2;
    font-weight: bold;
  }
}
</style>