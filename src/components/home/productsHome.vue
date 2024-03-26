<template>
    <div>
        <section id="Projects" class="bg-gray-100 overflow-hidden">
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
            }" :modules="modules" class="mySwiper w-[100vw] h-[70vh] max-sm:w-[88vw] overflow-hidden">
                <swiper-slide v-for="curse in curses" :key="curse.curseDocid" class="m-0 bg-white dark:bg-gray-700 rounded-xl mr-0!important">
                    <courseCard :courseTitle="curse.title" :courseCategory="curse.curseCategory" :lecturesCount="curse.lectures.length" />
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
import courseCard from '@/components/courses/coursesCard.vue'



export default {
    components: {
        Swiper,
        SwiperSlide,
        courseCard
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
