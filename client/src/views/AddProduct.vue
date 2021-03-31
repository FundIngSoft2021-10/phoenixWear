<template>
  <div>
    <Header />
    <ProductForm :product_info="product_info" :isNewProduct="true" />
  </div>
</template>

<script>
import Header from "../components/general/Header";
import ProductForm from "../components/forms/ProductForm";
export default {
  components: {
    Header,
    ProductForm,
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
        id_buyer: "",
        id_seller: "",
        img: [],
      },
    };
  },
};
</script>

<style></style>
