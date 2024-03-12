<template>
    <div>
        <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-5 text-start">Title</fwb-heading>
        <form @input="emitFormData">
            <fwb-input v-model="title" class="w-full text-start mb-2 "
                placeholder="enter your first name" required />
            <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-5 text-start">Description</fwb-heading>
            <fwb-textarea v-model="description" :rows="4" label="" placeholder="Write your message..." />

        </form>
    </div>
</template>


<script>
import { FwbInput, FwbTextarea, FwbButton, FwbHeading } from 'flowbite-vue'
import {ref} from 'vue'

export default {
    components: {
        FwbHeading,
        FwbInput,
        FwbTextarea
    },
    props: ['formData'],
  setup(props, { emit }) {
    const title = ref('');
    const description = ref('');

    const emitFormData = () => {
        emit('update-form-data', { title: title.value, description: description.value });
    };

    return {
      title,
      description,
      emitFormData,
    };
  },
}


</script>