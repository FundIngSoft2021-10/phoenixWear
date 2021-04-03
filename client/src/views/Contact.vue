<template>
  <div>
      <Header/>
      <main>
          <section class="col1" id="formul">
            <form method="POST" action="#">
                <label for="nombre" class="rotulo">NOMBRE</label><br/>
                <input type="text" id="nombre" name="nombre" class="entrada" required><br>
                <label for="apellido" class="rotulo">APELLIDO</label><br/>
                <input type="text" id="apellido" name="apellido" class="entrada" required><br>
                <label for="correo" class="rotulo">E-MAIL</label><br/>
                <input type="email" id="correo" name="correo" class="entrada"><br/>
                <label for="comentarios" class="rotulo">MENSAJE </label><br/>
                <input type="textarea" id="comentarios" name="comentarios" class="entrada" required><br/>
                <input type="submit" name="send" class="send" value="ENVIAR COMENTARIOS">
            </form>
          </section>
          <section class="col2">
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
    text-align: left;
  }
 .col1{
   float: left;
   padding-left: 11%;
   width: 50%;
 }
 .col2{
   float: left;
   padding-right: 11%;
   width: 50%;
 }
 input.entrada{
   border: 1px black solid;
   width: 95%;
   background-color: #F5F5F5;
 }
 #comentarios{
   border: 1px black solid;
   width: 95%;
   height: 100px;
 }
 p {
   padding-top: 30px;
   text-align: center;
 }
 form{
   text-align: left;
 }
 input.send {
   color: white;
   background-color: #ff8585;
   margin-top: 20px;
   text-align: center;
   border-radius: 15px; 
   padding: 6px;
 }

</style>