<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <UserForm :user_info="user_info" :isNewUser="false" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header";
import UserForm from "../components/forms/CreateUser";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
export default {
  components: {
    Header,
    UserForm,
    Footer,
    SearchBar,
  },
  data() {
    return {
      user_info: {
        username: "Monotera",
        name: "Nelson Mosquera",
        address: "Cra7 #45-3",
        department: "Bogota",
        city: "Bogota",
        phone: "300-478-8575",
        img: null,
      },
    };
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style></style>
