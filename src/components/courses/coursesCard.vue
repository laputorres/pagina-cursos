<template>
    <router-link :to="'/courses/' + courseTitle.replace(/ /g, '-')" :productName="curseTitle"
        class="shadow relative overflow-hidden bg-white rounded-xl pb-2">
        <div class="relative overflow-hidden">
            <img class="w-full rounded-t-xl transition-transform duration-500 transform hover:scale-110" src="../../assets/Captura de pantalla de 2024-03-18 11-28-12.png" alt="">
      
        </div>
        <div class=" relative px-4 pb-5 pt-2">
            <div class="w-full flex justify-between">
                <div class="">
                    <p class="  text-gray-400 dark:text-gray-400  text-[14px] rounded-xl">{{ courseCategory }}</p>
                </div>

            </div>
            <h4 class="text-2xl mb-2 text-gray-600 dark:text-gray-400">{{ courseTitle }}</h4>
            <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#FD961E"
                    fill="#FD961E">
                    <path
                        d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#FD961E"
                    fill="#FD961E">
                    <path
                        d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#FD961E"
                    fill="#FD961E">
                    <path
                        d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#FD961E"
                    fill="#FD961E">
                    <path
                        d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#FD961E"
                    fill="#FD961E">
                    <path
                        d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <p class="text-gray-400 mx-2 text-[14px]">(20 reviews)</p>

            </div>
            <div class="flex border-t-2 dark:border-gray-700 my-0 pt-4">
                <div class="flex items-center justify-center w-1/3 gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" color="#116a3e"
                        fill="none">
                        <path
                            d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path
                            d="M8 3L8 6.69003C8 7.43013 8 7.80019 8.23811 7.94371C8.24836 7.94989 8.25884 7.95571 8.26951 7.96115C8.51756 8.08746 8.84124 7.89707 9.4886 7.51629C9.97254 7.23164 10.2145 7.08931 10.4815 7.08447C10.4938 7.08425 10.5062 7.08425 10.5185 7.08447C10.7855 7.08931 11.0275 7.23164 11.5114 7.51629C12.1588 7.89707 12.4824 8.08747 12.7305 7.96115C12.7412 7.95571 12.7516 7.94989 12.7619 7.94372C13 7.80019 13 7.43013 13 6.69003V3"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <span class="text-[14px] dark:text-gray-300">{{ lecturesCount }} lessons</span>
                </div>
                <div class="flex items-center justify-center w-1/3 gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" color="#116a3e"
                        fill="none">
                        <path
                            d="M14 3.5C17.7712 3.5 19.6569 3.5 20.8284 4.7448C22 5.98959 22 7.99306 22 12C22 16.0069 22 18.0104 20.8284 19.2552C19.6569 20.5 17.7712 20.5 14 20.5L10 20.5C6.22876 20.5 4.34315 20.5 3.17157 19.2552C2 18.0104 2 16.0069 2 12C2 7.99306 2 5.98959 3.17157 4.7448C4.34315 3.5 6.22876 3.5 10 3.5L14 3.5Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                        <path
                            d="M5 15.4999C6.60865 13.3625 10.3539 13.2458 12 15.4999M10.249 10.25C10.249 11.2165 9.46552 12 8.49902 12C7.53253 12 6.74902 11.2165 6.74902 10.25C6.74902 9.2835 7.53253 8.5 8.49902 8.5C9.46552 8.5 10.249 9.2835 10.249 10.25Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M15 9.5L19 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M15 13.5H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <span class="text-[14px] dark:text-gray-300">8 students</span>
                </div>
                <div class="flex items-center justify-center w-1/3 gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" color="#116a3e"
                        fill="none">
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="text-[14px] dark:text-gray-300"> 8 hrs 45 min</span>
                </div>
            </div>
            <p
                class="bg-custom1 py-2 absolute -top-4 right-4 px-1 w-1/3 h-[35px] flex items-center rounded-md text-[12px] text-center text-white">
                <span class=" font-bold text-white text-center py-1 px-2 text-[10px] rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" color="#ffffff"
                        fill="none">
                        <path
                            d="M10.9635 21.9824C10.7992 21.9941 10.6333 22 10.466 22C6.61877 22 3.5 18.866 3.5 15C3.5 11.134 6.61877 8 10.466 8C12.8331 8 15 9 16 11"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M15 9.5V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <circle cx="16.5" cy="18" r="4" stroke="currentColor" stroke-width="1.5" />
                        <path
                            d="M15.168 18.4436C15.468 18.5876 15.84 18.9596 16.02 19.2596C16.08 19.6796 16.38 18.0596 17.844 17.0996"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </span>
                {{ $t('onlymembers') }}
            </p>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        courseTitle: String,
        courseDescription: String,
        lecturesCount: Number
    }
};
</script>