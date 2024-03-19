<template>
    <div>
        <h4 class="w-full text-cyan-500 text-xl  font-bold mb-5 text-start">{{$t('price')}}</h4>
        <form @input="emitFormData">
            <fwb-checkbox v-model="membership" color="" :label="$t('membershipIncluded')" />
            <fwb-checkbox v-model="paid" class="mt-2" :label="$t('paid')" />
            <div v-if="showpaidPrice">
                <fwb-input v-model="paidPrice" type="number" class="mt-2" placeholder="cost" />
            </div>
        </form>
    </div>
</template>


<script>

import { FwbHeading, FwbInput, FwbCheckbox } from 'flowbite-vue'
import { ref, watch } from 'vue'

export default {
    components: {
       
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