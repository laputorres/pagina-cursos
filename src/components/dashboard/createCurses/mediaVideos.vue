<template>
  <div>
    <h3 class="w-full text-cyan-500 text-2xl  font-bold mt-10 text-start">{{$t('media')}}</h3>
    <form @input="emitFormData">
      <div v-for="(clase, index) in clases" :key="index" class="">
        <h6 class="w-full text-cyan-500 text-xl  font-bold mt-10 text-start">{{$t('lectureTitle')}}
          </h6>
        <input v-model="clase.lectureTitle" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('enterlecturename')"
          required />

        <h6 class="w-full text-cyan-500 text-xl  font-bold mt-10 text-start">{{$t('uploadVideo')}}</h6>
        <!-- Etiqueta de estilo del botón -->
        <label :for="'videoInput_' + index"
          class="flex justify-center flex-col w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
          id="drop">
          <span v-if="selectedFileNames[index]" class="text-gray-600">{{ selectedFileNames[index] }}</span>
          <span v-if="!selectedFileNames[index]" class="flex items-center flex-col justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg><span class="font-medium text-gray-600"><span class="text-cyan-600 underline ml-[4px]">{{$t('browse')}}</span>
            {{$t('filesToAttach')}}
            </span></span>
          <input :id="'videoInput_' + index" @change="lectureVideo(index)" type="file" class="hidden" />

        </label>
        <h6 class="w-full text-cyan-500 text-xl  font-bold mt-10 text-start">{{$t('description')}}</h6>
        <textarea v-model="clase.lectureDescription" class="w-full border-gray-400 rounded-md" rows="6" :placeholder="$t('writeYourDescription')"></textarea>
      </div>
    </form>
    <button class="mt-10 p-3 text-white rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500" type="submit"
      @click="addClase">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
        <path d="M12 8V16M16 12H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
      </svg>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ['formData'],
  setup(props, { emit }) {
    const clases = ref([
      { header: "lecture 1", lectureTitle: "", lectureDescription: "" },

    ]);
    const selectedFileNames = ref([]);

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
        // Actualizar el array selectedFileNames utilizando Vue.set para garantizar la reactividad
        selectedFileNames.value[index] = file.name;
        emit('store-video', index, file); // Emitir el evento store-video al componente padre
      }
    };

    return {
      clases,
      addClase,
      emitFormData,
      lectureVideo,
      selectedFileNames
    };
  },
};
</script>
