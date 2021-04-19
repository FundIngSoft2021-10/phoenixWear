<template>
  <v-row justify="center">
    <v-col cols="6">
      <h2>PREGUNTAS FRECUENTES</h2>
      <p>
        ¿Tienes una pregunta? Estamos para ayudarte. si no encuentras la
        respuesta contacta nuestra Pagina de Contacto.<br />
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
h2,
p {
  text-align: center;
  font-family: $montserratRegular-font;
}
h2 {
  font-family: $montserratSemiBold-font;
}
p {
  padding-top: 30px;
}
.link {
  color: $phoenix-color;
}
</style>
