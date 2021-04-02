<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row justify="center">
      <v-col cols="6">
        <v-text-field
          v-model="user_info.username"
          :counter="20"
          label="Nombre de Usuario"
          required
          :rules="text_rule"
        />
        <v-text-field
          v-model="user_info.name"
          :counter="20"
          label="Nombre"
          required
          :rules="text_rule"
        />
        <v-text-field
          v-model="user_info.phone"
          label="Numero de telefono (xxx-xxx-xxxx)"
          required
          :rules="phone_rule"
        />
        <v-text-field
          v-model="user_info.address"
          label="Direccion"
          required
          :counter="20"
          :rules="text_rule"
        />
        <v-text-field
          v-model="user_info.department"
          label="Departamento"
          required
          :counter="20"
          :rules="text_rule"
        />
        <v-text-field
          v-model="user_info.city"
          label="Ciudad"
          required
          :counter="20"
          :rules="text_rule"
        />
        <v-file-input
          v-model="user_info.img"
          accept="image/png"
          prepend-icon="mdi-camera"
          label="Subir foto de perfil .png"
        />
        <v-btn
          :disabled="!valid"
          method="POST"
          @click="submit"
          large
          rounded
          dark
          color="phoenix"
          >Crear producto!</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  props: {
    user_info: Object,
    isNewUser: Boolean,
  },
  data() {
    return {
      valid: true,
      text_rule: [
        (value) => !!value || "El campo es obligatorio",
        (value) =>
          value.length < 20 || "El campo debe ser menor a 20 caracteres",
      ],
      phone_rule: [
        (value) => !!value || "El campo es obligatorio",
        (value) =>
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value) ||
          "El numero de telefono es invalido",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if (this.isNewProduct) {
          this.postMethod();
        } else {
          this.updateMethod();
        }
      }
    },
    postMethod() {
      console.log("Post");
    },
    updateMethod() {
      console.log("Update");
    },
  },
};
</script>

<style></style>
