<template>
    <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav class="mt-2 max-sm:mt-2 fixed z-10 max-w-[97vw] md:h-[8vh] w-full bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
            aria-label="Global">
            <div class="flex items-center justify-between">
                <router-link to="/" class="flex-none text-xl font-semibold dark:text-white"
                    aria-label="Brand">Brand</router-link>
                <div class="md:hidden">
                    <button @click="navbarOpen = !navbarOpen" type="button"
                        class="size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        aria-label="Toggle navigation">
                        <svg v-if="!navbarOpen" class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                        <svg v-else class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div v-if="navbarOpen || !isMobile" class="">
                <div
                    class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                    <router-link to="/all-categories" class="font-medium text-blue-600 md:py-6 dark:text-blue-500"
                        aria-current="page">{{ $t('allcategories') }}</router-link>
                    <a class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                        href="#">Account</a>
                    <a class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                        href="#">Work</a>
                    <a class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                        href="#">Blog</a>

                    <div class="flex">
                        <button v-if="userAuthenticade" class="mr-2">
                            <navbarCardUser />
                        </button>
                        <div v-else class="flex mr-5 items-center py-2">
                            <router-link to="/login"
                                class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 max-sm:m-0 ease-linear transition-all duration-150">
                                <i class="fas fa-arrow-alt-circle-down"></i> {{ $t('login') }}
                            </router-link>
                            <router-link to="/register"
                                class="bg-emerald-500 max-sm:hidden text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                                <i class="fas fa-arrow-alt-circle-down"></i> {{ $t('getStarted') }}
                            </router-link>
                        </div>
                        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" class=" flex items-center rounded-full line-height-[3.75rem]"
                                id="lenguaje-menu-button" aria-expanded="false" data-dropdown-toggle="lenguaje-dropdown"
                                data-dropdown-placement="bottom">
                                <img v-if="!flagSelected" src="../../assets/english.svg" alt="">
                                <img v-else src="../../assets/hebrew.svg" alt="">

                            </button>
                            <!-- Dropdown menu -->
                            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                id="lenguaje-dropdown">

                                <ul class="py-2" aria-labelledby="lenguaje-menu-button">
                                    <li>
                                        <a @click="toggleDirection(false)"
                                            class="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                            <img src="../../assets/english.svg" alt="" width="20px">
                                            {{$t('english')}}</a>
                                    </li>
                                    <li>
                                        <a @click="toggleDirection(true)"
                                            class=" px-4 gap-2 flex py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                            <img src="../../assets/hebrew.svg" alt="" width="20px">
                                            {{$t('hebrew')}}</a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import navbarCardUser from './navbarCardUser.vue';
import { auth } from '../../FirebaseConfig.ts';
import { ref, onMounted, onUnmounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            navbarOpen: false,
            userAuthenticade: false,
            flagSelected: localStorage.getItem('flagSelected') === 'true',

        };
    },
    computed: {
        isMobile() {
            return window.innerWidth < 768;
        },
    },
    components: {
        RouterLink,
        navbarCardUser
    },
    methods: {
        ...mapActions(['toggleRTL']),
        toggleDirection(isEnglish) {
            // Obtener el estado actual de isRTL
            const currentIsRTL = this.$store.getters.isRTL;

            // Solo cambiar isRTL si el nuevo estado es diferente del actual
            if ((isEnglish && currentIsRTL) || (!isEnglish && !currentIsRTL)) {
                return; // No hay cambio en el idioma, salir de la función
            }

            // Cambiar el estado isRTL según el idioma seleccionado
            this.toggleRTL(!currentIsRTL);

            this.flagSelected = !this.flagSelected;
            localStorage.setItem('flagSelected', this.flagSelected.toString());
            // Recargar la página después de cambiar el idioma
            window.location.reload();
        }


    },
    mounted() {
        // Escucha los cambios en el estado de autenticación
        auth.onAuthStateChanged((user) => {
            this.userAuthenticade = user !== null;
        });
    },
    setup() {

        const containerClass = ref('bg-transparent');

        const changeBackgroundOnScroll = () => {
            const scrollPosition = window.scrollY;
            const headerHeight = document.getElementById('header')?.offsetHeight || 0;

            if (scrollPosition > headerHeight) {
                containerClass.value = 'bg-white fixed  shadow-md';
            } else {
                containerClass.value = 'bg-transparent';
            }
        };



        // Remover evento de desplazamiento al desmontar el componente
        onUnmounted(() => {
            window.removeEventListener('scroll', changeBackgroundOnScroll);
        });

        return {
            containerClasses: containerClass,

        };
    }
};
</script>