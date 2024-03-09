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
                <fwb-button @click="showModal">
                    Open modal
                </fwb-button>


            </div>
        </div>
        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Bonnie image" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ nombreUsuarioLogeado }}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ emailUsuarioLogeado }}</span>
            <div class="flex flex-col mt-4 md:mt-6">
                <fwb-button class="text-gray-500 border-none text-20" href="#basic-info" size="xl" outline pill square>
                    <p>Basic Info</p>
                    <template #prefix>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                fill-rule="evenodd" />
                        </svg>
                    </template>
                </fwb-button>
                <fwb-button class="text-gray-500  border-none" href="#change-password" size="xl" outline pill square>
                    <p>Change Password</p>
                    <template #prefix>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                fill-rule="evenodd" />
                        </svg>
                    </template>
                </fwb-button>
                <fwb-button class="text-gray-500 border-none" href="#notifications" size="xl" outline pill square>
                    <p>Notifications</p>
                    <template #prefix>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                fill-rule="evenodd" />
                        </svg>
                    </template>
                </fwb-button>
                <fwb-button href="#delete-account" class="text-gray-500 border-none" size="xl" outline pill square>
                    <p>Delete Account</p>
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
        <fwb-modal @close="closeModal" v-if="isShowModal" class="absolute z-100">
            <template #header>
                <div class="flex items-center text-lg">
                    Terms of Service
                </div>
            </template>
            <template #body>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for
                    its citizens, companies around the world are updating their terms of service agreements to
                    comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
                    25 and is meant to ensure a common set of data rights in the European Union. It requires
                    organizations to notify users as soon as possible of high-risk data breaches that could
                    personally affect them.
                </p>
            </template>
            <template #footer>
                <div class="flex justify-between">
                    <fwb-button @click="closeModal" color="alternative">
                        Decline
                    </fwb-button>
                    <fwb-button @click="closeModal" color="green">
                        I accept
                    </fwb-button>
                </div>
            </template>
        </fwb-modal>
    </div>
</template>

<script>

import { onMounted, ref, watch } from 'vue';
import { ref as storageRef } from '@firebase/storage'
import { useFileDialog } from '@vueuse/core'
import { FwbButton, FwbModal } from 'flowbite-vue'
import { storage, auth, db } from '@/FirebaseConfig';
import { useFirebaseStorage, useStorageFile } from 'vuefire';
import { obtenerDatosUsuario, updateUserData } from '@/services/firestoreServices'

export default {
    components: {
        FwbButton, FwbModal
    },

    setup() {
        const nombreUsuarioLogeado = ref('');
        const emailUsuarioLogeado = ref('');
        const imgSrc = ref('');
        const uidUsuarioLogeado = auth.currentUser.uid;
        const nuevaFotoSubida = ref(false);
        const storage = useFirebaseStorage()




        // Llama a obtenerDatosUsuario y espera a que se resuelva
        const fetchData = async () => {
            const { nombreUsuarioLogeado: nombre, emailUsuarioLogeado: email, imgSrc: imageSrc } = await obtenerDatosUsuario();
            nombreUsuarioLogeado.value = nombre;
            emailUsuarioLogeado.value = email;
            imgSrc.value = imageSrc || 'URL_POR_DEFECTO';

        };

        const isShowModal = ref(false)

        function closeModal() {
            isShowModal.value = false
        }
        function showModal() {
            isShowModal.value = true
        }

        watch(isShowModal, (newValue, oldValue) => {
            console.log(`isShowModal changed from ${oldValue} to ${newValue}`);
        });

        watch(closeModal, (newValue, oldValue) => {
            console.log(`closeMdal changed from ${oldValue} to ${newValue}`);
        });


        onMounted(() => {
            fetchData();

        });

        return {
            nombreUsuarioLogeado,
            emailUsuarioLogeado,
            isShowModal,
            closeModal,
            showModal

        };
    }
}

</script>