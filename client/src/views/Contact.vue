<template>
  <div>
      <Header/>
      <main>
          <section>
            <form class="col">
                <label for="nombre">NOMBRE</label><br/>
                <input type="text" id="nombre" name="nombre" class="entrada" required><br>
                <label for="apellido">APELLIDO</label><br/>
                <input type="text" id="apellido" name="apellido" class="entrada" required><br>
                <label for="correo">E-MAIL</label><br/>
                <input type="email" id="correo" name="correo" class="entrada"><br/>
                <label for="comentarios">MENSAJE </label><br/>
                <input type="textarea" id="comentarios" name="comentarios" class="entrada" required><br/>
            </form>
          </section>
          <section class="col">
              <p>
                <b>¿Tienes alguna pregunta? Revisa nuestra sección de </b>
                <router-link class="link" to="/preguntas">preguntas frecuentes.</router-link>
              </p>
              <p>
                Tambien puedes escribirnos a: pwsupport@phoenixwear.com
              </p>
              <p>
                Contáctanos a nuestro WhatsApp Business +(57)574125
              </p>
          </section>
      </main>
  </div>
</template>

<script>
import Header from "../components/general/Header.vue";

export default {
 components: {
   Header,
 }
 ,
 data(){
   return {

   }
 }
};

</script>
<style scoped lang="scss">
  *{
    box-sizing: border-box;
    font-family: $montserratRegular-font;
  }
 .col{
   float: left;
   width: 50%;
 }
 input.entrada{
   border: 1px black solid;
   width: 95%;
 }
 #comentarios{
   border: 1px black solid;
   width: 95%;
   height: 100px;
 }
 p {
   padding-top: 45px;
   text-align: center;
 }
</style>