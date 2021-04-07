<template>
  <div class="content">
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
*{
  box-sizing: border-box;
  font-family: $montserratRegular-font;
  text-align: left;
}
.product-section {
  margin-top: 5rem;
  //background-color: red;
  margin-left: 11%;
  margin-right: 11%;
}
.loader {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>