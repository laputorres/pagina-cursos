<template>
  <div class="w-screen   h-screen fixed flex">
    <!-- Side bar -->
    <div class="bg-gray-100" v-show="showSide">

      <!-- aqui va el menu -->
      <navbarAdmin />
    </div>
    <div class="w-full h-full bg-gray-50 overflow-scroll">
      <div class="h-[80px] z-[1] fixed flex items-center bg-gray-100 shadow-sm px-[30px] w-full sm:w-1/2 md:w-1/3 lg:w-[80vw] xl:w-[80vw] justify-between  py-[10px]">
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[40px]" @click="toggleSideBar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>

        </div>

        <div class="w-[calc(100%-30px) flex justify-end">

          <!-- User login -->
          <navbarCardUser />
        </div>
      </div>
      <!-- Dashboard content -->
      <div class="h-[calc(100vh-50px)]] mt-[60px] bg-gray-100  p-[20px]">
        <div class=" p-[20px]  bg-gray-100 h-full">

          <router-view></router-view>




        </div>
      </div>
    </div>
    <!-- Main  -->
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
import navbarCardUser from '../components/navbars/navbarCardUser'
import navbarAdmin from '../components/navbars/navbarAdmin'

export default {
  components: {
    navbarCardUser,
    navbarAdmin
  },
  computed: {
    user() {
      return this.$store.getters.currentUser;
      
    },
    
  },
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
        router.push('/');
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
      uid,
     
    };
  },


};
</script>

<style></style>