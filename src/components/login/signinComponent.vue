<template>
  <div class="min-h-screen max-sm:min-h-[100dvh] bg-gray-100 py-6 flex flex-col relative justify-center w-[100vw] overflow-hidden sm:py-12">

    <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8">
    </div>
    <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8">
    </div>
    <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
    <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
    <div class="relative py-3 sm:max-w-[90vw] sm:mx-auto">

      <div
        class="absolute inset-0 bg-gradient-to-r max-sm:w-[90vw] max-sm:mx-auto from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
      </div>
      <div class="relative max-sm:w-[90vw] max-sm:mx-auto px-4 max-sm:py-10 bg-white shadow-lg rounded-3xl sm:p-20">
        <form class="max-w-md max-sm:w-[75vw] mx-auto" @submit.prevent="login">
          <div>
            <h1 class="text-2xl font-semibold">Welcome back!</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input v-model="email" class="pl-2 outline-none border-none focus:outline-none" type="text" name=""
                  id="" placeholder="Email Address" required />
              </div>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd" />
                </svg>
                <input v-model="password" class="pl-2 outline-none border-none" type="text" name="" id=""
                  placeholder="Password" required />
              </div>
              <button type="submit"
                class="block w-full bg-gradient-to-r from-cyan-400 to-sky-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
              <span class="text-sm ml-2 mt-5 hover:text-cyan-500  text-gray-600 cursor-pointer">
                <router-link to="/forgot-password" class="">
                  Forgot Password ?
                </router-link>
              </span>
            </div>
          </div>
        </form>
        <div class="w-full flex flex-col justify-center">
          <button
            class="flex items-center bg-white border justify-center border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1">
              <title>Google-color</title>
              <desc>Created with Sketch.</desc>
              <defs> </defs>
              <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1" fill="#FBBC05"> </path>
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2" fill="#EB4335"> </path>
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3" fill="#34A853"> </path>
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4" fill="#4285F4"> </path>
                  </g>
                </g>
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>
          <span class="w-full mt-5">
            Don´t have an account?
            <router-link to="/register" class="text-cyan-500"> register</router-link>
          </span>
        </div>
      </div>
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
import { ref,watch } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useStore } from 'vuex';

export default {
  setup() {

    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const store = useStore();
    const showAlert = ref(true);
    const alertMessage = ref('');

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
        if (error.code === 'auth/invalid-credential') {
          showAlert.value = true;
          alertMessage.value = 'Invalid credentials. Please verify your login information and try again.';
        } else if (error.code === 'auth/invalid-email') {
          showAlert.value = true;
          alertMessage.value = 'Invalid email. Please verify your login information and try again.';
        } else {
          console.log(error.message); // Mostrar otros errores en la consola para depuración
        }
      }
    };
    watch(showAlert, (newValue) => {
      if (newValue) {
        setTimeout(() => {
          showAlert.value = false;
        }, 3000);
      }
    });

    return { email, password, login, showAlert, alertMessage }
  },



};
</script>
