<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />

      <div>
        <Selling/>
      </div>
   

    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import Selling from "@/components/histories/Selling";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
    SearchBar,
    Selling,
  },
  data: () => ({
    selectedItem: 1,
    products: "",
    items: [
      {
        text: "Mis productos",
        icon: "mdi-clock",
        link: "/cuenta/mis-productos",
      },
      {
        text: "Actualizar información",
        icon: "mdi-account",
        link: "/user/actualizar-usuario",
      },
      {
        text: "Agregar producto",
        icon: "mdi-flag",
        link: "/user/agregar-producto",
      },
    ],
  }),
  async mounted() {
    const token = await this.$auth.getTokenSilently();

    // Use Axios to make a call to the API
    const { data } = await axios.get(
      `https://n4mbc432.herokuapp.com/users/getMyProducts/${this.$auth.user.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // send the access token through the 'Authorization' header
        },
      }
    );

    this.products = data;
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: black;
}
.card {
  margin-top: 5rem;
}
.user{
  text-decoration: none;
  color: #1b1a1a;
  font-family: $montserratSemiBold-font;
}
</style>
