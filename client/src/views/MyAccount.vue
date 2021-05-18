<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <div class="card">
      <v-card elevation="5" class="mx-auto" max-width="600" tile>
        <v-list dense>
          <v-subheader>MI CUENTA</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link class="link" :to="item.link">
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>

    <div>
      <div>
        <img :src="$auth.user.picture" />
        <h2>{{ $auth.user.name }}</h2>
      </div>

      <div>
        <pre>{{ JSON.stringify(userInfo, null, 2) }}</pre>
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
    userInfo: "",
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
      {
        text: "Mis compras",
        icon: "mdi-clock",
        link: "/cuenta/mis-compras",
      },
      {
        text: "Agregar Phoenix Credits",
        icon: "mdi-account",
        link: "/credits",
      },
    ],
  }),
  async mounted() {
    const token = await this.$auth.getTokenSilently();

    // Use Axios to make a call to the API
    const { data } = await axios.get(
      `https://n4mbc432.herokuapp.com/users/getMyInfo/${this.$auth.user.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // send the access token through the 'Authorization' header
        },
      }
    );

    this.userInfo = data;
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
