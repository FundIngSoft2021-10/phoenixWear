<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />

    <div class="card">
      <v-row justify="center">
        <v-card>
          <v-list dense flat>
            <v-subheader>INFORMACIÓN DEL USUARIO</v-subheader>
            <v-row>
              <v-row>
                <v-avatar class="avatar" size="82">
                  <img :src="$auth.user.picture" alt="photo" />
                </v-avatar>
              </v-row>

              <v-col>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>
                        mdi-account-circle
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{
                        $auth.user.nickname
                      }}</v-list-item-title>
                      <v-list-item-subtitle
                        >Nombre de usuario</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>

                <div v-if="$auth.user.sub.includes('auth0')">
                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>
                          mdi-email
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          userInfo.personal_information.mail
                        }}</v-list-item-title>
                        <v-list-item-subtitle>Correo</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>

                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>
                          mdi-phone
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          userInfo.personal_information.phone
                        }}</v-list-item-title>
                        <v-list-item-subtitle
                          >Número de contacto</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>

                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon class="icon">
                          mdi-map-marker
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          userInfo.personal_information.address
                        }}</v-list-item-title>
                        <v-list-item-subtitle>Dirección</v-list-item-subtitle>
                        <v-list-item-title>{{
                          userInfo.personal_information.city
                        }}</v-list-item-title>
                        <v-list-item-subtitle>Ciudad</v-list-item-subtitle>

                        <v-list-item-title>{{
                          userInfo.personal_information.departament
                        }}</v-list-item-title>
                        <v-list-item-subtitle
                          >Departamento</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>

                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>
                          mdi-format-list-numbered
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          userInfo.numProducts
                        }}</v-list-item-title>
                        <v-list-item-subtitle>Productos</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>

                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>
                          mdi-ticket-confirmation
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          userInfo.numProductsPur
                        }}</v-list-item-title>
                        <v-list-item-subtitle
                          >Productos Comprados</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </div>
                <div v-else-if="$auth.user.sub.includes('google-oauth2')">
                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon class="iconG">
                          mdi-clipboard-account
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          $auth.user.given_name
                        }}</v-list-item-title>
                        <v-list-item-subtitle>Nombres</v-list-item-subtitle>
                        <v-list-item-title>{{
                          $auth.user.family_name
                        }}</v-list-item-title>
                        <v-list-item-subtitle>Apellidos</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>

                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>
                          mdi-translate
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          $auth.user.locale
                        }}</v-list-item-title>
                        <v-list-item-subtitle>Idioma</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </div>
              </v-col>
            </v-row>
          </v-list>
        </v-card>

        <v-divider class="vertical-divider" vertical></v-divider>

        <v-card>
          <v-list dense>
            <v-subheader>LINKS DISPONIBLES</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <router-link class="link" :to="item.link">
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </router-link>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-row>
    </div>

    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
    SearchBar,
  },
  data: () => ({
    selectedItem: 1,
    userInfo: "",
    items: [
      {
        text: "Productos",
        icon: "mdi-clock",
        link: "/cuenta/mis-productos",
        subtitle: "Revisa tus ventas",
      },
      {
        text: "Información",
        icon: "mdi-account",
        link: "/user/actualizar-usuario",
        subtitle: "Cambia tus datos",
      },
      {
        text: "Agregar producto",
        icon: "mdi-flag",
        link: "/user/agregar-producto",
        subtitle: "¡Vende otro producto!",
      },
      {
        text: "Compras",
        icon: "mdi-shopping",
        link: "/cuenta/mis-compras",
        subtitle: "Revisa tu historial",
      },
    ],
  }),
  async mounted() {
    const token = await this.$auth.getTokenSilently();

    // Use Axios to make a call to the API
    const { data } = await axios.get(
      `https://n4mbc432.herokuapp.com/users/getMyInfo/${this.$auth.user.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // send the access token through the 'Authorization' header
        },
      }
    );

    this.userInfo = data;
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: black;
}
.card {
  margin-top: 5rem;
}
.avatar {
  margin: auto;
}
.icon {
  margin-top: 3rem;
}
.iconG {
  margin-top: 2rem;
}
.vertical-divider {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
