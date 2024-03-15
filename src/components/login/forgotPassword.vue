<template>
    <div class="h-screen max-sm:min-h-[100dvh] md:flex flex-row-reverse">
        <div
            class="relative overflow-hidden md:flex w-full max-sm:h-[100vh] max-sm:flex bg-gradient-to-tr from-gray-50 to-white i justify-around items-center ">

            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8">
            </div>
            <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8">
            </div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="relative py-0 sm:max-w-[90vw] sm:mx-auto">
                <div
                    class="absolute inset-0 w-[35vw] max-sm:w-[90vw] max-sm:mx-auto bg-gradient-to-r  from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
                </div>
                <div
                    class="relative max-sm:w-[90vw] w-[35vw] max-sm:mx-auto px-4 py-4 bg-white shadow-lg rounded-3xl sm:p-20">
                    <router-link to="/" class="font-semibold text-[80px] text-center text-gray-400 ">LOGO</router-link>
                    <h1 class="text-2xl font-semibold">Forgot Your Password?</h1>
                    <p class="mb-4 text-sm text-gray-700">
                        We get it, stuff happens. Just enter your email address below and we'll send you a
                        link to reset your password!
                    </p>
                    <form class="max-w-md max-sm:w-[75vw] mx-auto" @submit.prevent="sendEmail">
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input v-model="email" class="pl-2 outline-none border-none" type="email" name="" id=""
                                placeholder="Email Address" required />
                        </div>

                        <button type="submit"
                            class="block w-full bg-gradient-to-r  from-cyan-400  to-sky-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Send</button>
                    </form>
                    <router-link to="/login">
                        <span
                            class="text-sm ml-2 flex justify-center items-center text-cyan-500 hover:text-sky-800 mt-5 max-sm:mb-10 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                class="text-cyan-500 hover:text-sky-800" fill="none">
                                <path d="M4 5.99951L4.00003 18.0002" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M12.4968 12.0109V12.3814C12.5373 15.3525 12.4024 16.3847 11.1518 15.9055L10.8438 15.7236L10.5952 15.5508L10.06 15.1378L9.05958 14.2685L8.03669 13.4047L7.53669 12.9516L7.31404 12.7251L7.05187 12.346L6.99805 12.0097L7.05187 11.6757L7.31404 11.2967L7.53669 11.0701L8.03669 10.617L9.05958 9.75323L10.06 8.8839L10.5952 8.47091L10.8438 8.29813L11.1518 8.11621C12.4024 7.63699 12.5373 8.66922 12.4968 11.6403V12.0109ZM12.4968 12.0109H19.9997"
                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            Back to login</span>
                    </router-link>
                </div>
            </div>
        </div>
        <fwb-alert v-if="showSuccessAlert"
            class="fixed bottom-[3%] right-[3%] max-w-[50vw] max-sm:max-w-[90vw] p-4 text-lg text-white rounded-lg bg-sky-500" closable
            icon type="alert">
            An email with instructions to reset your password has been sent to your registered email address. 
        </fwb-alert>
    </div>
</template>


// Componente de login

<script>

import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useStore } from 'vuex';
import { auth } from '@/FirebaseConfig'
import { FwbAlert } from 'flowbite-vue';

export default {
    components: {
        FwbAlert
    },

    setup() {
        const user = auth.currentUser;
        const email = ref('');
        const showSuccessAlert = ref(false);

        const sendEmail = async () => {
            try {


                await sendPasswordResetEmail(auth, email.value);
                console.log("email reset password", email)
                // El correo para restablecer la contraseña se ha enviado correctamente
                console.log('Password reset email sent successfully!');
                showSuccessAlert.value = true;
                // Puedes redirigir al usuario a una página de confirmación o mostrar un mensaje aquí
            } catch (error) {
                console.error('Error sending password reset email:', error.message);
                // Muestra un mensaje de error al usuario o maneja el error de alguna manera
            }
        };



        return { email, sendEmail, showSuccessAlert };
    },


};
</script>