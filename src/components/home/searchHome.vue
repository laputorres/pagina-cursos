<template>
    <div class="relative flex isolate px-6 pt-14 lg:px-8 h-[100vh] bg-gradient-to-t from-cyan-800 to-sky-600 ">

        <div class="mx-auto w-full py-12 sm:py-48 lg:py-16">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <div
                    class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
                            class="absolute inset-0" aria-hidden="true"></span>Read more <span
                            aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">What do you learn?
                </h1>

                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <label
                        class="mx-auto relative bg-white min-w-sm max-w-3xl w-full flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                        for="search-bar">
                        <input id="search-bar" placeholder="tegnology, art, design, etc."
                            class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white">
                        <button
                            class="w-full md:w-auto px-6 py-3 bg-gray-400  text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">

                            <div class="relative">

                                <div
                                    class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                    <svg class="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </div>

                                <div class="flex items-center transition-all opacity-1 valid:"><span
                                        class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        Search
                                    </span>
                                </div>

                            </div>

                        </button>
                    </label>
                </div>
            </div>
            <div class="w-full">
                <h2 class="font-os text-lg font-bold">Categories</h2>
                <ul  class="flex items-start flex-wrap justify-evenly mt-4">
                    <li v-for="category in categories" :key="category.categoryDocId" class="flex mx-1">
                        <a class="p-2 px-3 border-white mb-4 rounded font-xl hover:bg-transparent w-[200px] hover:border-cyan-400 border bg-cyN -400/25 text-white"
                            href="category/all">
                            {{category.name}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import { allCategories } from '../../services/firestoreServices.js';

import {ref, onMounted} from 'vue'
export default {
    setup(){

        const categories = ref("");

        onMounted(async() => {
            categories.value = await allCategories();
            console.log("categorias encontradas: ", categories.value)
        });
        
        return{
            categories
        }
    
    }


}

</script>