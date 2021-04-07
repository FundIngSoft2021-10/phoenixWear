<template>
  <div>
    <Header />
    <div v-if="!isLoaded" class="loader">
      <v-progress-circular
        :size="100"
        :width="7"
        color="phoenix"
        indeterminate
      ></v-progress-circular>
    </div>
    <Products v-else :products="products" />
  </div>
</template>

<script>
import Header from "../components/general/Header.vue";
import Products from "../components/clothes/Main-clothes.vue";
import axios from "axios";
export default {
  components: {
    Header,
    Products,
  },
  data() {
    return {
      products: null,
      show: false,
      isLoaded: false,
    };
  },
  mounted() {
    axios.get("https://n4mbc432.herokuapp.com/products").then((response) => {
      this.products = response.data.product;
      this.isLoaded = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.product-section {
  margin-top: 5rem;
}
.loader {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>