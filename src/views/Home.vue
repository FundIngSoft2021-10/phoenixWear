<template>
  <div id="home-section">
    <h1>In construction</h1>
    <img src="../assets/logo.png" alt="Phoenix-logo" height="200" width="200" />
    <ul>
      <li>
        <router-link class="link" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="link" to="/ropa">Ropa</router-link>
      </li>
      <li>
        <router-link class="link" to="/preguntas">Q&A</router-link>
      </li>
      <li>
        <router-link class="link" to="/nosotros">Nosotros</router-link>
      </li>
      <li>
        <router-link class="link" to="/contacto">Contacto</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
 
.v-application ul {
  padding: 0;
}
h1 {
  font-family: $pattaya-font;
  margin: 5rem;
}
ul {
  display: flex;
  flex-direction: row;
  color: white;
  margin: 5rem;
  padding: 0;
  flex-flow: row wrap;
  li {
    padding: 4rem;
  }
}
#home-section {
  width: 100vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
