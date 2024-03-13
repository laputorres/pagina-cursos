<template>
  <div>
    <h4 class="w-full mb-5 text-start">Content</h4>
    <form @input="emitFormData">
      <div v-for="(clase, index) in clases" :key="index">
        <h6 class="w-full mb-5 text-start">Lecture Title</h6>
        <input v-model="clase.lectureTitle" class="w-full text-start mb-2" placeholder="Enter your last name"
          required />

        <h6 class="w-full mb-5 text-start">Upload Video</h6>
        <input :id="'videoInput_' + index" @change="lectureVideo(index)" type="file" />
        <label :for="'videoInput_' + index">Seleccionar video</label>

        <h6 class="w-full my-5 text-start">Description</h6>
        <textarea v-model="clase.lectureDescription" rows="4" placeholder="Write your message..."></textarea>
      </div>
    </form>
    <button class="w-full mt-10 bg-blue-400 sm:w-1/2 md:w-1/3 lg:w-40 xl:[100%] self-center" type="submit"
      @click="addClase">
      Add Clase
    </button>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: ['formData'],
  setup(props, { emit }) {
    const clases = ref([
      { header: "lecture 1", lectureTitle: "", lectureDescription: "" },
      { header: "lecture 2", lectureTitle: "", lectureDescription: "" },
    ]);

    const videos = ref([]);
    const storeVideo = (index, file) => {
      videos[index] = file;
      emit('store-video', index, file); // Emitir el evento store-video al componente principal
    };

    const addClase = () => {
      const newClase = {
        header: `lecture ${clases.value.length + 1}`,
        lectureTitle: "",
        lectureDescription: "",
      };
      clases.value = [...clases.value, newClase];
    };

    const emitFormData = () => {


      emit('update-form-data', { clases: clases.value });
    };

    const lectureVideo = (index) => {
      const input = document.getElementById('videoInput_' + index);
      const file = input.files[0];

      if (file) {
        console.log('Archivo seleccionado:', file);

        emit('store-video', index, file); // Emitir el evento store-video al componente padre

      }
    };

    return {
      clases,
      addClase,
      emitFormData,
      lectureVideo
    };
  },

};
</script>
