<template>
    <div id="basic-info">
        <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-10 text-start">Basic Info</fwb-heading>
        <form @submit.prevent="updateCurrentUser" class="w-full flex flex-wrap gap-2 justify-around">

            <fwb-input v-model="name" class="w-full text-start mb-2 sm:w-1/2 md:w-1/3 lg:w-40 xl:w-60 "
                label="First name" placeholder="enter your first name" required />

            <fwb-input v-model="userLastname" label="Last name"
                class="w-full text-start mb-2 sm:w-1/2 md:w-1/3 lg:w-40 xl:w-60" placeholder="enter your last name"
                required />

            <fwb-input v-model="userEmail" label="email"
                class="w-full text-start mb-2 sm:w-1/2 md:w-1/3 lg:w-40 xl:w-60" placeholder="enter your email"
                required />
            <fwb-input v-model="userPhone" label="Phone Number"
                class="w-full text-start mb-2 sm:w-1/2 md:w-1/3 lg:w-40 xl:w-60" placeholder="enter your email"
                required />

            <fwb-select v-model="selectedCountry" :options="countries"
                class="w-full text-start mb-2 sm:w-1/2 md:w-1/3 lg:w-40 xl:w-60" label="Select a Lenguage" />

            <fwb-select v-model="selectedGender" :options="genero"
                class="w-full sm:w-1/2 text-start mb-2 md:w-1/3 lg:w-40 xl:w-60" label="I´m" />

            <fwb-button class="w-full mt-10 bg-blue-400 sm:w-1/2 md:w-1/3 lg:w-40 xl:[100%] self-center"
                type="submit">Submit</fwb-button>
        </form>
        <fwb-alert v-if="showAlert"
            class="fixed bottom-[3%] right-[3%] w-[30vw] h-[20vh] p-4 text-lg text-white rounded-lg bg-blue-500" closable icon
            type="success">
            Data saved successfully.
        </fwb-alert>
    </div>
</template>

<script>
import { ref } from 'vue'
import { FwbInput, FwbSelect, FwbButton, FwbHeading, FwbAlert } from 'flowbite-vue'
import { onMounted, onBeforeMount, watch, computed } from 'vue'
import { obtenerDatosUsuario } from '@/services/firestoreServices'
import { db } from '../../../FirebaseConfig.ts'
import { useStore } from 'vuex'
import { collection, updateDoc, getDoc, doc } from "firebase/firestore";

export default {
    components: {
        FwbInput,
        FwbButton,
        FwbSelect,
        FwbHeading,
        FwbAlert
    },
    setup() {
        const name = ref('');
        const userLastname = ref('');
        const userEmail = ref('');
        const userPhone = ref('');
        const selectedCountry = ref('');
        const selectedGender = ref('');
        const usersCollection = collection(db, "usuarios");
        const showAlert = ref(false);



        let uidUsuarioLogeado = ref('');
        const countries = [
            { value: 'us', name: 'United States' },
            { value: 'fr', name: 'France' },
        ];

        const genero = [
            { value: 'male', name: 'male' },
            { value: 'female', name: 'female' },
        ];


        const store = useStore();

        const userData = computed(() => store.getters.currentUser);

        console.log("userData value: ", userData)



        const data = userData;

        uidUsuarioLogeado.value = userData.value.userDocId || '';
        name.value = userData.value.nombreUsuarioLogeado || '';
        userLastname.value = userData.value.lastnameUsuarioLogeado || '';
        userEmail.value = userData.value.emailUsuarioLogeado || '';
        userPhone.value = userData.value.phoneUsuarioLogeado || '';
        selectedCountry.value = userData.value.countryUsuarioLogeado || '';
        selectedGender.value = userData.value.genderUsuarioLogeado || '';




        // Llamada a la función de inicialización al inicio



        onBeforeMount(() => {
            console.log("user data:", userData.value);
        });


        const updateCurrentUser = async () => {
            try {
                const data = {
                    name: name.value,
                    lastname: userLastname.value || '',
                    email: userEmail.value || '',
                    phone: userPhone.value || '',
                    country: selectedCountry.value || '',
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    gender: selectedGender.value || '',
                }
                const userDocRef = doc(usersCollection, uidUsuarioLogeado.value); // Obtén la referencia al documento con el ID específico
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    // Actualiza el documento con los nuevos datos
                    await updateDoc(userDocRef, data);
                    showAlert.value = true;
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    console.error('No se encontró el documento del usuario');
                }
            } catch (error) {
                console.error('Error al actualizar el usuario:', error.message);
            }
        };


        watch(userData, (newUserData) => {
            if (newUserData) {
                uidUsuarioLogeado.value = newUserData.userDocId;
                name.value = newUserData.nombreUsuarioLogeado;
                userLastname.value = newUserData.lastnameUsuarioLogeado;
                userEmail.value = newUserData.emailUsuarioLogeado;
                userPhone.value = newUserData.phoneUsuarioLogeado;
                selectedCountry.value = newUserData.countryUsuarioLogeado;
                selectedGender.value = newUserData.genderUsuarioLogeado;
            }
        });


        watch(showAlert, (newValue) => {
            if (newValue) {
                setTimeout(() => {
                    showAlert.value = false;
                }, 5000);
            }
        });

        return {
            name,
            userLastname,
            userEmail,
            userPhone,
            selectedCountry,
            selectedGender,
            countries,
            genero,
            updateCurrentUser,
            showAlert,

        };

    }
}
</script>