<template>
  <div class="err">
    <h1>404</h1>
    <h2>OOPS! no se encontró nada...</h2>
    <p>
      Es posible que la página que está buscando se haya eliminado, haya
      cambiado de nombre o no esté disponible temporalmente. Regresar a la
      <router-link class="link" to="/">página principal</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.err {
  display: flex;
  flex-direction: column;
  width: 100vh;
  margin: auto;
  text-align: center;
}
h1 {
  font-family: $nunitoBold-font;
  font-size: 15rem;
  color: #eb4335;
}
h2 {
  font-family: $montserratSemiBold-font;
  font-size: 3rem;
}
p {
  font-family: $montserratSemiBold-font;
}
.link {
  color: $phoenix-color;
}
</style>
