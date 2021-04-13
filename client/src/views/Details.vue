<template>
  <div>
    <Header/>
    <Breadcrumb/>
    <AddToCart/>
    <ProductInfo/>
    <Description/>
  </div>
</template>

<script>
import Header from "../components/general/Header.vue";
import Breadcrumb from "../components/details/Breadcrumb.vue";
import AddToCart from "../components/details/AddToCart.vue";
import Description from "../components/details/Description.vue";
import ProductInfo from "../components/details/ProductInfo.vue"
export default {
 components: {
   Breadcrumb,
   AddToCart,
   Description,
   Header,
  ProductInfo,
 }
};
</script>

<style>
</style>

