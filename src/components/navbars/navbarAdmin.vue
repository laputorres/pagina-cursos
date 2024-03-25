<template>
  
  <div class="w-[60vw] rounded-[30px] max-sm:absolute m-2 max-sm:m-0 md:w-1/3 lg:w-64  h-[97vh] max-sm:h-[100dvh]  max-sm:rounded-none   md:top-0 md:left-0  lg:block bg-blue z-30"
    :class="sideBarOpen ? '' : 'hidden'" id="main-nav" @click="handleClickOutside">

    

    <div class=" flex flex-col top-0 left-0 w-64  bg-custom1  h-full max-sm:rounded-none  rounded-2xl">
      <div class="flex items-center justify-center max-sm:justify-between h-14 ">
        <router-link to="/" class="font-semibold text-3xl text-center text-gray-100 pl-4">LOGO</router-link>
        <button @click="$emit('toggleSideBar')" class="hidden max-sm:block max-sm:mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M10.247 6.74032C11.0733 7.56669 11.4865 7.97988 12 7.97988C12.5135 7.97988 12.9267 7.5667 13.753 6.74034L13.753 6.74032L15.5066 4.98681L15.5066 4.9868C15.9142 4.57922 16.1181 4.37536 16.3301 4.25295C17.3964 3.63729 18.2747 4.24833 19.0132 4.98681C19.7517 5.7253 20.3627 6.60358 19.7471 7.66993C19.6246 7.88195 19.4208 8.08575 19.0133 8.49334L17.2599 10.2467C16.4335 11.0731 16.0201 11.4865 16.0201 12C16.0201 12.5135 16.4333 12.9267 17.2597 13.7531L19.0132 15.5066C19.4208 15.9142 19.6246 16.118 19.7471 16.33C20.3627 17.3964 19.7517 18.2747 19.0132 19.0132C18.2748 19.7517 17.3964 20.3627 16.3301 19.747C16.118 19.6247 15.9142 19.4209 15.5066 19.0132L13.7533 17.2599L13.7532 17.2599C12.9271 16.4337 12.5135 16.0201 12 16.0201C11.4865 16.0201 11.0729 16.4337 10.2467 17.2599L10.2467 17.2599L8.49341 19.0132C8.08577 19.4209 7.88196 19.6247 7.66993 19.747C6.60365 20.3627 5.72522 19.7517 4.98681 19.0132C4.24827 18.2747 3.63732 17.3964 4.25295 16.33C4.37537 16.118 4.57918 15.9142 4.98681 15.5066L6.74032 13.7531C7.56669 12.9267 7.97987 12.5135 7.97987 12C7.97987 11.4865 7.56647 11.0731 6.7401 10.2467L4.98673 8.49334C4.57915 8.08575 4.37536 7.88195 4.25295 7.66993C3.63729 6.60358 4.24833 5.7253 4.98681 4.98681C5.7253 4.24833 6.60357 3.63729 7.66993 4.25295C7.88195 4.37536 8.08581 4.57922 8.4934 4.9868L8.49341 4.98681L10.247 6.74032Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </button>
      </div>
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-4 space-y-1">
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="text-sm font-light tracking-wide text-gray-200">{{$t('menu')}}</div>
            </div>
          </li>
          <li>
            <router-link to="/dashboard"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-custom1-dark text-white  border-l-4 border-transparent hover:rounded-2xl hover:mx-5 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff"
                  fill="none">
                  <path
                    d="M9.06165 4.82633L3.23911 9.92134C2.7398 10.3583 3.07458 11.1343 3.76238 11.1343C4.18259 11.1343 4.52324 11.4489 4.52324 11.8371V15.0806C4.52324 17.871 4.52324 19.2662 5.46176 20.1331C6.40029 21 7.91082 21 10.9319 21H13.0681C16.0892 21 17.5997 21 18.5382 20.1331C19.4768 19.2662 19.4768 17.871 19.4768 15.0806V11.8371C19.4768 11.4489 19.8174 11.1343 20.2376 11.1343C20.9254 11.1343 21.2602 10.3583 20.7609 9.92134L14.9383 4.82633C13.5469 3.60878 12.8512 3 12 3C11.1488 3 10.4531 3.60878 9.06165 4.82633Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 16H12.009" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">{{$t('dashboard')}}</span>

            </router-link>
          </li>
          <li>
            <a href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-600 text-white hover:text-gray-100 border-l-4 border-transparent hover:rounded-2xl hover:mx-5 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4">
                  </path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Inbox</span>
              <span
                class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
            </a>
          </li>
          <li>
            <a href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-700 text-white hover:text-gray-100 border-l-4 border-transparent hover:rounded-2xl hover:mx-5 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                  </path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Comments</span>
            </a>
          </li>
          <li>
            <a href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-700 text-white hover:text-gray-100 border-l-4 border-transparent hover:rounded-2xl hover:mx-5 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                  </path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Notifications</span>
              <span
                class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
            </a>
          </li>

          <li>
            <router-link to="/dashboard/create-curse"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-700 text-white hover:text-gray-100 border-l-4 border-transparent hover:rounded-2xl hover:mx-5 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                  </path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">{{$t('createCourse')}}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/categories"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-700 text-white hover:text-gray-100 border-l-4 border-transparent hover:rounded-2xl hover:mx-5 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                  </path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">{{$t('categories')}}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/users"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-700 text-white hover:text-gray-100 border-l-4 border-transparent hover:rounded-2xl hover:mx-5 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                  </path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">{{$t('users')}}</span>
              <span
                class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
            </router-link>
          </li>

          <li>
            <router-link to="/dashboard/settings-profile"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-700 text-white hover:text-gray-800 border-l-4 border-transparent hover:rounded-2xl hover:mx-5 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </span>

              <span class="ml-2 text-sm tracking-wide truncate">{{$t('profile')}}</span>
            </router-link>
          </li>
          <li>
            <a href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-700 text-white hover:text-gray-800 border-l-4 border-transparent hover:rounded-2xl hover:mx-5 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
            </a>
          </li>
          
        </ul>
      </div>
      <div class="w-full">
        <form @submit.prevent="mysignOut">
          <button type="submit"
            class="relative flex flex-row items-center h-11 w-full justify-center focus:outline-none hover:bg-red-400 text-white hover:text-gray-100 border-l-4 border-transparent bg-red-500 max-sm:rounded-none rounded-b-2xl  pr-6">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                </path>
              </svg>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">{{$t('logout')}}</span>
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { onMounted, onUnmounted } from 'vue';
import { signOut } from 'firebase/auth';
import { auth } from '@/FirebaseConfig';
import { useRouter } from 'vue-router';

export default {
  props: {
    showSide: Boolean, // Propiedad que representa el estado de la barra lateral
  },
  setup() {
    const router = useRouter();
    const mysignOut = async () => {
      try {
        await signOut(auth);
        router.push('/');
      } catch (error) {
        console.log(error.message);
      }
    };
    
    const sideBarOpen = mapState('sideBarOpen');

    const toggleSideBar = () => {
      sideBarOpen.value = false;
    };

    const handleClickOutside = (event) => {
      // Si se hace clic dentro del menú, no hacemos nada
      if (event.target.closest('#main-nav')) return;

      // Cerrar el menú
      sideBarOpen.value = false;
    };

    // Cerrar el menú cuando se hace clic en un enlace
    const handleLinkClick = () => {
      sideBarOpen.value = false;
    };

    // Agregar event listener cuando el componente está montado
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    // Remover event listener cuando el componente se desmonta
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });


    return {
      mysignOut,
      sideBarOpen,
      toggleSideBar, handleClickOutside
    };
  }
}
</script>
