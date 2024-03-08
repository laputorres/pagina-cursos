<template>
    <div>
        <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-10 text-start">Change Password</fwb-heading>
        <form @submit.prevent="changePassword">
            <fwb-input v-model="name" class="text-start mb-2" placeholder="Current password" label="Current password" />
            <fwb-input v-model="name" class="text-start mb-2" placeholder="New password" label="New password" />
            <fwb-input v-model="name" class="text-start mb-2" placeholder="Confirm password" label="Confirm password" />
            <fwb-button class="w-full mt-10 sm:w-1/2 md:w-1/3 lg:w-40 xl:[100%] bg-blue-400 self-center"
                type="submit">Submit</fwb-button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { FwbInput, FwbButton, FwbHeading } from 'flowbite-vue'

export default {
    components: {
        FwbInput,
        FwbButton,
        FwbHeading
    },
    setup() {
        const currentPassword = ref('');
        const newPassword = ref('');
        const confirmPassword = ref('');
    }
}

</script>