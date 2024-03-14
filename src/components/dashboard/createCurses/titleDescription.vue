<template>
    <div>
        <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-5 text-start">Title</fwb-heading>
        <form @input="emitFormData">
            <fwb-input v-model="title" class="w-full text-start mb-2 " placeholder="enter your first name" required />
            <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-5 text-start">Description</fwb-heading>
            <fwb-textarea v-model="description" :rows="4" label="" placeholder="Write your message..." />
            <select v-model="category" @change="emitFormData">
                <option value="">Select a category</option>
                <option v-for="(categoryItem, index) in categories" :key="index" :value="categoryItem.name">{{ categoryItem.name }}</option>    
            </select>

        </form>
    </div>
</template>


<script>
import { FwbInput, FwbTextarea, FwbButton, FwbHeading, FwbSelect } from 'flowbite-vue'
import { ref, onMounted } from 'vue'
import { allCategories } from '@/services/firestoreServices'

export default {
    components: {
        FwbHeading,
        FwbInput,
        FwbTextarea,
        
    },
    props: ['formData'],
    setup(props, { emit }) {
        const title = ref('');
        const description = ref('');
        const category = ref('');

        const categories = ref([]);

        onMounted(async () => {
            // Llamar a la función para obtener los datos de todos los usuarios
            categories.value = await allCategories();
        });

        const emitFormData = () => {
            emit('update-form-data', { title: title.value, description: description.value, category: category.value });
        };

        return {
            title,
            description,
            emitFormData,
            categories,
            category
        };
    },
}


</script>