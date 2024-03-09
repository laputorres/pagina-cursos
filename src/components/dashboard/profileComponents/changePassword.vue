<template>
    <div id="change-password">
        <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-10 text-start">Change Password</fwb-heading>
        <form @submit.prevent="changePassword">
            <fwb-input v-model="currentPassword" class="text-start mb-2" placeholder="Current password"
                label="Current password" required />
            <fwb-input v-model="newPassword" class="text-start mb-2" placeholder="New password" label="New password"
                required />
            <fwb-input v-model="confirmPassword" class="text-start mb-2" placeholder="Confirm password"
                label="Confirm password" required />
            <fwb-alert v-if="showErrorAlert" closable icon type="danger">
                {{ errorMessage }}
            </fwb-alert>
            <div class="aditional-info flex justify-between items-end mt-10">
                <div class="requirements text-start text-gray-500 flex flex-col gap-2">
                    <h5 class="text-xl font-bold">Password requirements</h5>
                    <p class="font-italic">Please follow this guide for a strong password:</p>
                    <ul class="list-disc ml-5 space-y-2">
                        <li>One special characters</li>
                        <li>Min 8 characters</li>
                        <li>One number (2 are recommended)</li>
                    </ul>
                </div>
                <fwb-button class="w-full sm:w-1/2 md:w-1/3 lg:w-40 xl:[100%] bg-blue-400 self-end"
                    type="submit">Save</fwb-button>
            </div>
        </form>

        <fwb-alert v-if="showSuccessAlert"
            class="fixed bottom-[3%] right-[3%] w-[30vw] p-4 text-lg text-white rounded-lg bg-blue-500" closable icon
            type="success">
            Password changed successfully
        </fwb-alert>

        <!-- Mostrar mensaje de error -->

    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { FwbInput, FwbButton, FwbHeading, FwbAlert } from 'flowbite-vue'
import { auth, EmailAuthProvider, AuthCredential } from '@/FirebaseConfig';
import { reauthenticateWithCredential, updatePassword } from 'firebase/auth';

export default {
    components: {
        FwbInput,
        FwbButton,
        FwbHeading,
        FwbAlert
    },
    setup() {
        const currentPassword = ref('');
        const newPassword = ref('');
        const confirmPassword = ref('');

        const errorMessage = ref('');
        const showErrorAlert = ref(false);
        const showSuccessAlert = ref(false);

        const changePassword = async () => {

            errorMessage.value = '';
            if (newPassword.value !== confirmPassword.value) {
                // Mostrar un mensaje de error o manejar la discrepancia de contraseñas
                errorMessage.value = "Las contraseñas no coinciden";
                showErrorAlert.value = true;
                console.log("showErrorAlert:", showErrorAlert);
                return;
            }

            try {
                // Cambiar la contraseña del usuario actual
                const user = auth.currentUser;
                const credentials = EmailAuthProvider.credential(user.email, currentPassword.value);

                // Reautenticar al usuario
                const userCredential = await reauthenticateWithCredential(user, credentials);

                // Actualizar la contraseña
                await updatePassword(userCredential.user, newPassword.value);
                console.log("Contraseña cambiada exitosamente");

                showSuccessAlert.value = true;
                console.log("showSuccessAlert:", showSuccessAlert.value);
            } catch (error) {
                console.error("Error al cambiar la contraseña:");
                errorMessage.value = `La contraseña actual no es válida`;
                showErrorAlert.value = true;
                console.log("showErrorAlert:", showErrorAlert);
            }
        };

        watch(showSuccessAlert, (newValue) => {
            if (newValue) {
                setTimeout(() => {
                    showSuccessAlert.value = false;
                }, 5000);
            }
        });
        watch(showErrorAlert, (newValue) => {
            if (newValue) {
                setTimeout(() => {
                    showErrorAlert.value = false;
                }, 5000);
            }
        });

        return {
            currentPassword,
            newPassword,
            confirmPassword,
            changePassword,
            errorMessage,
            showSuccessAlert,
            showErrorAlert

        };
    }
}
</script>
