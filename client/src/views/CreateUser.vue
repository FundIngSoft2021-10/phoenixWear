<template>
  <v-main>
    <Header />
    <UserForm :user_info="user_info" :isNewUser="true" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header";
import UserForm from "../components/forms/CreateUser";
import Footer from "../components/general/Footer";
export default {
  components: {
    Header,
    UserForm,
    Footer,
  },
  data() {
    return {
      user_info: {
        username: "",
        name: "",
        address: "",
        department: "",
        phone: "",
        city: "",
        email: "",
        password: "",
        img: null,
      },
    };
  },
};
</script>

<style></style>
