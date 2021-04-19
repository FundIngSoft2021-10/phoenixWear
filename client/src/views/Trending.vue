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
    <Trending v-else :products="products" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Trending from "../components/trending/Trending-main.vue";
import Footer from "../components/general/Footer.vue";
import SearchBar from "@/components/general/SearchBar";
import axios from "axios";
export default {
  components: {
    Header,
    Trending,
    Footer,
    SearchBar,
  },
  data() {
    return {
      products: null,
      show: false,
      isLoaded: false,
    };
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
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
* {
  box-sizing: border-box;
  font-family: $montserratRegular-font;
  text-align: left;
}
.product-section {
  margin-top: 5rem;
  margin-left: 9%;
  margin-right: 9%;
}
.loader {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
