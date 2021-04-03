<template>
  <div>
    <Header />
    <UserForm :user_info="user_info" :isNewUser="true" />
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
