<script setup lang="ts">
import { useDefineLinks } from '@/composables/defineExperiences'

const links = useDefineLinks()
</script>

<template>
    <div class="section-container">
        <div class="section-title">Profil Github professionnel</div>
        <div class="section-content">
            <div  class="link-item">
                <i class="ri-links-line"></i>
                <a href="https://github.com/IGNFhc"> Profil Github IGN</a>
            </div>
        </div>
        <div class="section-title">Projets Front publics</div>
        <div class="section-content">
            <div v-for="link in links" class="link-item">
                <i class="ri-links-line"></i>
                <a :href="link[0]">{{ link[1] }}</a>
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
.section-content {
  margin-left: 1rem;
  a {
    margin-bottom: 1rem;
    text-decoration: none;
    padding-top: 10px;
    line-height: 2rem;
    color: $secondary-color;

    &:hover {
        color: $highlight-color2;
    }
  }
}
.link-item {
    i {
        margin-right: 0.5rem;
    }
    &:hover {
        color: $highlight-color2;
    }
}
</style>