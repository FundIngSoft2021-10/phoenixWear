<template>
  <v-main>
    <Header />
    <ProductForm :product_info="product_info" :isNewProduct="false" />
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
        productName: "Camisa Azul",
        price: 500000,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        premium: true,
        color: "#FFFFFF",
        talla: "M",
        id_buyer: "45686126om",
        id_seller: "45646854",
        img: [],
        tags: "polo, mujeres, emprendedora",
      },
    };
  },
};
</script>

<style></style>
