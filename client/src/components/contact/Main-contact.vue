<template>
  <main>
    <section class="col1" id="formul">
      <form method="POST" action="https://formspree.io/f/mbjqjand">
        <label for="nombre" class="rotulo">NOMBRE</label><br />
        <input
          type="text"
          id="nombre"
          name="nombre"
          class="entrada"
          required
        /><br />
        <label for="apellido" class="rotulo">APELLIDO</label><br />
        <input
          type="text"
          id="apellido"
          name="apellido"
          class="entrada"
          required
        /><br />
        <label for="correo" class="rotulo">E-MAIL</label><br />
        <input type="email" id="correo" name="correo" class="entrada" /><br />
        <label for="comentarios" class="rotulo">MENSAJE </label><br />
        <input
          type="textarea"
          id="comentarios"
          name="comentarios"
          class="entrada"
          required
        /><br />
        <v-btn type="submit" name="send" class="send" color="phoenix" dark>
          Enviar comentarios
        </v-btn>
      </form>
    </section>
    <section class="col2">
      <p>
        <b>¿Tienes alguna pregunta? Revisa nuestra sección de </b>
        <router-link class="link" to="/preguntas"
          >preguntas frecuentes.</router-link
        >
      </p>
      <p>
        Tambien puedes escribirnos a: phoenixwear.co@gmail.com
      </p>
      <p>
        Contáctanos a nuestro WhatsApp Business +(57) 574-1254
      </p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  font-family: $montserratSemiBold-font;
  text-align: left;
}
main {
  margin-top: 5rem;
  display: flex;
}
.col1 {
  width: 50%;
}
.col2 {
  width: 50%;
}
input {
  border-radius: 5px;
}
input.entrada {
  border: 1px black solid;
  width: 95%;
  background-color: #f5f5f5;
}
#comentarios {
  border: 1px black solid;
  width: 95%;
  height: 100px;
}
p {
  padding-top: 30px;
  text-align: center;
}
form {
  text-align: left;
}
.send {
  margin-top: 20px;
  text-align: center;
  border-radius: 10px;
  padding: 6px;
}
</style>
