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
                    Update Image
                </fwb-button>


            </div>
        </div>
        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="imgSrc" alt="Bonnie image" />
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
                    Upload Image
                </div>
            </template>
            <template #body>
                <form @submit.prevent="uploadImage">
                    <input type="file" @change="handleFileChange" accept="image/*" class="mb-4" />
                    <div v-if="selectedFile">
                        <img :src="getImageUrl(selectedFile)" alt="Selected Image" class="mb-4 max-w-full h-auto" />
                    </div>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Select an image file to upload.
                    </p>
                </form>
            </template>
            <template #footer>
                <div class="flex justify-between">
                    <fwb-button @click="closeModal" color="alternative">
                        Cancel
                    </fwb-button>
                    <fwb-button @click="uploadImage" color="green" :disabled="!selectedFile">
                        Upload
                    </fwb-button>
                </div>
            </template>
        </fwb-modal>


    </div>
</template>

<script>
import { onMounted, ref, watch, computed } from 'vue';
import { useStorage } from 'vuefire';  // Importa useStorage y useStorageRef de vuefire
import { FwbButton, FwbModal } from 'flowbite-vue';
import { auth, db } from '@/FirebaseConfig';
import { obtenerDatosUsuario, updateUserData } from '@/services/firestoreServices';
import { useFirebaseStorage } from 'vuefire';
import { getDownloadURL, ref as storageRef, uploadBytesResumable, deleteObject } from '@firebase/storage'
import { useStorageFileUrl } from 'vuefire';
import { useFileDialog } from '@vueuse/core'
import { collection, updateDoc, getDoc, doc } from "firebase/firestore";
import { useStore } from 'vuex'


export default {
    components: {
        FwbButton, FwbModal
    },
   

    

    setup() {
        const nombreUsuarioLogeado = ref('');
        const emailUsuarioLogeado = ref('');
        const imgSrc = ref('');
        const selectedFile = ref(null);
    const isShowModal = ref(false);

         // Servicios de Firebase
    const storage = useFirebaseStorage();
    const defaultImageUrl = storageRef(storage, '/free-avatar-370-456322.webp');
    const { url } = useStorageFileUrl(defaultImageUrl);

    // Obtener store de Vuex
    const store = useStore();

        //obtener imagen del formulario
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      selectedFile.value = file;
      console.log('File selected:', selectedFile.value);
    };

    const getImageUrl = (file) => URL.createObjectURL(file);


    const uploadImage = async () => {
      if (selectedFile.value) {
        try {
          const storageDirectory = 'users-avatar';
          const storagePath = `${storageDirectory}/${selectedFile.value.name}`;
          const fileRef = storageRef(storage, storagePath);

          const currentUserData = store.getters.currentUser;
      const currentImageUrl = currentUserData.imgSrc;

      // Si hay una URL actual, elimina la imagen antigua de Firebase Storage
      if (currentImageUrl) {
        const currentImageRef = storageRef(storage, currentImageUrl);
        await deleteObject(currentImageRef);
        console.log('Imagen antigua eliminada de Firebase Storage');
      }


          const uploadTask = uploadBytesResumable(fileRef, selectedFile.value);

          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Progreso de carga: ${progress}%`);
            },
            (error) => {
              console.error('Error durante la carga:', error);
            },
            async () => {
              const imageUrl = await getDownloadURL(fileRef);
              imgSrc.value = imageUrl;

              const userData = store.getters.currentUser;
              await updateUserImageInFirestore(userData.userDocId, imageUrl);

              isShowModal.value = false;
            }
          );
        } catch (error) {
          console.error('Error al cargar la imagen:', error);
        }
      } else {
        console.warn('No se ha seleccionado ningún archivo.');
      }
    };

    const updateUserImageInFirestore = async (userDocId, imageUrl) => {
      try {
        const usersCollection = collection(db, 'usuarios');
        const userDocRef = doc(usersCollection, userDocId);
        await updateDoc(userDocRef, { imgSrc: imageUrl });
        console.log('URL de imagen actualizada en Firestore:', imageUrl);
      } catch (error) {
        console.error('Error al actualizar la URL de imagen en Firestore:', error);
      }
    };





        //cargar datos guardados del usuario


        const fetchData = async () => {
            const { nombreUsuarioLogeado: nombre, emailUsuarioLogeado: email, imgSrc: imageSrc } = await obtenerDatosUsuario();
            nombreUsuarioLogeado.value = nombre;
            emailUsuarioLogeado.value = email;
            // Obtener la URL de la imagen almacenada en Firestore Storage
            if (imageSrc) {

                imgSrc.value = imageSrc;
                console.log("se usa la imagen del usuario")
            } else {
                // Si no hay imagen, mostrar la imagen predeterminada almacenada en Storage

                imgSrc.value = await getDownloadURL(defaultImageUrl);
                console.log("se usa la imagen por default: ", imgSrc.value);
            }


        };







        //mostrar modal
        

        function closeModal() {
            isShowModal.value = false;
        }

        function showModal() {
            isShowModal.value = true;
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
      imgSrc,
      selectedFile,
      isShowModal,
      handleFileChange,
      getImageUrl,
      uploadImage,
      closeModal,
      showModal,


        };
    }
}
</script>