<template>
  <div id="">

      <!-- breadcrumb -->
      <navbarUser></navbarUser>
          <!-- breadcrumb end -->

         

  </div>
</template>

<script>
import { useStore } from 'vuex';
import navbarUser from '@/components/navbars/navbarUser.vue';

export default {
 components:{
  navbarUser
 }
}
</script>