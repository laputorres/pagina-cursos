<template>

<div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-14 h-14 rounded-full" src="https://www.w3schools.com/howto/img_avatar.png" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">{{ nombreUsuarioLogeado}}</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <router-link to="/dashboard" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/dashboard/settings-profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</router-link>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
           <form @submit.prevent="mysignOut">
            <button type="submit" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
           </form>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

</template>

<script>
import { signOut } from 'firebase/auth';
import { auth } from '@/FirebaseConfig';
import router from '@/router';
import {   ref, onMounted } from 'vue';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { initFlowbite } from 'flowbite'



export default {
  setup() {
    const showDropDown = ref(false);
    const showSide = ref(true);
 
    const uid = auth.currentUser.uid;
    const db = useFirestore();
    const usersCollection = collection(db, 'usuarios');
    const nombreUsuarioLogeado = ref('');
    const queryRef = query(usersCollection, where('uid', '==', uid));

    onMounted(() => {
    initFlowbite();
})
    const fetchData = async () => {
      const querySnapshot = await getDocs(queryRef);
      const userData = querySnapshot.docs.map(doc => doc.data());

      if (userData.length > 0) {
        nombreUsuarioLogeado.value = userData[0].name;
      } else {
        nombreUsuarioLogeado.value = 'Nombre no encontrado';
      }
    };


    // Llama a la función fetchData para ejecutar la consulta
    fetchData();

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
      nombreUsuarioLogeado,
      uid
    };
  },
}

</script>