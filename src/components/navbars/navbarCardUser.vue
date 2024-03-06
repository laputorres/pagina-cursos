<template>

  <div class="w-[150px] ">
    <div class="flex items-center cursor-pointer justify-start space-x-2" @click="toggleDrop">
      <div class="font-semibold dark:text-black text-left">
        <div>{{ nombreUsuarioLogeado }}</div>

      </div>
      <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/logo.png" alt="">
    </div>
    <!-- Drop down -->
    <div v-show="showDropDown"
      class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1 text-left" role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">My Dashboard</a>
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
          id="menu-item-1">Profile</a>
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
          id="menu-item-2">Membership</a>
        <form @submit.prevent="mysignOut" action="#" role="none">
          <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem"
            tabindex="-1" id="menu-item-3">Sign out</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import { signOut } from 'firebase/auth';
import { auth } from '@/FirebaseConfig';
import router from '@/router';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { collection, onSnapshot, query, where, getDocs } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { useCollection } from 'vuefire';
import { useDocument } from 'vuefire';


export default {
  setup() {
    const showDropDown = ref(false);
    const showSide = ref(true);
    const store = useStore();
    const uid = auth.currentUser.uid;
    const db = useFirestore();
    const usersCollection = collection(db, 'usuarios');
    const nombreUsuarioLogeado = ref('');


    const queryRef = query(usersCollection, where('uid', '==', uid));
    const result = ref([]);

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