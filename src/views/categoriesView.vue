<template>
    <div class="bg-gray-200 dark:bg-gray-700">
        <navbarIndex />
        <div class="bg-custom1 pt-40 max-sm:pt-20 pb-16 overflow-hidden relative z-10">
            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-custom1-dark border-4 rounded-full border-opacity-80 border-t-8">
            </div>
            <div class="absolute -bottom-40 -left-20 w-80 h-80 border-custom1-dark border-4 rounded-full border-opacity-80 border-t-8">
            </div>
            <div class="absolute -top-20 -right-20 w-80 h-80 border-4 border-custom1-dark rounded-full border-opacity-80 border-t-8"></div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 border-custom1-dark rounded-full border-opacity-80 border-t-8"></div>
            <div class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div class="z-10 flex-col flex lg:flex-row items-start lg:items-center">

                    <div class="ml-0 lg:ml-20 my-6 max-sm:mb-12 lg:my-0">
                        <h4 class="text-7xl font-bold leading-tight text-white mb-2">All Courses</h4>
                        <p class="flex items-center text-gray-300 text-4xl font-italic">
                            {{ selectedCategory}}
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap z-10 gap-2">
                    <button @click="selectedCategory = 'all'"
                        class="focus:outline-none bg-transparent transition duration-150 ease-in-out rounded hover:bg-custom1-dark text-gray-200 px-5 py-2 text-md border border-gray-400">All</button>
                    <div v-for="category in categories" :key="category.categoryDocId">
                        <button @click="selectedCategory = category.name"
                        :class="['focus:outline-none', 'bg-transparent', 'transition', 'duration-150', 'ease-in-out', 'rounded', 'hover:bg-custom1-dark', 'text-gray-200', 'px-5', 'py-2', 'text-md', 'border', 'border-gray-400', { 'focus:bg-custom1-dark': selectedCategory === category.name  }]">
                        {{
                        category.name }}</button>

                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-12 flex-wrap justify-around m-auto max-sm:pt-10 pt-14">
            <div class="md:w-1/4 max-sm:mx-2 dark:bg-gray-800 rounded-xl bg-white" v-for="curse in filteredCurses" :key="curse.curseDocId">
                <courseCard :courseTitle="curse.title" :courseCategory="curse.curseCategory"
                    :lecturesCount="curse.lectures.length" />
            </div>

        </div>

        <!--Pagination-->

        <div class="max-w-8xl mx-auto container py-10">
            <ul class="flex justify-center items-center">
                <li>
                    <span
                        class="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </span>
                </li>
                <li>
                    <span
                        class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">1</span>
                </li>
                <li>
                    <span
                        class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">2</span>
                </li>
                <li>
                    <span
                        class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 focus:outline-none">...</span>
                </li>
                <li>
                    <span
                        class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">6</span>
                </li>
                <li>
                    <span
                        class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">7</span>
                </li>
                <li>
                    <span
                        class="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </span>
                </li>
            </ul>
        </div>
        <footer>
            <footerView/>
        </footer>
    </div>
</template>

<script>
import navbarIndex from '@/components/navbars/navbarIndex.vue';
import courseCard from '@/components/courses/coursesCard.vue';
import { allCurses, allCategories } from '@/services/firestoreServices'
import { onMounted, ref, watch } from 'vue'
import footerView from '@/views/footerView.vue'

export default {
    components: {
        navbarIndex,
        courseCard,
        footerView
    },

    setup() {

        const curses = ref([]);
        const categories = ref([]);
        const selectedCategory = ref('all');

        onMounted(async () => {
            try {
                // Llama a la función para obtener los datos de todos los cursos
                curses.value = await allCurses(100);
                categories.value = await allCategories();
                console.log("Cursos montados: ", curses.value);
                filterCursesByCategory();
            } catch (error) {
                console.error('Error al obtener los datos de todos los cursos', error);
            }
        })

        const filteredCurses = ref([]);

        const filterCursesByCategory = () => {
            if (selectedCategory.value === 'all') { // Si se selecciona 'all', muestra todos los cursos
            filteredCurses.value = curses.value;
        } else {
            filteredCurses.value = curses.value.filter(curse => curse.curseCategory === selectedCategory.value);
        }
    };

    watch(selectedCategory, () => {
        filterCursesByCategory();
    });

    // Llama a la función para filtrar los cursos cuando se monta el componente
   

        return { curses, categories, selectedCategory, filteredCurses, filterCursesByCategory };
    }
}
</script>