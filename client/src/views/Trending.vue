<template>
  <v-app>
    <Header />
    <h1>{{ products }}</h1>
    <!-- <img src="../assets/imgs/logo.png" alt="Phoenix-logo" height="200" width="200" /> -->
  </v-app>
</template>

<script>
import Header from "../components/general/Header.vue";
import axios from "axios";
export default {
  components: {
    Header,
  },
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    axios
      .get("https://n4mbc432.herokuapp.com/products")
      .then((response) => (this.products = response.data.product));
  },
};
</script>

<style lang="scss" scoped></style>
