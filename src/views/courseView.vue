<template>
<div>
<navbarIndex/>
<h1>{{ productName }}</h1>
</div>
</template>


<script>
import navbarIndex from '@/components/navbars/navbarIndex.vue'
export default{
    props: ['productName'],

    components:{
        navbarIndex
    }
}
</script>