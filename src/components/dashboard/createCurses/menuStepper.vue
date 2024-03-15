<template>
    <div class="fixed w-[20vw] ">
        <ul>
        <li v-if="formData.title ">
      <!-- Contenido del primer li cuando formData tiene datos -->
      <div class="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">1. Title</h3>
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
        </div>
      </div>
    </li>
   
    <li v-else>
      <!-- Contenido del último li cuando formData está vacío -->
      <div class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">1. Title</h3>
        </div>
      </div>
    </li>

    <!--validacion 2 -->
    <li v-if="formData.description ">
      <!-- Contenido del primer li cuando formData tiene datos -->
      <div class="w-full p-4 mt-3 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">2. Desccription</h3>
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
        </div>
      </div>
    </li>
    <li v-else>
      <div class="w-full mt-3 p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">2. Description</h3>
        </div>
      </div>
    </li>

    <!--validacion 3 -->
    <li v-if="formData.category">
      <!-- Contenido del primer li cuando formData tiene datos -->
      <div class="w-full p-4 mt-3 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">3. Category</h3>
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
        </div>
      </div>
    </li>
    <li v-else>
      <div class="w-full mt-3 p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">3. Category</h3>
        </div>
      </div>
    </li>

    <!--validacion 4 -->
    <li v-if="headerValue && descriptionValue && lectureVideo">
      <!-- Contenido del primer li cuando formData tiene datos -->
      <div class="w-full p-4 mt-3 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">4. Media</h3>
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
        </div>
      </div>
    </li>
    <li v-else-if="headerValue|| descriptionValue || lectureVideo">
      <!-- Contenido del segundo li cuando formData tiene solo uno de los campos -->
      <div class="w-full p-4 mt-3 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">4. Media</h3>
          <svg class="rtl:rotate-180 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </div>
      </div>
    </li>
    <li v-else>
      
      <div class="w-full mt-3 p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">4. Media</h3>
        </div>
      </div>
    </li>

    <!--validacion 5 -->
    <li v-if="formData.membership || headerValue && descriptionValue && lectureVideo">
      <!-- Contenido del primer li cuando formData tiene datos -->
      <div class="w-full p-4 mt-3 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">5. Price</h3>
          <svg class="rtl:rotate-180 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </div>
      </div>
    </li>
    
    <li v-else>
      <div class="w-full mt-3 p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">5. Price</h3>
        </div>
      </div>
    </li>
    </ul>
    </div>
  </template>
  
  <script>
  import { watch, ref } from 'vue';
  export default {
    props: {
      formData: Object,
    },

    setup(props) {
        const headerValue = ref('');
        const descriptionValue = ref('');
        const lectureVideo = ref('');
        const membership = ref('');


        watch(() => props.formData, (newValue) => {
      if (newValue.clases && newValue.clases.length > 0) {
        headerValue.value = newValue.clases[0].lectureTitle;
        descriptionValue.value = newValue.clases[0].lectureDescription;
        lectureVideo.value = newValue.clases[0].lectureVideo;
        membership.value = newValue.clases[0].membership;
       
      }
    });

    return {
      headerValue,
      descriptionValue,
      lectureVideo,
      membership
    };
    }
  };
  </script>
  