<template>
<div>
<navbarIndex/>
<h1>{{ productName }}</h1>
<p>{{ curse.curseDescription }}</p>
</div>
</template>


<script>
import navbarIndex from '@/components/navbars/navbarIndex.vue'
import {getCurseByName } from '../services/firestoreServices.js'
import {ref, onMounted } from 'vue'
export default{
    props: ['productName'],

    components:{
        navbarIndex
    },

    setup(props){
        const curse = ref([]);
        const formattedProductName = props.productName.replace(/-/g, ' ');
        onMounted(async () => {
            console.log('Nombre del curso formateado:', formattedProductName);
            // Llamar a la función para obtener los datos de todos los usuarios
            curse.value = await getCurseByName(formattedProductName);
            console.log("curso para mostrar: ", curse.value)
        });

        return {
            curse
        }
    }
}
</script>