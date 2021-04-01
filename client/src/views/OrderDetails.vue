<template>
  <div>
    <Header/>
    <ProductInfo/>
    <OrderStatus/>
  </div>
</template>

<script>
import Header from "../components/general/Header.vue";
import ProductInfo from "../components/details/ProductInfo.vue"
import OrderStatus from "../components/details/OrderStatus.vue";
export default {
 components: {
   OrderStatus,
   ProductInfo,
   Header,
 }
};
</script>

<style>

</style>

