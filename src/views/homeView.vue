<template>
  <div>
    <navbar />
    <main>
      <section>
        <heroHome />
      </section>

      <section class="pb-20 mt-40">
        <infoCards />
      </section>
      <section>
        <productsHome />
      </section>

      <footer>
        <footerView/>
      </footer>



    </main>

  </div>
</template>

<script>
import navbar from '../components/navbars/navbarIndex.vue'
import searchHome from '../components/home/searchHome.vue'
import productsHome from '../components/home/productsHome.vue'
import heroHome from '../components/home/heroHome'
import infoCards from '../components/home/infoCards.vue'
import footerView from '../views/footerView.vue'

export default {
  components: {
    navbar,
    heroHome,
    infoCards,
    productsHome,
    footerView
  }

}
</script>