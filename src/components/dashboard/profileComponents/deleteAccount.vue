<template>
    <div id="delete-account">
        <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-10 text-start">Delete Account</fwb-heading>
        <p class="text-start text-lg">Once you delete your account, there is no going back. Please be certain.</p>
        <div class="delete-confirm flex justify-between mt-7">
            <fwb-toggle v-model="toggle" label="I want to delete my account." />
            <fwb-button class="w-full  sm:w-1/2 md:w-1/3 lg:w-40 xl:[100%] bg-red-600 self-center"
                type="submit">Delete</fwb-button>
        </div>
    </div>
</template>

<script>
import {  FwbButton, FwbToggle, FwbHeading, FwbAlert } from 'flowbite-vue'

export default{
    components:{
        FwbHeading,
        FwbToggle,
        FwbButton
    }
}


</script>