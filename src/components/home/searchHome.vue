<template>
    <div class="relative flex isolate px-6 pt-14 pb-48 lg:px-8  bg-gradient-to-t from-cyan-800 to-sky-600 ">

        <div class="mx-auto w-full py-12 sm:py-48 lg:py-16">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <div
                    class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-700 ring-1 ring-gray-900/10 font-bold hover:ring-gray-900/20">
                    {{ $t('searchHomeDescription') }}
                </div>
            </div>
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">{{ $t('searchHomeTitle') }}
                </h1>

                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <label
                        class="mx-auto relative bg-white min-w-sm max-w-3xl w-full flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                        for="search-bar">
                        <input id="search-bar" v-model="searchQuery" @input="searchCourses"
                            :placeholder="$t('searchHomePlaceholder')"
                            class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white">

                        <!-- Lista de resultados de la búsqueda -->
                        <ul v-if="searchResults.length > 0" class="absolute bg-white w-full mt-1 rounded-md shadow-lg">
                            <li v-for="course in searchResults" :key="course.id" @click="selectCourse(course)"
                                class="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                {{ course.title }}
                            </li>
                        </ul>
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
                                        {{ $t('search') }}
                                    </span>
                                </div>

                            </div>

                        </button>
                    </label>
                </div>
            </div>
            <div class="w-full">
                <ul class="flex items-start flex-wrap md:w-[60vw] m-auto mt-10 justify-evenly ">
                    <li v-for="category in categories" :key="category.categoryDocId" class="flex mx-1">
                        <a class="p-2 px-3 border-gray-400 mb-4 rounded font-xl hover:bg-transparent w-fit hover:border-cyan-600 border bg-cyN -400/25 text-gray-200"
                            href="category/all">
                            {{ category.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import { allCategories, allCurses } from '../../services/firestoreServices.js';
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const categories = ref("");
        const searchQuery = ref('');
        const courses = ref([]);
        const searchResults = ref([]);

        onMounted(async () => {
            categories.value = await allCategories();
            courses.value = await allCurses(100);
        });

        // Función para buscar coincidencias de cursos
        const searchCourses = () => {
            searchResults.value = courses.value.filter(course => {
                return course.title.toLowerCase().includes(searchQuery.value.toLowerCase());
            });
        };

        // Función para seleccionar un curso de la lista
        const selectCourse = (course) => {
            // Haz algo con el curso seleccionado, como redirigir a su página de detalles
            console.log('Selected course:', course);
        };

        return {
            searchQuery,
            searchResults,
            searchCourses,
            selectCourse,
            categories
        };
    }
}
</script>
