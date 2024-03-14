<template>
    <section class="antialiased bg-gray-100 text-gray-600 flex flex-col justify-between flex-wrap w-full px-4">
        
        <fwb-heading tag="h2" color="text-blue-400" class="w-full mb-5 text-start">Users</fwb-heading>

        <div class="w-auto mx-auto bg-white shadow-lg rounded-xl border border-gray-200">
            <div class="">
                <div class="">
                    <div class="text-[80px] text-blue-500"> {{ usuarios.length }}</div>
                    <!-- Puedes agregar más elementos según sea necesario -->
                </div>

            </div>
            <header class="px-1 py-1 border-b border-gray-100">
            <p>Total Users:</p>
            </header>
        </div>
            <!-- Table -->
            <div class="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header class="px-5 py-4 border-b border-gray-100">
                    <h2 class="font-semibold text-gray-800">Customers</h2>
                </header>
                <div class="p-3">
                    <div class="overflow-x-auto">
                        <table class="table-auto w-full">
                            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th class="p-2 whitespace-nowrap">
                                        <div class="font-semibold text-left">Name</div>
                                    </th>
                                    <th class="p-2 whitespace-nowrap">
                                        <div class="font-semibold text-left">Email</div>
                                    </th>
                                    <th class="p-2 whitespace-nowrap">
                                        <div class="font-semibold text-left">Status</div>
                                    </th>
                                    <th class="p-2 whitespace-nowrap">
                                        <div class="font-semibold text-left">Gender</div>
                                    </th>
                                    <th class="p-2 whitespace-nowrap">
                                        <div class="font-semibold text-center">Country</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-gray-100">
                                <tr v-for="usuario in usuarios" :key="usuario.userDocId">
                                    <td class="p-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                <img class="rounded-full" :src="usuario.imgSrc" width="40" height="40"
                                                    :alt="usuario.nombre">
                                            </div>
                                            <div class="font-medium text-gray-800">{{ usuario.nombre }}</div>
                                        </div>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        <div class="text-left">{{ usuario.email }}</div>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        <div class="text-left font-medium text-green-500">{{ usuario.status }}</div>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        <div class="text-left font-medium">{{ usuario.gender }}</div>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        <div class="text-lg text-center">{{ usuario.country }}</div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
    </section>
</template>


<script>
import { ref, onMounted } from 'vue';
import { obtenerDatosTodosUsuarios } from '../../../services/firestoreServices.js';
import { FwbHeading } from 'flowbite-vue'

export default {
    components: {
        FwbHeading
    },
    setup() {
        const usuarios = ref([]);

        onMounted(async () => {
            // Llamar a la función para obtener los datos de todos los usuarios
            usuarios.value = await obtenerDatosTodosUsuarios();
        });

        return {
            usuarios,
        };
    },
};
</script>