<template>
  <div class="h-screen md:flex flex-row-reverse">
    <div
      class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
      <div>
        <h1 class="text-white font-bold text-4xl font-sans">Pagina Cursos</h1>
        <p class="text-white mt-1">Already login?</p>
        <router-link to="/register">
          <button type="submit" class="block w-28 bg-white text-indigo-800 m-auto mt-4 py-2 rounded-2xl font-bold mb-2">
            Register
          </button>
        </router-link>
      </div>
      <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
    </div>
    <div class="flex flex-col md:w-1/2 justify-center py-10 items-center bg-white">
      <h1 class="text-gray-800 font-bold text-2xl mb-5">Welcome back!</h1>
      <button class="flex items-center border-2 w-[50%] h-[50px] py-2 px-3 rounded-2xl mb-4  hover:bg-gray-200">
        <div class="relative flex items-center space-x-1 w-full justify-center">
          <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5"
            alt="google logo">
          <span
            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
            with Google</span>
        </div>
      </button>
      <form class="bg-white w-[50%]" @submit.prevent="login">
        

        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input v-model="email" class="pl-2 outline-none border-none" type="text" name="" id=""
            placeholder="Email Address" required />
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd" />
          </svg>
          <input v-model="password" class="pl-2 outline-none border-none" type="text" name="" id=""
            placeholder="Password" required />
        </div>
        <button type="submit"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
        <router-link to="/forgot-password">
          <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
        </router-link>
      </form>
    </div>
    <fwb-alert v-if="showAlert"
      class="fixed bottom-[3%] right-[3%] max-w-[50vw] p-4 text-lg text-white rounded-lg bg-red-500" closable icon
      type="alert">
      {{ alertMessage }}
    </fwb-alert>
  </div>
</template>

<!-- Añade esta parte al final de tu script en tu componente -->

// Componente de login

<script>
import { auth } from '@/FirebaseConfig';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useStore } from 'vuex';

export default {
  setup() {

    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const store = useStore();

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = auth.currentUser;
        console.log(store.state);
        console.log('Usuario después de iniciar sesión:', user);
        await store.dispatch('login', user);
        console.log('Estado de Vuex después de iniciar sesión:', store.state);
        router.replace('/dashboard');
      } catch (error) {
        console.log(error.message);
      }
    };

    return { email, password, login }
  },



};
</script>
