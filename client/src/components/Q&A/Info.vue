<template>
  <v-row justify="center">
    <v-col cols="6">
      <h1>PREGUNTAS FRECUENTES</h1>
      <p>
        ¿Tienes una pregunta? Estamos para ayudarte.<br />
        si no encuentras la respuesta<br />
        contacta nuestra Pagina de Contacto.<br />
        <router-link class="link" to="/contacto"
          >Pagina de Contacto.</router-link
        >
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1,
p {
  text-align: center;
  font-family: $montserratRegular-font;
}
h1 {
  font-family: $montserratSemiBold-font;
}
.link {
  color: $phoenix-color;
}
</style>
