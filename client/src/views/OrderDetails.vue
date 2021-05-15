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
      <Breadcrumb :productName="product.information.name" />
      <div class="detail-section">
        <div class="right-section">
          <Carousel :starting-image="0" :images="product.information.photo" />
        </div>
        <ProductInfo
          class="right-section"
          :product="product.information"
          :isBuyer="isBuyer"
        />
      </div>
    </section>
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Breadcrumb from "../components/details/Breadcrumb.vue";
import ProductInfo from "../components/details/OrderInfo.vue";
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
      id: "",
      state: "",
      isBuyer: "",
    };
  },
  async mounted() {
    const url1 = `https://n4mbc432.herokuapp.com/products/findById/${this.$route.params.id}`;
    //const url2 = `http://localhost:3001/users/getMyInfo/${this.$auth.user.email}`;
    const token = await this.$auth.getTokenSilently();
    const { data } = await axios.get(
      `https://n4mbc432.herokuapp.com/users/getMyId/${this.$auth.user.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // send the access token through the 'Authorization' header
        },
      }
    );
    this.id = data;

    axios.get(url1).then((response) => {
      this.product = response.data;
      this.state = this.product.information.status;
      this.isBuyer = this.product.ID_buyer == this.id ? true : false;
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
section {
  margin-top: 3rem;
}
.detail-section {
  width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.left-section {
  width: 40%;
}
.right-section {
  width: 60%;
  align-self: center;
  margin-top: 1rem;
}
.loader {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
