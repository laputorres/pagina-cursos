<template>
    <div>
        <fwb-heading tag="h3" color="text-blue-400" class="w-full mb-10 text-start">Create Curse</fwb-heading>

        <div class="w-full flex max-sm:flex-col lg:flex-row justify-between">
            <div class="w-[25%]">
                <stepper />
            </div>
            <div class="w-[65%]">
                <div
                    class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                    <titleDescription @update-form-data="updateFormData" />
                </div>
                <div
                    class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                    <mediaVideos @update-form-data="updateFormData" />
                </div>

                <div
                    class="px-10 py-10 mb-10  bg-white shadow-xl bg-clip-border rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                    <priceComponent @update-form-data="updateFormData" />
                </div>
            </div>
        </div>


    </div>
</template>


<script>
import { FwbHeading } from 'flowbite-vue'
import stepper from '../createCurses/menuStepper.vue'
import titleDescription from '../createCurses/titleDescription.vue'
import mediaVideos from '../createCurses/mediaVideos'
import priceComponent from '../createCurses/priceComponent.vue'
import { ref } from 'vue';

export default {
    components: {
        FwbHeading,
        stepper,
        titleDescription,
        mediaVideos,
        priceComponent

    },
    setup() {
        const formData = ref({});

        const updateFormData = (data) => {
            formData.value = { ...formData.value, ...data };
            console.log('Datos del formulario acumulados:', formData.value);
            // Puedes almacenar estos datos en algún lugar o enviarlos a Firebase desde aquí
            // No necesitas mostrarlos en pantalla, ya que tu objetivo es enviarlos todos juntos a Firebase
        };

        return {
            formData,
            updateFormData,
        };
    },
}

</script>