<template>
  <v-main class="main">
    <div class="main2">
    <v-card class="resumen">
      <div class="titulo">
        <p class="remi">Resumen de mi carrito</p>
        <div class="descrip">
          <p>Artículo</p>
          <p>Precio</p>
        </div>
        <v-divider class="divider"></v-divider>
      </div>

      <div
        v-for="(product, index) in products"
        :key="(product, index)"
        class="contenido"
      >
        <!--Aquí el for para el script-->
        <div class="prenda">{{ product.information.name }}</div>
        <div class="precio">{{ formatPrice(product.information.price) }}</div>
      </div>

      <div class="fin">
        <div class="txtTotal">TOTAL</div>
        <div class="numTotal">{{ formatPrice(total) }}</div>
      </div>

      <router-link to="/confirmacion">
        <v-btn class="boton" rounded color="#ff8585" dark>
          Continuar con envío
        </v-btn>
      </router-link>
    </v-card>

    <v-card max-width="710" class="productos">
      <v-virtual-scroll :items="items" height="470" item-height="200">
        <template v-slot:default="{ item }">
          <v-list-item class="item">
            <img :src="item.img" height="100" width="100" />
            <div class="prendaInfo">
              <router-link :to="`producto/${item._id}`" class="link">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <p v-bind="attrs" v-on="on">{{ item.name }}</p>
                </template>
              <span>Dirígite a este artículo</span>
              </v-tooltip>
              </router-link>
              <p>{{ formatPrice(item.price) }} IVA incluido</p>
            </div>
            <div class="icons">
              
              <v-tooltip bottom v-if="fav_active[item.index]">
              <template v-slot:activator="{ on, attrs }">
                <i
                @click="addFav(item.index)"
                @click.stop="dialog = true"
                class="fas fa-heart ico"
                v-bind="attrs"
                v-on="on"
                ></i>
                 </template>
              <span>Elimina de favoritos</span>
              </v-tooltip>

              <v-tooltip bottom v-else>
                <template v-slot:activator="{ on, attrs }">
                <i
                @click="addFav(item.index)"
                @click.stop="dialog = true"
                class="far fa-heart ico"
                v-bind="attrs"
                v-on="on"
                ></i>
                </template>
              <span>Agrega a favoritos</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                <i @click="deleteProduct(item)" class="fas fa-trash ico"
                  v-bind="attrs"
                  v-on="on"
                ></i>
                </template>
              <span>Elimina de MiCarrito</span>
              </v-tooltip>
              


              <v-dialog v-model="dialog" max-width="290">
                <v-card>
                  <v-card-title class="headline">
                    Se Modificó la lista de favoritos
                  </v-card-title>

                  <v-card-text>
                    La lista de favoritos se encuentra en el <i class="fas fa-heart ico"></i> del header.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                      Listo!
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card>
    </div>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: "",
      fav_active: [],
      total: 0,

      dialog: false,
    };
  },
  async mounted() {
    const token = await this.$auth.getTokenSilently();

    // Use Axios to make a call to the API
    const { data } = await axios.get(
      `https://n4mbc432.herokuapp.com/users/getMyCart/${this.$auth.user.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // send the access token through the 'Authorization' header
        },
      }
    );
    
    this.products = data;
    this.lengthP = this.products.length;
    console.log(12);
    console.log(this.products.length);

    this.total = this.products.reduce(function(prev, cur) {
      return prev + cur.information.price;
    }, 0);
    this.fav_active = new Array(this.products.length).fill(false);
  
  },
  methods: {
    formatPrice(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;
      const parts = x.toString().split(".");
      parts[0] = parts[0].replace(/(\d+)(?=\d{3})/g, "$ $1,");
      return parts.join(".");
    },
    deleteProduct(product) {
      this.total = this.total - product.price;
      this.products = this.products.filter(function(value) {
        return value._id != product._id;
      });
    },
    addFav(index) {
      this.fav_active[index] = !this.fav_active[index];
    },
  },  
  computed: {
    items() {
      //proLength = this.products.length;
      return Array.from({ length: this.products.length }, (k, v) => {
        return {
          _id: this.products[v]._id,
          name: this.products[v].information.name,
          price: this.products[v].information.price,
          img: this.products[v].information.img,
          index: v,
        };
      });
    },
  },
}
</script>

<style scoped lang="scss">
.main2{
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-evenly;
}
.resumen {
  width: 280px;
  height: 470px;
  float: right;
  padding-top: 80px;

  .titulo {
    text-transform: uppercase;
    font-family: $montserratSemiBold-font;

    .remi {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
    }

    .descrip {
      display: flex;
      justify-content: space-around;
      font-family: $montserratSemiBold-font;
      font-size: 14px;
    }

    .divider {
      background-color: #ff8585;
      margin: 0px 25px 0 25px;
    }
  }

  .contenido {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    font-family: $montserratRegular-font;
    margin: 7px 0px 7px 2px;
  }

  .fin {
    display: flex;
    justify-content: space-between;
    font-family: $montserratSemiBold-font;
    margin: 50px 27px 7px 35px;
  }

  .boton {
    margin: 7px 27px 10px 35px;
  }
}

.productos {
  font-family: $montserratSemiBold-font;
  flex: 1;

  .icons {
    position: absolute;
    right: 20px;
  }

  i {
    margin-left: 10px;
  }

  .item {
    margin-top: 20px;
    color: white;
  }
  .prendaInfo {
    float: right;
    margin-left: 20px;
  }
  .link {
    text-decoration: none;
    color: black;
    margin: 0;
    &:hover {
      color: $phoenix-color;
    }
  }
  .ico {
    color: $phoenix-color;
    cursor: pointer;
  }
}
</style>
