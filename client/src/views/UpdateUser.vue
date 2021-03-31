<template>
  <div>
    <Header />
    <UserForm :user_info="user_info" :isNewUser="false" />
  </div>
</template>

<script>
import Header from "../components/general/Header";
import UserForm from "../components/forms/CreateUser";
export default {
  components: {
    Header,
    UserForm,
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
