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
          v-model="user_info.email"
          label="Email"
          required
          :rules="email_rule"
        />
        <v-text-field
          v-model="user_info.password"
          :append-icon="showEye ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[pass_rule.required, pass_rule.min]"
          :type="showEye ? 'text' : 'password'"
          name="input-10-1"
          label="Contraseña"
          hint="At least 8 characters"
          counter
          @click:append="showEye = !showEye"
        ></v-text-field>
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

      <v-tooltip bottom>
       <template v-slot:activator="{ on, attrs }">
        <v-btn
          :disabled="!valid"
          method="POST"
          @click="submit"
          large
          rounded
          dark
          v-bind="attrs"
          v-on="on"
          color="phoenix"
          >Enviar!</v-btn>
        </template>
        <span>Actualiza tu información</span>
      </v-tooltip>

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
      showEye: false,
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
      email_rule: [
        (value) => !!value || "E-mail is required",
        (value) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || "E-mail must be valid",
      ],
      pass_rule: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
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
