<template>
  <v-main>
    <Header />
    <ProductForm :product_info="product_info" :isNewProduct="true" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header";
import ProductForm from "../components/forms/ProductForm";
import Footer from "../components/general/Footer";
export default {
  components: {
    Header,
    ProductForm,
    Footer,
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
};
</script>

<style></style>
