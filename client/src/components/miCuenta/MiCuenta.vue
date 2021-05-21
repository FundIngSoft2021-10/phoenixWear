<template>
  <div class="card">
    <v-row justify="center">
      <v-card>
        <v-list dense flat disabled>
          <v-subheader>INFORMACIÓN DEL USUARIO</v-subheader>
          <v-row>
            <v-row>
              <v-avatar class="avatar" size="82">
                <img :src="$auth.user.picture" alt="photo" />
              </v-avatar>
            </v-row>

            <v-col>
              <div v-if="$auth.user.sub.includes('auth0')" class="infoUser">
                <v-list-item-group>
                  <v-list-item v-for="(itema, i) in itemsAuth" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="itema.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="itema.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-text="itema.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </div>
              <div
                v-else-if="$auth.user.sub.includes('google-oauth2')"
                class="infoUser"
              >
                <v-list-item-group>
                  <v-list-item v-for="(itemg, i) in itemsGoogle" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="itemg.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="itemg.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-text="itemg.subtitle"
                      ></v-list-item-subtitle>
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
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
            class="infoLinks"
          >
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
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    selectedItem: 1,
    userInfo: "",
    items: [
      {
        text: "Mis productos",
        icon: "mdi-clock",
        link: "/cuenta/mis-productos",
      },
      {
        text: "Actualizar información",
        icon: "mdi-account",
        link: "/user/actualizar-usuario",
      },
      {
        text: "Agregar producto",
        icon: "mdi-flag",
        link: "/cuenta/agregar-producto",
      },
      {
        text: "Mis compras",
        icon: "mdi-clock",
        link: "/cuenta/mis-compras",
      },
      {
        text: "Agregar Phoenix Credits",
        icon: "mdi-cash-100",
        link: "/credits",
      },
      {
        text: "Mis favoritos",
        icon: "mdi-heart",
        link: "/favorites",
      },
    ],
    itemsAuth: [
      {
        icon: "mdi-account-circle",
        title: "",
        subtitle: "Nombre de usuario",
      },
      {
        icon: "mdi-email",
        title: "",
        subtitle: "Correo",
      },
      {
        icon: "mdi-phone",
        title: "",
        subtitle: "Número de contacto",
      },
      {
        icon: "mdi-map-marker",
        title: "",
        subtitle: "Dirección",
      },
      {
        icon: "",
        title: "",
        subtitle: "Ciudad",
      },
      {
        icon: "",
        title: "",
        subtitle: "Departamento",
      },
      {
        icon: "mdi-format-list-numbered",
        title: "",
        subtitle: "Mis productos",
      },
      {
        icon: "mdi-ticket-confirmation",
        title: "",
        subtitle: "Productos Comprados",
      },
    ],
    itemsGoogle: [
      {
        icon: "mdi-account-circle",
        title: "",
        subtitle: "Nombre de usuario",
      },
      {
        icon: "mdi-clipboard-account",
        title: "",
        subtitle: "Nombres",
      },
      {
        icon: "",
        title: "",
        subtitle: "Apellidos",
      },
      {
        icon: "mdi-translate",
        title: "",
        subtitle: "Idioma",
      },
    ],
  }),

  async mounted() {
    if (this.$auth.user.sub.includes("auth0")) {
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

      this.itemsAuth[0].title = this.$auth.user.nickname;
      this.itemsAuth[1].title = this.userInfo.personal_information.mail;
      this.itemsAuth[2].title = this.userInfo.personal_information.phone;
      this.itemsAuth[3].title = this.userInfo.personal_information.address;
      this.itemsAuth[4].title = this.userInfo.personal_information.city;
      this.itemsAuth[5].title = this.userInfo.personal_information.departament;
      this.itemsAuth[6].title = this.userInfo.numProducts;
      this.itemsAuth[7].title = this.userInfo.numProductsPur;
    } else {
      this.itemsGoogle[0].title = this.$auth.user.nickname;
      this.itemsGoogle[1].title = this.$auth.user.given_name;
      this.itemsGoogle[2].title = this.$auth.user.family_name;
      this.itemsGoogle[3].title = this.$auth.user.locale;
    }
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
.infoUser {
  margin-right: 4rem;
}
.avatar {
  margin: auto;
  margin-left: 8rem;
  margin-right: 2rem;
}
.infoLinks {
  margin-left: 1rem;
  margin-right: 1rem;
}
.vertical-divider {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
