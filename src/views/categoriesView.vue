<template>
    <div>
        <navbarIndex/>
        <div class="bg-custom1 pt-8 pb-16 relative z-10">
            <div class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div class="flex-col flex lg:flex-row items-start lg:items-center">
                   
                    <div class="ml-0 lg:ml-20 my-6 lg:my-0">
                        <h4 class="text-2xl font-bold leading-tight text-white mb-2">Dashboard</h4>
                        <p class="flex items-center text-gray-300 text-xs">
                            <span class="cursor-pointer"> Portal </span>
                            <span class="mx-2"> &gt; </span>
                            <span class="cursor-pointer"> Dashboard </span>
                            <span class="mx-2"> &gt; </span>
                            <span class="cursor-pointer"> KPIs </span>
                        </p>
                    </div>
                </div>
                <div>
                    <button class="focus:outline-none mr-3 bg-transparent transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-5 py-2 text-sm border border-white">Back</button>
                    <button class="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm">Edit Profile</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navbarIndex from '@/components/navbars/navbarIndex.vue';


export default{
    components:{
        navbarIndex
    }
}
</script>