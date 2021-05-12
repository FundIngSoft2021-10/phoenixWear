<template>
  <div class="margin">
    <header>
      <div class="MC">
        <router-link class="MC" to="/cuenta">Mi cuenta </router-link>
        <i class="fas fa-user-alt"></i> <i class="fas fa-bell"></i>
        <div v-if="!$auth.loading">
          <!-- show login when not authenticated -->
          <!-- button v-if="!$auth.isAuthenticated" @click="login">Log in</button -->
          <!-- show logout when authenticated -->
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
          <button class="auth" v-bind="attrs" v-on="on" v-if="$auth.isAuthenticated" @click="logout">Log out</button>
          </template>
          <span>Cerrar sesión</span>
        </v-tooltip>
        </div>
      </div>
      <h1>Phoenix Wear</h1>
      <div class="Carrito">
        <router-link class="Carrito" to="/carrito">Mi carrito </router-link
        ><i class="fas fa-shopping-cart"></i>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
        <i v-bind="attrs" v-on="on" @click="changeMode()" class="fas fa-search"></i>
        </template>
      <span>Busca un artículo</span>
      </v-tooltip>
      </div>
    </header>

    <hr noshade />
    <nav>
      <ul>
        <li>
          <router-link class="link" to="/">Trending</router-link>
        </li>
        <li>
          <v-menu bottom :offset-y="true" open-on-hover rounded="rounded">
            <template v-slot:activator="{ on, attrs }">
              <router-link class="link" to="/ropa">
                <p v-bind="attrs" v-on="on">
                  ROPA
                </p>
              </router-link>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" link>
                <v-list-item-title>
                  <a class="link" :href="`/ropa/${item}`">{{ item }}</a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
export default {
  data() {
    return {
      items: [
        "Vestidos",
        "Pantalones",
        "Chaquetas",
        "Zapatos",
        "Blusas",
        "Camisas",
        "Accesorios",
        "Sacos",
      ],
    };
  },
  methods: {
    changeMode() {
      this.$store.commit("change_searchBar_state");
      this.is_searchBar_open = this.$store.getters.get_is_searchBar_open;
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
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
.link {
  text-decoration: none;
  color: black;
  font-family: $montserratSemiBold-font;
  &:hover {
    color: #ff8585;
  }
}

.margin {
  margin-top: 1rem;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  font-family: $montserratSemiBold-font;
  .router-link-exact-active {
    color: #ff8585 !important;
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
  color: #ff8585 !important;
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

.auth {
  margin-left: 3%;
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
