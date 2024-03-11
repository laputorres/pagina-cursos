<template>
    <div id="delete-account">
        <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-10 text-start">Delete Account</fwb-heading>
        <p class="text-start text-lg">Once you delete your account, there is no going back. Please be certain.</p>
        <div class="delete-confirm flex justify-between mt-7">
            <fwb-toggle v-model="toggle" label="I want to delete my account." />
            <fwb-button class="w-full sm:w-1/2 md:w-1/3 lg:w-40 xl:[100%] bg-red-600 self-center" @click="showModal">
                Delete
            </fwb-button>
        </div>

        <div class="delete-modal">
            <fwb-modal @close="closeModal" v-if="isShowModal" class="fixed z-[2]">
                <template #header>
                    <div class="flex items-center text-lg">
                        Delete Account?
                    </div>
                </template>
                <template #body>
                    <form @submit.prevent="deleteAccount">
                        <fwb-input v-model="userPassword" type="password" placeholder="enter password" required />
                        <p class="text-base leading-relaxed text-red-500 dark:text-gray-400">
                            Once you delete your account, there is no going back. Please be certain.
                        </p>
                    </form>
                </template>
                <template #footer>
                    <div class="flex justify-between">
                        <fwb-button @click="closeModal" color="alternative">
                            Cancel
                        </fwb-button>
                        <fwb-button @click="deleteAccount" color="red" :disabled="userPassword === ''">
                            Delete
                        </fwb-button>
                    </div>
                </template>
            </fwb-modal>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { auth, getUser, db } from '@/FirebaseConfig';
import { FwbButton, FwbToggle, FwbHeading, FwbModal, FwbInput } from 'flowbite-vue';
import { useFirestore } from 'vuefire';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { deleteUser, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import router from '@/router';
import { useStore } from 'vuex';

export default {
    components: {
        FwbHeading,
        FwbToggle,
        FwbButton,
        FwbInput,
        FwbModal,
    },
    setup() {
        const store = useStore();
        const toggle = ref(false);
        const usersCollection = collection(db, 'usuarios');
        const isShowModal = ref(false);
        const userPassword = ref('');

        const deleteAccount = async () => {
            try {
                const user = getUser();

                // Reautenticar al usuario
                const credential = EmailAuthProvider.credential(user.email, userPassword.value);
                await reauthenticateWithCredential(user, credential);

                // Eliminar el documento en la colección 'usuarios'

                const userData = store.getters.currentUser;
                console.log('Tipo de userPassword:', userData.userDocId);

                const userDocRef = doc(db, 'usuarios', userData.userDocId);
                await deleteDoc(userDocRef);
                console.log('Documento eliminado con éxito');

                // Eliminar la cuenta del usuario
                await deleteUser(user);
                console.log('Usuario eliminado con éxito');

                // Redirigir a la página de inicio u otra página apropiada
                 router.push('/');

                // O mostrar una alerta de éxito o realizar otras acciones necesarias
            } catch (error) {
                console.error('Error al eliminar la cuenta:', error.message);
            }
        };

        const closeModal = () => {
            isShowModal.value = false;
        };

        const showModal = () => {
            isShowModal.value = true;
        };

        watch(isShowModal, (newValue, oldValue) => {
            console.log(`isShowModal changed from ${oldValue} to ${newValue}`);
        });

        watch(closeModal, (newValue, oldValue) => {
            console.log(`closeModal changed from ${oldValue} to ${newValue}`);
        });

        return { toggle, userPassword, deleteAccount, isShowModal, showModal, closeModal };
    },
};
</script>