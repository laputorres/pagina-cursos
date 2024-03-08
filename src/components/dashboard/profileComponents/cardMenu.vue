<template>
    <div>
        <div class="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown"
                class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 16 3">
                    <path
                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdown"
                class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2" aria-labelledby="dropdownButton">
                    <li>
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                            Data</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Bonnie image" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ nombreUsuarioLogeado }}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ emailUsuarioLogeado }}</span>
            <div class="flex flex-col mt-4 md:mt-6">
                <fwb-button class="text-gray-500 border-none text-20" size="xl" outline pill square>
                    <a href="http://">Open something</a>
                    <template #prefix>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                fill-rule="evenodd" />
                        </svg>
                    </template>
                </fwb-button>
                <fwb-button class="text-gray-500  border-none" size="xl" outline pill square>
                    <a href="http://">Open something</a>
                    <template #prefix>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                fill-rule="evenodd" />
                        </svg>
                    </template>
                </fwb-button>
                <fwb-button class="text-gray-500 border-none" size="xl" outline pill square>
                    <a href="http://">Open something</a>
                    <template #prefix>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                fill-rule="evenodd" />
                        </svg>
                    </template>
                </fwb-button>
                <fwb-button class="text-gray-500 border-none" size="xl" outline pill square>
                    <a href="http://">Open something</a>
                    <template #prefix>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                fill-rule="evenodd" />
                        </svg>
                    </template>
                </fwb-button>
            </div>
        </div>
    </div>
</template>

<script>
import { FwbButton } from 'flowbite-vue'
import { onMounted, ref } from 'vue';
import { obtenerDatosUsuario } from '@/services/firestoreServices'

export default {
    components: {
        FwbButton
    },
    
    setup() {
        const nombreUsuarioLogeado = ref('');
        const emailUsuarioLogeado = ref('');

        // Llama a obtenerDatosUsuario y espera a que se resuelva
        const fetchData = async () => {
            const { nombreUsuarioLogeado: nombre, emailUsuarioLogeado: email } = await obtenerDatosUsuario();
            nombreUsuarioLogeado.value = nombre;
            emailUsuarioLogeado.value = email;


        };


        onMounted(() => {
            fetchData();

        });

        return {
            nombreUsuarioLogeado,
            emailUsuarioLogeado
        };
    }
}

</script>