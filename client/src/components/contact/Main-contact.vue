<template>
  <div>
    <div class="main">
      <v-row justify="center" class="Nombre">
        <v-col cols="9">
          <h2>PREGUNTAS ESPECIFICAS</h2>
          <p>
            <b>¿Tienes alguna pregunta? Revisa nuestra sección de </b>
            <router-link class="link" to="/preguntas"
              >preguntas frecuentes.</router-link
            ><br />
            Tambien puedes escribirnos a: phoenixwear.co@gmail.com<br />
            Contáctanos a nuestro WhatsApp Business +(57) 574-1254<br />
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="9">
          <form id="formId" method="POST" action="https://formspree.io/f/mbjqjand">
            <v-text-field
              name="Nombre"
              id="nameId"
              :counter="20"
              label="Nombre"
              required
              :rules="text_rule"
            />
            <v-text-field
              name="Apellido"
              :counter="20"
              label="Apellido"
              required
              :rules="text_rule"
            />
            <v-text-field
              name = "Email"
              :counter="100"
              label="Email"
              v-model = "email"
              id="emailId"
              required
              :rules="email_rule"
            />
            <v-textarea
              name = "Description"
              outlined
              no-resize
              rows="6"
              :counter="500"
              label="Description"
              :rules="description_rule"
              class="txt-area"
              required
            /><v-btn
              type="submit"
              class="send"
              color="phoenix"
              dark
              large
              rounded
            >
              Enviar comentarios
            </v-btn>
          </form>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text_rule: [
        (value) => !!value || "El campo es obligatorio",
        (v) =>
          (v && v.length <= 20) ||
          "El campo debe de tener menos de 20 caracteres",
      ],
      description_rule: [
        (value) => !!value || "El campo es obligatorio",
        (v) =>
          (v && v.length <= 500) ||
          "El campo debe de tener menos de 500 caracteres",
      ],
      email_rule: [
         (value) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || "E-mail must be valid",
        (value) => !!value || "E-mail is required",
        (v) =>
          (v && v.length <= 100) ||
          "El campo debe de tener menos de 100 caracteres",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
* {
  font-family: $montserratSemiBold-font;
}
h2 {
  text-align: center;
}

.main {
  margin-top: 5rem;
  .link {
    color: $phoenix-color;
  }
  .txt-area {
    margin: 1rem 0;
  }
}

p {
  padding-top: 30px;
  text-align: center;
  font-family: $montserratRegular-font;
}
</style>
