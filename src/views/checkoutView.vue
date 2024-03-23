<template>
    <navbarIndex/>
    <div v-if="loading">
        <h1>Cargando...</h1>
    </div>
    <div v-else>
    <h1>checkout</h1>
    <div v-for="price in prices" :key="price.priceDocId" class="price mt-20">
        <p>{{ price.name }}</p>
        <p v-for="pricing in price.prices" :key="pricing.lectureDocId">{{ pricing.lectureDocId }}
            <button @click="selectPrice(pricing.lectureDocId)">Seleccionar</button>
        </p>
    </div>
    <button @click="createSubscription">Pagar</button>
</div>

</template>

<script>
import  {membershipPrices} from '../services/firestoreServices.js'
import navbarIndex from '@/components/navbars/navbarIndex.vue';
import { ref, watchEffect } from 'vue'; // Importa watchEffect
import { auth } from '@/FirebaseConfig'
import { getFirestore, collection, addDoc, onSnapshot } from '@firebase/firestore';

export default {
    components:{
        navbarIndex
    },
    setup() {
        const prices = ref([]);
        const loading = ref(true); 
        let selectedPriceId = null;

        watchEffect(async () => { // Usa watchEffect en lugar de onMounted
            try {
                prices.value = await membershipPrices();
                console.log("precios en firebase: ", prices.value);
            } catch (error) {
                console.error('Error al obtener datos de todos los precios', error);
            } finally {
                loading.value = false; // Marcar como cargado o no una vez que se obtienen los datos
            }
        });

        const selectPrice = (priceId) => {
            selectedPriceId = priceId;
            console.log('Precio seleccionado:', selectedPriceId);
        };


        const createSubscription = async () => {
    try {
        if (!selectedPriceId) {
            console.error('Error: No se ha seleccionado ningún precio');
            return;
        }

        const db = getFirestore();
        const collectionRef = collection(
            db,
            "usuarios",
            auth.currentUser.uid,
            "checkout_sessions"
        );

        const docRef = await addDoc(collectionRef, {
            price: selectedPriceId, // Utiliza el precio seleccionado
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        onSnapshot(docRef, (snap) => {
            const { error, url } = snap.data();

            if (error) {
                console.error(`An error occured: ${error.message}`);
                loading.value = false;
            }

            if (url) {
                window.location.assign(url); // Redirige al formulario de pago de Stripe
            }
        });
    } catch (error) {
        console.error('Error al crear la suscripción', error);
        loading.value = false;
    }
};


        return {
            prices,
            loading,
            createSubscription,
            selectPrice
        };
    }
};
</script>

