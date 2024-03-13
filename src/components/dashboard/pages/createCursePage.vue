<template>
    <div>
        <fwb-heading tag="h3" color="text-blue-400" class="w-full mb-10 text-start">Create Curse</fwb-heading>

        <div class="w-full flex max-sm:flex-col lg:flex-row justify-between">
            <div class="w-[25%]">
                <stepper />
            </div>
            <div class="w-[65%]">
                <div
                    class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                    <titleDescription @update-form-data="updateFormData" />
                </div>
                <div
                    class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                    <mediaVideos @update-form-data="updateFormData" />
                </div>

                <div
                    class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                    <priceComponent @update-form-data="updateFormData" />
                </div>
                <div
                    class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                    <fwb-button @click="registerCurse" gradient="blue">Create Curse</fwb-button>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
import { FwbHeading, FwbButton } from 'flowbite-vue'
import stepper from '../createCurses/menuStepper.vue'
import titleDescription from '../createCurses/titleDescription.vue'
import mediaVideos from '../createCurses/mediaVideos'
import priceComponent from '../createCurses/priceComponent.vue'
import { ref } from 'vue';
import { collection, addDoc, documentId } from 'firebase/firestore'
import { useFirestore } from 'vuefire';
import {  auth } from '@/FirebaseConfig'

export default {
    components: {
        FwbHeading,
        FwbButton,
        stepper,
        titleDescription,
        mediaVideos,
        priceComponent

    },
    setup() {
        const formData = ref({});
        const db = useFirestore();
        const cursesCollection = collection(db, 'curses');


        const updateFormData = (data) => {
            formData.value = { ...formData.value, ...data };
            console.log('Datos del formulario acumulados:', formData.value);
            // Puedes almacenar estos datos en algún lugar o enviarlos a Firebase desde aquí
            // No necesitas mostrarlos en pantalla, ya que tu objetivo es enviarlos todos juntos a Firebase
            console.log('Clases:', formData.value.clases);
        };

        //Crear document in curses collection

        const registerCurse = async () => {
            try {

                const user = auth.currentUser;

                if (!user) {
                    console.error('Usuario no autenticado.');
                    return;
                }

             

                const curseDocRef = await addDoc(cursesCollection, {
            title: formData.value.title,
            description: formData.value.description,
            membership: formData.value.membership || true,
            paidPrice: formData.value.paidPrice || "",
        });

        // Obtener el ID del documento principal
        const curseDocId = curseDocRef.id;

        // Crear documentos en la subcarpeta 'lectures'
        if (Array.isArray(formData.value.clases)) {
    await Promise.all(formData.value.clases.map(async (clase, index) => {
        const docTitle = `lecture${index + 1}`;

        // Crear documentos en la subcarpeta 'lectures' con el ID igual al lectureTitle
        await addDoc(collection(db, `curses/${curseDocId}/lectures`), {
            lectureTitle: clase.lecture,
            lectureDescription: clase.lectureDescription,
            // Agregar otros campos si es necesario
        });
    }));
} else {
    console.error('formData.value.clases no es un array.');
}

        console.log('Documento principal y subdocumentos creados con éxito.');

            } catch (error) {

                console.log(error.message); // Mostrar otros errores en la consola para depuración

            }
        };

        return {
            formData,
            updateFormData,
            registerCurse
        };
    },
}

</script>