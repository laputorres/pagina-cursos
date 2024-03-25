<template>
  <div class="relative w-full h-[100vh] md:h-[80vh] lg:h-[100vh] xl:h-[100vh] pt-0 max-sm:mt-14 lg:bg-custom1 sm:bg-white max-sm:bg-white">
    <div class="hidden sm:block">
      <div class="absolute bg-cover max-md:bg-white md:bg-custom1 lg:bg-white w-[60vw] right-0 h-full inset-0"></div>
    </div>
    <div
      class="relative px-4 lg:px-10  xl:px-8 h-[80vh] md:h-[80vh] lg:h-[100vh] items-center  container mx-auto flex max-sm:flex-col  gap-4">
      <div class="lg:w-[40vw]">
        <h1 class="text-7xl w-1/2 xl:w-full xl:text-9xl text-custom1 font-black f-f-l">{{ $t('titleHome') }}</h1>
        <div class="f-f-r text-md md:text-xl lg:text-md max-sm:w-full  w-2/3 lg:pb-5 sm:pb-0 pt-5 xl:pt-20">
          {{ $t('descriptionHome') }}
        </div>
        <button
          class="hover:opacity-90 text-xl w-1/3 xl:text-3xl rounded-lg max-sm:w-full max-sm:mt-10 xl:w-10/12 mt-4 xl:mt-11 f-f-r py-6 bg-custom1  text-white text-bold">{{
            $t('getStarted') }}</button>
      </div>
      <div class="lg:w-[50vw] lg:-ml-10">
        <img class="lg:w-[65vw] xl:w-[50vw] shadow-2xl  rounded-lg "
          src="https://firebasestorage.googleapis.com/v0/b/tienda-cursos.appspot.com/o/pexels-ravi-kant-4531875.jpg?alt=media&token=960582b3-da94-4a0d-bcbd-0ecfb0ef7c45"
          alt="" />
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
