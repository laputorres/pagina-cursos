<template>

    <div class="flex justify-around relative">

        <div
            class="w-full sm:w-1/2 md:w-1/3 lg:w-40 xl:w-[50%] card-and-submenu sticky top-[100px] max-h-auto overflow-y-auto h-fit bg-white shadow-xl bg-clip-border dark:bg-gray-800 dark:border-gray-700">
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
                <div class="flex mt-4 md:mt-6">
                    <a href="#"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                        friend</a>
                    <a href="#"
                        class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                </div>
            </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 profile-content overflow-y-auto ml-[5%] lg:w-40 xl:w-[100%]">
            <div
                class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <basicInfo />
            </div>
            <div
                class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <changePassword />
            </div>

        </div>
    </div>


</template>

<script>
import { initFlowbite } from 'flowbite'
import { onMounted, ref } from 'vue';
import { auth } from '@/FirebaseConfig';
import router from '@/router';
import basicInfo from '@/components/dashboard/profileComponents/basicInfoComponent.vue'
import changePassword from '@/components/dashboard/profileComponents/changePassword.vue'
import { obtenerDatosUsuario } from '@/services/firestoreServices'

export default {
    components: {
        basicInfo,
        changePassword
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
            initFlowbite();
            fetchData();

        });

        return {
            nombreUsuarioLogeado,
            emailUsuarioLogeado
        };
    }
}
</script>
