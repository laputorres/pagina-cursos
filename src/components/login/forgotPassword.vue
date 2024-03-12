<template>
    <div class="h-screen md:flex flex-row-reverse">
        <div
            class="relative overflow-hidden md:flex w-full bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">

            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8">
            </div>
            <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8">
            </div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

            <div class="flex flex-col md:w-1/2 justify-center py-10 rounded-2xl items-center bg-white shadow-2xl">
                <router-link to="/" class="font-semibold text-[80px] text-center text-gray-400 ">LOGO</router-link>
                <h1 class="text-gray-800 font-bold text-2xl mb-1">Forgot Your Password?</h1>
                <p class="mb-4 text-sm text-gray-700">
                    We get it, stuff happens. Just enter your email address below and we'll send you a
                    link to reset your password!
                </p>
                <form class="bg-white w-[50%]" @submit.prevent="sendEmail">
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
                        class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                </form>
                <router-link to="/forgot-password">
                    <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Back to login</span>
                </router-link>
            </div>
        </div>
        <fwb-alert v-if="showSuccessAlert"
            class="fixed bottom-[3%] right-[3%] max-w-[50vw] p-4 text-lg text-white rounded-lg bg-blue-500" closable icon
            type="alert">
            An email with instructions to reset your password has been sent to your registered email address. Please check your inbox and follow the provided link to complete the password reset process. If you don't receive the email within a few minutes, please check your spam folder.
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
    components:{
        FwbAlert
    },

  setup() {
      const user = auth.currentUser;
      const email = ref('');
      const showSuccessAlert = ref(false);
      
      const sendEmail = async () => {
          try {

          
           await sendPasswordResetEmail(auth, email.value);
            console.log("email reset password",email)
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