<template>
  <v-main class="product-section">
    <v-row justify="center" class="fila">
      <v-col
        cols="4"
        v-for="(product, index) in products"
        :key="(product, index)"
        ><router-link class="link" :to="`producto/${product._id}`">
        <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-card class="mx-auto card" max-width="350">
            <div class="badge">HOT</div>
            <v-img v-bind="attrs" v-on="on"
              :src="product.information.photo[0]"
              height="400px"
              width="750px"
              :lazy-src="product.information.photo[0]"
            ></v-img>
            <v-card-title v-bind="attrs" v-on="on" class="nombre">
              {{ product.information.name }}
            </v-card-title>
            <v-card-subtitle v-bind="attrs" v-on="on" class="sub">
              {{ `Precio: ${formatPrice(product.information.price)}` }}
            </v-card-subtitle>
            <v-card-text v-bind="attrs" v-on="on" class="texto">
              {{ `Talla: ${product.garment.size}` }}<br />
              {{ `Descripcion: ${product.information.short_description}`
              }}<br />
            </v-card-text>
            <router-link class="link" to="/carrito"
              ><v-btn class="btn" color="phoenix" dark
                >Agregar al carrito</v-btn
              >
            </router-link>
            <v-card-actions> </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ product.information.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          </template>
        <span>Dirígete a este artículo</span>
        </v-tooltip>

        </router-link>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    formatPrice(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;
      const parts = x.toString().split(".");
      parts[0] = parts[0].replace(/(\d+)(?=\d{3})/g, "$ $1,");
      return parts.join(".");
    },
  },
};
</script>

<style lang="scss" scoped>
.product-section {
  text-align: center;
}
.card {
  position: relative;
}
.badge {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: red;
  color: #fff;
  padding: 3px 10px;
  font-family: $montserratSemiBold-font;
}
.nombre {
  height: 100px;
  font-family: $montserratBold-font;
  text-align: center;
}
a.link {
  text-decoration: none;
  color: #2c363e;
}
.sub {
  text-align: left;
  font-family: $montserratSemiBold-font;
}
.texto {
  text-align: left;
  height: 80px;
}
.btn {
  font-family: $montserratSemiBold-font;
  z-index: 40;
}
</style>
