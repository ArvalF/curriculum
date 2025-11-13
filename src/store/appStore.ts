import {
    defineStore
  } from 'pinia';
  import { computed, ref } from 'vue';

  export const useAppStore = defineStore('app', () => {
  
    const hitProject = ref(false)
    const wormHeadPixelX = ref()
    const wormHeadPixelY = ref()

    const activeElement = computed(() => {
        if (wormHeadPixelX.value && wormHeadPixelY.value) {
            const element = document.elementFromPoint(wormHeadPixelX.value, wormHeadPixelY.value)
            if (element && element.closest(".section-list-element"))
            {
                return element.closest(".section-list-element")
            }
        }
        return null  
    })
  
    function setWormHeadPixelX (X : number) {
        wormHeadPixelX.value = X
    }
    function setWormHeadPixelY (Y : number) {
        wormHeadPixelY.value = Y
    }
    function setHitProject (){
        hitProject.value = true
    }
    return {
        wormHeadPixelX,
        wormHeadPixelY,
        activeElement,
        hitProject,
        setWormHeadPixelX,
        setWormHeadPixelY,
        setHitProject
    }
  });