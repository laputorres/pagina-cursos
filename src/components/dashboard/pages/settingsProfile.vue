<template>

    <div class="flex justify-around relative">
        <div
            class="w-full z-[1] sm:w-1/2 md:w-1/3 lg:w-40 xl:w-[50%] card-and-submenu sticky rounded-2xl top-[100px] max-h-auto overflow-y-auto h-fit bg-white shadow-xl bg-clip-border dark:bg-gray-800 dark:border-gray-700">
            <cardMenu />
        </div>
        <div class="w-full z-0 sm:w-1/2 relative md:w-1/3 profile-content overflow-y-auto top-[100px] ml-[5%] lg:w-40 xl:w-[100%]">
            <div
                class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <basicInfo />
            </div>
            <div
                class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <changePassword />
            </div>

            <div id="notifications"
                class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <notifications />
            </div>

            <div
                class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <deleteAccount />
            </div>

        </div>
    </div>


</template>

<script>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue';
import cardMenu from '@/components/dashboard/profileComponents/cardMenu.vue'
import basicInfo from '@/components/dashboard/profileComponents/basicInfoComponent.vue'
import changePassword from '@/components/dashboard/profileComponents/changePassword.vue'
import deleteAccount from '@/components/dashboard/profileComponents/deleteAccount.vue'
import notifications from '@/components/dashboard/profileComponents/notificationsComponent.vue'


export default {
    components: {
        cardMenu,
        basicInfo,
        changePassword,
        notifications,
        deleteAccount
    },
    setup() {



        onMounted(() => {
            initFlowbite();


        });


    }
}
</script>
