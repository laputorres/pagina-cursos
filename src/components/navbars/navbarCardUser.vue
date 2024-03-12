<template>

  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <button type="button" class="inline-block flex items-center mb-6 rounded-full bg-gray-300 px-5 h-16 line-height-[3.75rem]"
      id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
      <img class="rounded-full w-12 float-left h-12" :src="user.imgSrc || urlDefaultImage" alt="user photo">
      <span class="texto-[16px] w-24 ml-[10px]">{{ user.nombreUsuarioLogeado }}</span>
    </button>
    <!-- Dropdown menu -->
    <div
      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown">
      <div class="px-4 py-3">

        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ user.emailUsuarioLogeado }}</span>
      </div>
      <ul class="py-2" aria-labelledby="user-menu-button">
        <li>
          <router-link to="/dashboard"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/dashboard/settings-profile"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</router-link>
        </li>
        <li>
          <a href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <form @submit.prevent="mysignOut">
            <button type="submit"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
              out</button>
          </form>
        </li>
      </ul>
    </div>
   
  </div>

</template>

<script>
import { signOut } from 'firebase/auth';
import { auth } from '@/FirebaseConfig';
import router from '@/router';
import { ref, onMounted, computed } from 'vue';
import { initFlowbite } from 'flowbite'
import { useStore } from 'vuex';
import { useFirebaseStorage, useStorageFileUrl } from 'vuefire';
import { ref as storageRef } from '@firebase/storage'

export default {
  setup() {
    const showDropDown = ref(false);
    const showSide = ref(true);
    const storage = useFirebaseStorage();
    const defaultImageUrl = storageRef(storage, '/free-avatar-370-456322.webp');
    const { url: urlDefaultImage } = useStorageFileUrl(defaultImageUrl);




    onMounted(() => {
      initFlowbite();
    })

    const store = useStore();

    const user = computed(() => store.getters.currentUser);
    console.log("imagen navbar card: ", defaultImageUrl);
    console.log('Valor de user.imgSrc:', user.value.imgSrc);
    // ... abrir y cerrar menu
    const toggleSideBar = () => {
      showSide.value = !showSide.value;
    };

    const toggleDrop = () => {
      showDropDown.value = !showDropDown.value;
    };
    // ... cerrar sesion
    const mysignOut = async () => {
      try {
        await signOut(auth);
        router.replace('/');
      } catch (error) {
        console.log(error.message);
      }
    };

    return {
      showDropDown,
      showSide,
      toggleSideBar,
      toggleDrop,
      mysignOut,
      user,
      urlDefaultImage

    };
  },
}

</script>