<template>
    <header class=" absolute w-full   z-20">
        <!-- Navigation starts -->
        <nav class="bg-transparent  h-auto">
            <div class="sm:mx-5   py-2 xl:py-0">
                <div class="flex items-center justify-between max-sm:px-4">
                    <!-- navigation mobile-->
                    <div class="inset-y-0  max-sm:order-2 left-0 flex items-center md:hidden">
                        <div
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                            <div class="visible xl:hidden">
                                <ul
                                    class="p-2 border-r bg-white dark:bg-gray-700  absolute rounded left-0 right-0 shadow mt-10 md:mt-8 hidden">
                                    <li
                                        class="flex xl:hidden cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <router-link to="/dashboard" class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-grid" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                            </svg>
                                            <span class="ml-2 font-bold">{{ $t('dashboard') }}</span>
                                        </router-link>
                                    </li>
                                    <li
                                        class="xl:hidden flex-col cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                        <router-link to="/all-categories" class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-puzzle" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1">
                                                </path>
                                            </svg>
                                            <span class="ml-2 font-bold">{{ $t('courses') }}</span>
                                        </router-link>
                                    </li>
                                    <li
                                        class="xl:hidden cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-compass" width="20" height="20"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                            <circle cx="12" cy="12" r="9"></circle>
                                        </svg>
                                        <span class="ml-2 font-bold">{{ $t('aboutUs') }}</span>
                                    </li>
                                    <li
                                        class="border-b border-gray-300 xl:hidden dark:text-gray-200 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-code" width="20" height="20"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="7 8 3 12 7 16"></polyline>
                                            <polyline points="17 8 21 12 17 16"></polyline>
                                            <line x1="14" y1="4" x2="10" y2="20"></line>
                                        </svg>
                                        <span class="ml-2 font-bold">{{ $t('contact') }}</span>
                                    </li>
                                    <li
                                        class="cursor-pointer  text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <div v-if="userAuthenticade" class="flex items-center">
                                            <div
                                                class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                                <img class="rounded h-10 w-10 object-cover"
                                                    :src="user.imgSrc || urlDefaultImage" alt="logo" />
                                            </div>
                                            <p class="text-sm ml-2 cursor-pointer">{{ user.nombreUsuarioLogeado }}</p>
                                            <div class="sm:ml-2 text-white relative">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" fill="none" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                        <div v-else class="flex mr-5 items-center py-2">
                                            <router-link to="/login"
                                                class=" text-white bg-custom1-light text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 max-sm:m-0 ease-linear transition-all duration-150">
                                                <i class="fas fa-arrow-alt-circle-down"></i> {{ $t('login') }}
                                            </router-link>
                                            <router-link to="/register"
                                                class=" max-sm:hidden text-white bg-custom1-light text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                                                <i class="fas fa-arrow-alt-circle-down"></i> {{ $t('getStarted') }}
                                            </router-link>
                                        </div>
                                    </li>
                                    <li
                                        class="cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-user" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="7" r="4" />
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                            </svg>
                                            <span class="ml-2">Profile</span>
                                        </div>
                                    </li>
                                </ul>
                                <svg @click="MenuHandler($event, true)" aria-haspopup="true" aria-label="Main Menu"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="show-m-menu icon icon-tabler icon-tabler-menu dark:text-gray-200" width="35" height="35"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <line x1="4" y1="8" x2="20" y2="8"></line>
                                    <line x1="4" y1="16" x2="20" y2="16"></line>
                                </svg>
                                <div class="hidden close-m-menu text-gray-700 dark:text-gray-200" @click="MenuHandler($event, false)">
                                    <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="31" height="31"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Desktop -->
                    <div
                        class="flex w-full sm:w-[15vw] max-sm:order-0  items-center sm:items-stretch justify-end max-sm:justify-start sm:justify-start">
                        <router-link to="/" class="flex items-center">
                            <svg aria-label="Home" id="logo" enable-background="new 0 0 300 300" height="44"
                                viewBox="0 0 300 300" width="43" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path fill="#4c51bf"
                                        d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z" />
                                </g>
                            </svg>
                            <h2 class="hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3">The North
                            </h2>
                        </router-link>
                    </div>
                    <div class="flex sm:w-[75vw] justify-between">
                        <div class="hidden md:flex">
                            <router-link to="/dashboard"
                                class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                                <span class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                    </svg>
                                </span>
                                {{ $t('dashboard') }}
                            </router-link>
                            <router-link to="/all-categories"
                                class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                                <span class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1">
                                        </path>
                                    </svg>
                                </span>
                                {{ $t('courses') }}
                            </router-link>
                            <a href="javascript: void(0)"
                                class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                                <span class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                        <circle cx="12" cy="12" r="9"></circle>
                                    </svg>
                                </span>
                                {{ $t('aboutUs') }}
                            </a>
                            <a href="javascript: void(0)"
                                class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                                <span class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="7 8 3 12 7 16"></polyline>
                                        <polyline points="17 8 21 12 17 16"></polyline>
                                        <line x1="14" y1="4" x2="10" y2="20"></line>
                                    </svg>
                                </span>
                                {{ $t('contact') }}
                            </a>
                        </div>
                        <div class="hidden md:flex items-center">

                            <div class="ml-6 relative">
                                <div class="flex items-center relative" @click="dropdownHandler($event)">
                                    <ul
                                        class="p-2 w-40 border-r bg-white dark:bg-gray-700 absolute rounded right-0 shadow top-0 mt-16 hidden">
                                        <li
                                            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 dark:text-gray-100 hover:bg-custom1 hover:text-gray-100 hover:rounded-xl focus:outline-none">
                                            <div class="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-user" width="20" height="20"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx="12" cy="7" r="4" />
                                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                </svg>
                                                <span class="ml-2">My Profile</span>
                                            </div>
                                        </li>
                                        <li
                                            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 dark:text-gray-100 hover:bg-custom1 hover:text-gray-100 hover:rounded-xl focus:outline-none">
                                           <div class="flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-help" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="12" y1="17" x2="12" y2="17.01" />
                                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                            </svg>
                                            <span class="ml-2">Help Center</span>
                                           </div>
                                        </li>
                                        <li
                                            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 dark:text-gray-100 hover:bg-custom1 hover:text-gray-100 hover:rounded-xl focus:outline-none">
                                           <div class="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-settings" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <span class="ml-2">Account Settings</span>
                                           </div>
                                        </li>
                                        <li @click="mysignOut"
                                            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 dark:text-gray-100 hover:bg-red-500 hover:text-gray-100 hover:rounded-xl focus:outline-none">
                                            <div class="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-settings" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <span class="ml-2">Logout</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div v-if="userAuthenticade" class="flex items-center">
                                        <div
                                            class="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                            <img class="rounded-full h-10 w-10 object-cover"
                                                :src="user.imgSrc || urlDefaultImage" alt="logo" />
                                        </div>
                                        <div class="ml-2 text-gray-600 dark:text-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                                                width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="currentColor" fill="none" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>

                                    <div v-else class="flex mr-5 items-center py-2">
                                        <router-link to="/login"
                                            class=" text-white bg-custom1-light text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 max-sm:m-0 ease-linear transition-all duration-150">
                                            <i class="fas fa-arrow-alt-circle-down"></i> {{ $t('login') }}
                                        </router-link>
                                        <router-link to="/register"
                                            class=" max-sm:hidden text-white bg-custom1-light text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                                            <i class="fas fa-arrow-alt-circle-down"></i> {{ $t('getStarted') }}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative order-1 max-sm:w-[15vw] max-sm:mx-3 w-[4vw] m-auto  my-2">
                        <button type="button" class=" flex items-center sm:m-auto rounded-full line-height-[3.75rem]"
                            id="lenguaje-menu-button" aria-expanded="false" data-dropdown-toggle="lenguaje-dropdown"
                            data-dropdown-placement="bottom">
                            <img v-if="!flagSelected" src="../../assets/english.svg" alt="">
                            <img v-else src="../../assets/hebrew.svg" alt="">

                        </button>
                        <!-- Dropdown menu -->
                        <div class="z-50 hidden my-4 text-base w-max list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="lenguaje-dropdown">

                            <ul class="py-2" aria-labelledby="lenguaje-menu-button">
                                <li>
                                    <a @click="toggleDirection(false)"
                                        class="flex cursor-pointer gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        <img src="../../assets/english.svg" alt="" width="20px">
                                        {{ $t('english') }}</a>
                                </li>
                                <li>
                                    <a @click="toggleDirection(true)"
                                        class=" px-4 gap-2 flex cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        <img src="../../assets/hebrew.svg" alt="" width="20px">
                                        {{ $t('hebrew') }}</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="relative order-1 max-sm:w-[10vw] w-[4vw] m-auto  my-2">
                        <button @click="toggleDarkModeAction()" type="button"
                            class=" flex items-center dark:bg-white bg-gray-400 p-1 sm:m-auto rounded-full line-height-[3.75rem]"
                            id="dark-mode-button">
                            <svg v-if="currentIsDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                color="#f8e71c" fill="none">
                                <path
                                    d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                                    stroke="currentColor" stroke-width="1.5" />
                                <path
                                    d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714"
                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                color="#fff" fill="none">
                                <path
                                    d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </nav>
        <!-- Page title starts -->

    </header>
