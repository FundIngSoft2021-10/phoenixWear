<template>
  <v-main>
    <Header />
    <UserForm :user_info="user_info" :isNewUser="false" />
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
};
</script>

<style></style>
