<template>
    <div>
        <fwb-heading tag="h4" color="text-blue-600" class="w-full mb-5 text-start">Price</fwb-heading>
        <form @input="emitFormData">
            <fwb-checkbox v-model="membership" label="Membership Included" />
            <fwb-checkbox v-model="paid" label="Paid" />
            <div v-if="showpaidPrice">
                <fwb-input v-model="paidPrice" placeholder="cost" />
            </div>
        </form>
    </div>
</template>


<script>

import { FwbHeading, FwbInput, FwbCheckbox } from 'flowbite-vue'
import { ref, watch } from 'vue'

export default {
    components: {
        FwbHeading,
        FwbInput,
        FwbCheckbox
    },
    props: ['formData'],
    setup(props, { emit }) {
        const membership = ref(true);
        const paid = ref(false);
        const paidPrice = ref('');
        const showpaidPrice = ref(false);

        if (paid.value) {
            showpaidPrice.value = true;
            membership.value = false;
        }

        watch(paid, (newValue) => {
            showpaidPrice.value = newValue;
            membership.value = !newValue;
        });
        const emitFormData = () => {
            emit('update-form-data', { membership: membership.value, paidPrice: paidPrice.value });
        };

        return {
            membership, paid, paidPrice, showpaidPrice, emitFormData
        }

    }


}

</script>