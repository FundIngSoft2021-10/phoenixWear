<template>
  <v-main class="content">
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <div v-if="!isLoaded" class="loader">
      <v-progress-circular
        :size="100"
        :width="7"
        color="phoenix"
        indeterminate
      ></v-progress-circular>
    </div>
    <Products v-else class="width" :products="products" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Products from "../components/clothes/Main-clothes.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import axios from "axios";
export default {
  components: {
    Header,
    Products,
    SearchBar,
    Footer,
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

  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-family: $montserratRegular-font;
  text-align: left;
}
.width {
  width: 70vw;
  margin: auto;
  font-family: $montserratRegular-font;
  margin-top: 6rem;
}

.loader {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
