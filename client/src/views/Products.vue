<template>
  <div>
    <Header />
    <Products :products="products" />
  </div>
</template>

<script>
import Header from "../components/general/Header.vue";
import Products from "../components/products/Products";
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
    };
  },
  mounted() {
    axios
      .get("https://n4mbc432.herokuapp.com/products")
      .then((response) => (this.products = response.data.product));
  },
};
</script>

<style lang="scss" scoped>
.product-section {
  margin-top: 5rem;
}
</style>
