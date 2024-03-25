<template>
    <div>
        <section id="Projects" class=" overflow-hidden">
            <h3
                class=" text-4xl text-start border-l-4 border-custom1-light pl-4 my-10 font-extrabold tracking-tight text-custom1 dark:text-white">
                {{$t('lastupdated')}}</h3>
            <swiper :slidesPerView="4" :centeredSlides="true" :autoHeight="true" :spaceBetween="30" :loop="true"
                :pagination="{
                clickable: true,
            }" :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :breakpoints="{
                '240': {
                    slidesPerView: 1,
                    spaceBetween: 20,


                },
                '768': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '1024': {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }" :modules="modules" class="mySwiper w-[100vw] h-[50vh] max-sm:w-[88vw] overflow-hidden">
                <swiper-slide v-for="curse in curses" :key="curse.curseDocid" class="m-0 mr-0!important">
                    <div class="w-[100%] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <router-link :to="'/courses/' + curse.title.replace(/ /g, '-')" :productName="curse.title">
                            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="Product" class="h-40  w-[100%] object-cover rounded-t-xl" />
                            <div class="px-4 py-3  w-[100%]">
                                <div class="flex justify-between items-center">
                                    <div class=" text-start">
                                        <span class="text-white bg-custom1-light p-1 rounded-md mr-3 uppercase text-xs">{{ curse.curseCategory
                                            }}</span>
                                        <p class="text-lg font-bold text-black truncate block capitalize">{{ curse.title
                                            }}</p>
                                    </div>
                                    <p v-if="curse.membership = true"
                                        class="bg-custom1 py-2 px-1 w-1/3 h-[35px] flex items-center rounded-md text-[10px] text-white">
                                        <span class=" font-bold text-white text-center py-1 px-2 text-[10px] rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14"
                                                height="14" color="#ffffff" fill="none">
                                                <path
                                                    d="M10.9635 21.9824C10.7992 21.9941 10.6333 22 10.466 22C6.61877 22 3.5 18.866 3.5 15C3.5 11.134 6.61877 8 10.466 8C12.8331 8 15 9 16 11"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                <path
                                                    d="M15 9.5V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                <circle cx="16.5" cy="18" r="4" stroke="currentColor"
                                                    stroke-width="1.5" />
                                                <path
                                                    d="M15.168 18.4436C15.468 18.5876 15.84 18.9596 16.02 19.2596C16.08 19.6796 16.38 18.0596 17.844 17.0996"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                        {{$t('onlymembers')}}
                                    </p>
                                </div>
                                <div class="flex items-center max-sm:flex-wrap flex-col">
                                    <div
                                        class=" mx-auto max-sm:max-w-[100%] md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 lg:py-4">
                                        <div class="grid grid-cols-2 max-sm:grid-cols-4 max-sm:gap-2 gap-8 md:grid-cols-4">
                                            <div class="text-center md:border-r">
                                                <h6 class="max-sm:text-[14px] font-bold lg:text-lg xl:text-sm">144K</h6>
                                                <p
                                                    class="text-[10px] font-medium tracking-widest text-gray-800 uppercase ">
                                                    {{$t('lectures')}}
                                                </p>
                                            </div>
                                            <div class="text-center md:border-r">
                                                <h6 class=" font-bold lg:text-lg max-sm:text-[14px] xl:text-sm">12.9K</h6>
                                                <p
                                                    class="text-[10px]  tracking-widest text-gray-800 uppercase ">
                                                    alumns
                                                </p>
                                            </div>
                                            <div class="text-center md:border-r">
                                                <h6 class="font-bold lg:text-lg max-sm:text-[14px] xl:text-sm">48.3K</h6>
                                                <p
                                                    class="text-[10px] font-medium tracking-widest text-gray-800 uppercase ">
                                                    {{$t('users')}}
                                                </p>
                                            </div>
                                            <div class="text-center">
                                                <h6 class="font-bold lg:text-lg max-sm:text-[14px] xl:text-sm">24.5K</h6>
                                                <p
                                                    class="text-[10px] font-medium tracking-widest text-gray-800 uppercase ">
                                                    Cookies
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </swiper-slide>
            </swiper>
        </section>



    </div>
</template>

<script>
import { allCurses } from '../../services/firestoreServices.js'
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';



export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const curses = ref([]);
        const limitAmount = 6;

        onMounted(async () => {
            // Llamar a la función para obtener los datos de todos los usuarios
            curses.value = await allCurses(limitAmount);
            console.log("cursos montados: ", curses.value)
        });
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            curses,
            onSwiper,
            modules: [Pagination, Autoplay],
            onSlideChange,
        };
    }
}


</script>
