<template>
  <div
    class="relative w-full h-[120vh] pt-20 max-sm:px-4 bg-white dark:bg-gray-700">
    
    <div
      class="relative px-4 lg:px-10 bg-custom1 max-sm:w-[80vw] dark:bg-custom1-dark h-[120vh]  rounded-2xl items-start pt-20  container mx-auto flex max-sm:flex-col  gap-4">
      <div class="lg:w-[40vw]">
        <h1 class="text-7xl w-1/3 xl:w-1/3 md:text-5xl xl:text-7xl lg:text-5xl text-white font-black">{{ $t('titleHome') }}</h1>
        <div class="f-f-r text-md md:text-sm lg:text-sm max-sm:w-full md:w-full  w-2/3  text-gray-400 mt-4 dark:text-white">
          {{ $t('descriptionHome') }}
        </div>
        <button
          class="hover:opacity-90 text-xl w-1/3 xl:text-2xl rounded-lg max-sm:w-full md:text-sm max-sm:mt-10 xl:w-4/12 mt-4 xl:mt-11 f-f-r p-2 bg-custom1-dark dark:bg-custom1-light  text-white text-bold">{{
          $t('getStarted') }}</button>
      </div>
      <div class="lg:w-[50vw]">
        <img class="lg:w-[65vw] md:w-[1500px] xl:w-[50vw] shadow-2xl  rounded-lg "
          src="https://firebasestorage.googleapis.com/v0/b/tienda-cursos.appspot.com/o/pexels-ravi-kant-4531875.jpg?alt=media&token=960582b3-da94-4a0d-bcbd-0ecfb0ef7c45"
          alt="" />
      </div>
    </div>
    <div
      class="w-[95vw] max-sm:w-[90vw] absolute flex max-sm:flex-wrap max-sm:gap-0 max-sm:gap-y-4 -bottom-36 max-sm:-bottom-48 mx-4 gap-4 shadow-xl  dark:ring-0 dark:ring-offset-5 dark:bg-gray-600 dark:bg-opacity-30 dark:backdrop-blur-sm dark:bg-blur-md  ring-offset-5 border-custom1 border-solid  bg-white  bg-opacity-30 backdrop-blur-sm bg-blur-md py-4 rounded-2xl">
      <div class="w-1/4 max-sm:w-1/2 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#116a3e" fill="none"
          class="mx-auto">
          <path
            d="M7 22V12.2757C7 11.1939 7 10.653 7.24458 10.1993C7.48915 9.74558 7.93843 9.45308 8.83697 8.86808L10.9185 7.51291C11.4437 7.17097 11.7063 7 12 7C12.2937 7 12.5563 7.17097 13.0815 7.51291L15.163 8.86808C16.0616 9.45308 16.5108 9.74558 16.7554 10.1993C17 10.653 17 11.1939 17 12.2757V22"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 13H12.009" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M20 22V17.1623C20 14.8707 19.0556 14.6852 17 14" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 22V17.1623C4 14.8707 4.94437 14.6852 7 14" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M12 7V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M10 22L10 19C10 18.0572 10 17.5858 10.2929 17.2929C10.5858 17 11.0572 17 12 17C12.9428 17 13.4142 17 13.7071 17.2929C14 17.5858 14 18.0572 14 19V22"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-2xl  dark:text-white font-bold text-gray-600"> 500+</span>
        <p class="text-3xl text-custom1 dark:text-custom1-light">Courses</p>
      </div>
      <div class="w-1/4 max-sm:w-1/2 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#116a3e" fill="none"
          class="mx-auto">
          <path
            d="M7 22V12.2757C7 11.1939 7 10.653 7.24458 10.1993C7.48915 9.74558 7.93843 9.45308 8.83697 8.86808L10.9185 7.51291C11.4437 7.17097 11.7063 7 12 7C12.2937 7 12.5563 7.17097 13.0815 7.51291L15.163 8.86808C16.0616 9.45308 16.5108 9.74558 16.7554 10.1993C17 10.653 17 11.1939 17 12.2757V22"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 13H12.009" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M20 22V17.1623C20 14.8707 19.0556 14.6852 17 14" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 22V17.1623C4 14.8707 4.94437 14.6852 7 14" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M12 7V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M10 22L10 19C10 18.0572 10 17.5858 10.2929 17.2929C10.5858 17 11.0572 17 12 17C12.9428 17 13.4142 17 13.7071 17.2929C14 17.5858 14 18.0572 14 19V22"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-2xl text-gray-600 font-bold"> 3500+</span>
        <p class="text-2xl font-bold text-gray-600">Users</p>
      </div>
      <div class="w-1/4 max-sm:w-1/2 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#116a3e" fill="none"
          class="mx-auto">
          <path
            d="M7 22V12.2757C7 11.1939 7 10.653 7.24458 10.1993C7.48915 9.74558 7.93843 9.45308 8.83697 8.86808L10.9185 7.51291C11.4437 7.17097 11.7063 7 12 7C12.2937 7 12.5563 7.17097 13.0815 7.51291L15.163 8.86808C16.0616 9.45308 16.5108 9.74558 16.7554 10.1993C17 10.653 17 11.1939 17 12.2757V22"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 13H12.009" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M20 22V17.1623C20 14.8707 19.0556 14.6852 17 14" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 22V17.1623C4 14.8707 4.94437 14.6852 7 14" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M12 7V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M10 22L10 19C10 18.0572 10 17.5858 10.2929 17.2929C10.5858 17 11.0572 17 12 17C12.9428 17 13.4142 17 13.7071 17.2929C14 17.5858 14 18.0572 14 19V22"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-2xl font-bold"> 500+</span>
        <p class="text-2xl">Courses</p>
      </div>
      <div class="w-1/4 max-sm:w-1/2 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#116a3e" fill="none"
          class="mx-auto">
          <path
            d="M7 22V12.2757C7 11.1939 7 10.653 7.24458 10.1993C7.48915 9.74558 7.93843 9.45308 8.83697 8.86808L10.9185 7.51291C11.4437 7.17097 11.7063 7 12 7C12.2937 7 12.5563 7.17097 13.0815 7.51291L15.163 8.86808C16.0616 9.45308 16.5108 9.74558 16.7554 10.1993C17 10.653 17 11.1939 17 12.2757V22"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 13H12.009" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M20 22V17.1623C20 14.8707 19.0556 14.6852 17 14" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 22V17.1623C4 14.8707 4.94437 14.6852 7 14" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M12 7V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M10 22L10 19C10 18.0572 10 17.5858 10.2929 17.2929C10.5858 17 11.0572 17 12 17C12.9428 17 13.4142 17 13.7071 17.2929C14 17.5858 14 18.0572 14 19V22"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-2xl font-bold"> 500+</span>
        <p class="text-2xl">Courses</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  },
};
</script>

<style scoped>
.top-100 {
  animation: slideDown 0.5s ease-in-out;
}

@keyframes slideDown {
  0% {
    top: -50%;
  }

  100% {
    top: 0;
  }
}

* {
  outline: none !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
</style>
