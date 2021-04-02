<template>
  <div>
      <Header/>
      <main>
          <h2>Atención al Cliente</h2>
          <form>
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Nombres Apellidos" required><br>
              <label for="correo">Correo donde podamos contactarte: </label>
              <input type="email" id="correo" name="correo">
              <br/>
              <label for="comentarios">Cuentanos como podemos ayudarte: </label>
              <input type="textarea" id="comentarios" name="comentarios">
          </form>
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
</style>