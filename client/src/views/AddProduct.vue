<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <ProductForm :product_info="product_info" :isNewProduct="true" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header";
import ProductForm from "../components/forms/ProductForm";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
export default {
  components: {
    Header,
    ProductForm,
    Footer,
    SearchBar,
  },
  data() {
    return {
      product_info: {
        productName: "",
        price: null,
        description: "",
        premium: false,
        color: "",
        talla: "",
        img: [],
        tags: "",
      },
    };
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style></style>
