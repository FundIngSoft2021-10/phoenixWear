<template>
  <div>
    <header>
      <div class="MC">
        <router-link class="MC" to="/cuenta">Mi cuenta </router-link>
        <i class="fas fa-user-alt"></i> <i class="fas fa-bell"></i>
      </div>
      <h1>Phoenix Wear</h1>
      <div class="Carrito">
        <router-link class="Carrito" to="/carrito">Mi carrito </router-link
        ><i class="fas fa-shopping-cart"></i><i class="fas fa-search"></i>
      </div>
    </header>

    <hr noshade />
    <nav>
      <ul>
        <li>
          <router-link class="link" to="/">Trending</router-link>
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
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
h1 {
  font-family: $pattaya-font;
  font-size: 45px;
  color: #2c363f;
  margin-top: 5mm;
  justify-content: center;
  display: flex;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  font-family: $montserratSemiBold-font;
  .router-link-exact-active {
    color: #ff8585;
  }
}

ul {
  display: flex;
  justify-content: space-around;
  width: 80%;
}

ul li {
  list-style: none;
  display: inline-block;
  position: relative;
  padding-inline: 70px;
}

ul li :hover {
  color: #ff8585;
}

.link {
  color: #2c363e;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

hr {
  color: #ffbbbb;
  margin: 0 11.6% 0 11.6%;
}

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  font-family: $montserratSemiBold-font;
  .router-link-exact-active {
    color: #ff8585;
  }
}

.MC {
  margin-left: 3%;
  width: 9%;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 30px;
  text-decoration: none;
  color: #2c363e;
}

.MC :hover {
  color: #ff8585;
}

.Carrito {
  margin-right: 3%;
  width: 10%;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 30px;
  color: #2c363e;
  text-decoration: none;
}

.Carrito :hover {
  color: #ff8585;
}

i {
  margin-left: 5%;
  color: #ff8585;
}

.fa-shopping-cart {
  margin-left: 0;
  margin-right: 5%;
}
.fa-search {
  padding: 6px;
  border-left: 1px solid #2c363f;
  color: #2c363f;
}
</style>
