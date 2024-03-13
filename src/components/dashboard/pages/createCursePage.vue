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
                    <mediaVideos @update-form-data="updateFormData" @store-video="storeVideo" />
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
import { useFirestore, useFirebaseStorage } from 'vuefire';
import { auth } from '@/FirebaseConfig';
import { storage, ref as storageRef, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage';

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
        const videoFiles = ref([]);
        const db = useFirestore();
        const cursesCollection = collection(db, 'curses');
        const storage = getStorage();

        const updateFormData = (data) => {
            formData.value = { ...formData.value, ...data };
            console.log('Datos del formulario acumulados:', formData.value);
            // Puedes almacenar estos datos en algún lugar o enviarlos a Firebase desde aquí
            // No necesitas mostrarlos en pantalla, ya que tu objetivo es enviarlos todos juntos a Firebase
            console.log('Clases:', formData.value.clases);
        };


        const storeVideo = (index, file) => {
    console.log("el archivo que se va a almacenar localmente es", file);

    // Almacena el archivo localmente en el array formData
    if (!formData.value.clases) {
        formData.value.clases = [];
    }
    if (!formData.value.clases[index]) {
        formData.value.clases[index] = {};
    }
    formData.value.clases[index].lectureVideo = file;

    console.log('Archivos locales almacenados en formData:', formData.value.clases);
};

const uploadVideos = async (curseDocId) => {
    try {
        // Subir todos los archivos almacenados localmente en formData
        const videoLinks = await Promise.all(formData.value.clases.map(async (clase, index) => {
            const file = formData.value.clases[index].lectureVideo;
            if (file) {
                console.log(`Subiendo video para clase en el índice ${index}...`);

                // Ruta de almacenamiento para el video
                const storagePath = `curses/${formData.value.title}/lecture${index + 1}`;
                const storageReference = storageRef(storage, storagePath);

                // Subir el video al almacenamiento de Firebase
                const uploadTaskSnapshot = await uploadBytes(storageReference, file);
                console.log("Se subió el archivo con éxito: ", file);

                // Obtener la URL de descarga del video
                const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

                // Retornar la URL de descarga del video
                return downloadURL;
            }
            return null;
        }));

        // Añadir las URL de descarga de los videos al formulario
        formData.value.clases.forEach((clase, index) => {
            clase.lectureVideo = videoLinks[index];
        });

        console.log('Videos subidos con éxito.');

        // Limpiar los archivos locales almacenados en formData
       

    } catch (error) {
        console.error('Error al subir videos:', error);
        throw error;
    }
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
                console.log(`Curse document created with ID: ${curseDocId}`);
                

                await uploadVideos(curseDocId);

                // Crear documentos en la subcarpeta 'lectures'
                if (Array.isArray(formData.value.clases)) {
                    await Promise.all(formData.value.clases.map(async (clase, index) => {

                        console.log(`Creating lecture document for clase at index ${index}...`);

                        // Crear documentos en la subcarpeta 'lectures' con el ID igual al lectureTitle
                        await addDoc(collection(db, `curses/${curseDocId}/lectures`), {
                            lectureTitle: clase.lectureTitle,
                            lectureDescription: clase.lectureDescription,
                            lectureVideo: clase.lectureVideo
                            // Agregar otros campos si es necesario
                        });
                        console.log(`Lecture document created successfully for clase at index ${index}`);
                    }));
                } else {
                    console.error('formData.value.clases no es un array.');
                }

                console.log('Documento principal y subdocumentos creados con éxito.');

            } catch (error) {

                console.log("Error al registrar curso; ", error); // Mostrar otros errores en la consola para depuración

            }
        };

        return {
            formData,
            updateFormData,
            registerCurse,
            videoFiles,
            storeVideo
        };
    },
}

</script>