</template>

<script>

import RouterLink from 'vue-router'
import { mapActions, useStore } from 'vuex'
import { initFlowbite } from 'flowbite'
import { auth } from '../../FirebaseConfig.ts'
import { signOut } from 'firebase/auth';
import router from '@/router';
import { computed } from 'vue'

export default {
    components: {
        RouterLink
    },
    data() {
        return {
            urlDefaultImage: '../assets/free-avatar-370-456322.webp',
            userAuthenticade: false,
            currentIsDarkMode: false
        };
    },
    mounted() {
        // Escucha los cambios en el estado de autenticación
        auth.onAuthStateChanged((user) => {
            this.userAuthenticade = user !== null;
        });
        initFlowbite();
    },
    methods: {
        dropdownHandler(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
        MenuHandler(el, val) {
            let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
            let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
            let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
            if (val) {
                MainList.classList.remove("hidden");
                el.currentTarget.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            } else {
                showIcon.classList.remove("hidden");
                MainList.classList.add("hidden");
                el.currentTarget.classList.add("hidden");
            }
        },
        ...mapActions(['toggleRTL', 'toggleDarkMode']),
        toggleDarkModeAction() {
            const currentIsDarkMode = this.$store.getters.isDarkMode;
            this.toggleDarkMode(!currentIsDarkMode);
            this.currentIsDarkMode = !currentIsDarkMode;
        },
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
    setup() {
        const store = useStore();

        const user = computed(() => store.getters.currentUser);
        const mysignOut = async () => {
            try {
                await signOut(auth);
                router.replace('/');
            } catch (error) {
                console.log(error.message);
            }
        };
        return {
            mysignOut,
            user
        }
    }
};
</script>
