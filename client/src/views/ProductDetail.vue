<template>
  <v-main>
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
    <section v-else>
      <Breadcrumb
        class="breadCrumb"
        :productName="product.information.name.toUpperCase()"
      />
      <div class="detail-section">
        <div class="right-section">
          <Carousel :starting-image="0" :images="product.information.photo" />
        </div>
        <ProductInfo class="right-section" :product="product" />
      </div>
    </section>
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Breadcrumb from "../components/details/Breadcrumb.vue";
import ProductInfo from "../components/details/ProductInfo.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import Carousel from "../components/details/Carousel";
import axios from "axios";
export default {
  components: {
    Breadcrumb,
    Carousel,
    Header,
    ProductInfo,
    Footer,
    SearchBar,
  },
  data() {
    return {
      product: null,
      isLoaded: false,
    };
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
  mounted() {
    const url = `https://n4mbc432.herokuapp.com/products/findById/${this.$route.params.id}`;
    axios.get(url).then((response) => {
      this.product = response.data;
      this.isLoaded = true;
      console.log(this.product);
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 3rem;
}
.detail-section {
  width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.breadCrumb {
  margin: 1rem 0;
}
.left-section {
  width: 40%;
}
.right-section {
  width: 60%;
  align-self: center;
  margin: 0;
}
.loader {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
