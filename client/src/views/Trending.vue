<template>
  <v-main>
    <Header />
    <Footer />
    <!-- <img src="../assets/imgs/logo.png" alt="Phoenix-logo" height="200" width="200" /> -->
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.sad {
  height: 100vh;
}
</style>
