<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <Breadcrumb />
    <AddToCart />
    <ProductInfo />
    <Description />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Breadcrumb from "../components/details/Breadcrumb.vue";
import AddToCart from "../components/details/AddToCart.vue";
import Description from "../components/details/Description.vue";
import ProductInfo from "../components/details/ProductInfo.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
export default {
  components: {
    Breadcrumb,
    AddToCart,
    Description,
    Header,
    ProductInfo,
    Footer,
    SearchBar,
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style></style>
