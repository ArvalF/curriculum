import {
    defineStore
  } from 'pinia';
  import { computed, ref, reactive } from 'vue';

  export const useAppStore = defineStore('app', () => {
  
    const hitProject = ref(false)
    const wormHeadPixelX = ref()
    const wormHeadPixelY = ref()

    interface divBounding {
        width: number,
        height: number,
        top: number,
        left: number
    }
    const mainContentBounding: divBounding = reactive({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })

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

    function setMainContentBounding (width: number, height: number, top: number, left: number) {
        mainContentBounding.width = width;
        mainContentBounding.height = height;
        mainContentBounding.top = top;
        mainContentBounding.left = left;
    }
    return {
        wormHeadPixelX,
        wormHeadPixelY,
        activeElement,
        hitProject,
        mainContentBounding,
        setWormHeadPixelX,
        setWormHeadPixelY,
        setHitProject,
        setMainContentBounding
    }
  });