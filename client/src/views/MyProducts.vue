<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <div>
      <div>
        <img :src="$auth.user.picture" />
        <h2>{{ $auth.user.name }}</h2>
      </div>

      <div>
        <pre>{{ JSON.stringify(products, null, 2) }}</pre>
      </div>
    </div>

    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
    SearchBar,
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
      `http://localhost:3001/users/getMyProducts/${this.$auth.user.email}`,
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
</style>
