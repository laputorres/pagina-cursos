<template>
    <div class="flex flex-row w-full justify-between flex-wrap">
        <fwb-heading tag="h3" color="text-blue-400" class="w-2/3 mb-10 text-start">Categories</fwb-heading>
        <button @click="showForm = true"
            class="py-2.5 px-6 rounded-lg w-[200px] h-fit text-sm font-medium bg-blue-600 text-white">Add category</button>
        <div class="w-full" v-if="showForm">
            <form @submit.prevent="submitForm" class="w-2/3 m-auto flex flex-col bg-white p-5 rounded-xl">
                <input v-model="categoryDocId" type="hidden" />
                <input v-model="categoryName"
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text" placeholder="Name" />
                <label for="" class="text-gray-500">Subcategories</label>
                <div class="flex items-center" v-for="(subcategory, index) in subcategories" :key="index">
                    <input v-model="subcategories[index]"
                        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text" :placeholder="'Subcategory ' + (index + 1)" />
                    <button @click.prevent="removeSubcategory(index)"
                        class="py-1.5 px-3 m-1 text-center bg-red-500 border rounded-md text-white hover:bg-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                            color="#ffffff" fill="none">
                            <path
                                d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path
                                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" />
                            <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
                <button @click.prevent="addSubcategory"
                    class="py-1.5 px-3 m-auto text-center w-fit w.full bg-green-700 border mt-5 rounded-md text-white hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff"
                        fill="none">
                        <path d="M12 8V16M16 12L8 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                            stroke="currentColor" stroke-width="1.5" />
                    </svg>
                </button>
                <button type="submit"
                    class="py-1.5 px-3 m-1 text-center bg-blue-700 border mt-5 rounded-md text-white hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700">
                    Save changes
                </button>
            </form>

        </div>


        <div class="w-fit rounded-lg mt-10">

            <table class="w-full rounded-md table-fixed">
                <thead>
                    <tr class="bg-gray-200 rounded-md">
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                        <th class="w-1/3 py-4 px-6 text-left text-gray-600 font-bold uppercase">Subcategories</th>
                        <th class="w-[10%] py-4 px-6 text-left text-gray-600 font-bold uppercase">Edit</th>

                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr v-for="category in categories" :key="category.categoryDocId" class="">


                        <td class="py-4 px-6 border-b text-left  text-gray-600 border-gray-200">{{ category.name }}</td>

                        <td class="py-4 px-6 border-b text-left border-gray-200">
                            <span
                                class="bg-yellow-200 text-gray-600 inline-block text-center px-2 py-1 rounded text-md font-semibold"
                                v-if="category.subcategories.length === 0"> No subcategories</span>
                            <ul v-else>
                                <li v-for="subcategory in category.subcategories" :key="subcategory"
                                    class="bg-blue-300 text-blue-900 inline-block text-center px-2 py-1 m-1 rounded text-md font-semibold">
                                    {{ subcategory }}
                                </li>
                            </ul>
                        </td>
                        <td class="py-4 px-6 border-b text-left border-gray-200">
                            <button @click="editCategory(category)"
                                class="font-medium bg-indigo-600 rounded-md p-2 cursor-pointer hover:text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                    color="#ffffff" fill="none">
                                    <path
                                        d="M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M13 4L20 11" stroke="currentColor" stroke-width="1.5"
                                        stroke-linejoin="round" />
                                    <path d="M14 22L22 22" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button @click.prevent="removeSubcategory(index)"
                                class="py-1.5 px-3 m-1 text-center bg-red-500 border rounded-md text-white hover:bg-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                    color="#ffffff" fill="none">
                                    <path
                                        d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path
                                        d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" />
                                    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" />
                                </svg>
                            </button>

                        </td>

                    </tr>
                </tbody>
            </table>

        </div>

    </div>


</template>

<script>
import { FwbHeading } from 'flowbite-vue'
import { allCategories } from '../../../services/firestoreServices.js';
import { ref, onMounted, reactive } from 'vue'
import { collection, addDoc, updateDoc, setDoc, doc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'

export default {
    components: {
        FwbHeading,
    },
    setup() {
        const categoryDocId = ref('');
        const categories = ref('');
        const categoryName = ref('');
        const subcategories = ref([]);
        const db = useFirestore();
        const categoriesCollection = collection(db, 'categories');
        const showForm = ref(false);

        onMounted(async () => {
            // Llamar a la función para obtener los datos de todas las categorías
            categories.value = await allCategories();
        });

        const addSubcategory = () => {
            subcategories.value.push('');
            console.log('Subcategoría agregada:', subcategories);
        };

        const removeSubcategory = (index) => {
            subcategories.value.splice(index, 1);
        };

        const editCategory = (category) => {
            categoryName.value = category.name;
            subcategories.value = category.subcategories;
            categoryDocId.value = category.categoryDocId;
            showForm.value = true;
        };

        const submitForm = async () => {
            // Verificar si hay subcategorías definidas

            // Lógica para enviar el formulario, incluidas las subcategorías


            const data = {
                name: categoryName.value,
                subCategories: subcategories.value,
            };

            try {
                if (categoryDocId.value) {
                    await updateCategory(data);
                } else {
                    await addCategory(data);
                }

                resetForm();

                console.log('Documento creado o actualizado con éxito');
            } catch (error) {
                console.error('Error al crear o actualizar el documento:', error);
            }
        };

        const addCategory = async (data) => {

            await addDoc(categoriesCollection, data);
        };
        const updateCategory = async (data) => {
            // Obtener la referencia al documento específico por su ID
            const categoryDocRef = doc(db, "categories", categoryDocId.value);
            await updateDoc(categoryDocRef, data);
        };

        const resetForm = () => {
            categoryName.value = '';
            subcategories.value = [];
        };

        return {
            categories,
            categoryName,
            subcategories,
            addSubcategory,
            removeSubcategory,
            submitForm,
            editCategory,
            showForm
        };

    },
}
</script>
