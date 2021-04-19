<template>
  <v-main>
    <Header />
    <div class="confirmationPurchase">
      <h1>¡Compra Realizada!</h1>
      <v-img
        class="img"
        src="../assets/imgs/done.svg"
        height="500"
        width="500"
      />
    </div>
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped lang="scss">
.confirmationPurchase {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
h1 {
  text-align: center;
  padding-top: 1.5rem;
  font-family: $montserratSemiBold-font;
}
</style>
