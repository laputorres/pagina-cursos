<template>
  <div :class="{ 'rtl': isRTL, 'dark': isDarkMode, 'lang': isChangeLang }">
    <router-view/>
  </div>
</template>

<script>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';


export default {
  setup() {
    const store = useStore();
   
    const isRTL = computed(() => store.state.isRTL);
    const isDarkMode = computed(() => store.state.isDarkMode);
    const isChangeLang = computed(() => store.state.isChangeLang);


    

    return {
      isRTL,
      isDarkMode,
      isChangeLang
    };
  },
};
</script>

<style>
.rtl {
  direction: rtl; /* Aplica la dirección de derecha a izquierda */
}
</style>
