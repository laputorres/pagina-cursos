<template>

    <div class="flex justify-around relative">
        <div
            class="w-full sm:w-1/2 md:w-1/3 lg:w-40 xl:w-[50%] card-and-submenu sticky rounded-2xl top-[100px] max-h-auto overflow-y-auto h-fit bg-white shadow-xl bg-clip-border dark:bg-gray-800 dark:border-gray-700">
            <cardMenu />
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 profile-content overflow-y-auto ml-[5%] lg:w-40 xl:w-[100%]">
            <div
                class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <basicInfo />
            </div>
            <div
                class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <changePassword />
            </div>

            <div
                class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <notifications />
            </div>

        </div>
    </div>


</template>

<script>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue';
import router from '@/router';
import cardMenu from '@/components/dashboard/profileComponents/cardMenu.vue'
import basicInfo from '@/components/dashboard/profileComponents/basicInfoComponent.vue'
import changePassword from '@/components/dashboard/profileComponents/changePassword.vue'
import notifications from '@/components/dashboard/profileComponents/notificationsComponent.vue'


export default {
    components: {
        cardMenu,
        basicInfo,
        changePassword,
        notifications
    },
    setup() {



        onMounted(() => {
            initFlowbite();


        });


    }
}
</script>
