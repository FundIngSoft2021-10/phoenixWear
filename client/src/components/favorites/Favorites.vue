<template>
  <v-main class="main">
    <v-card max-width="700" class="productos">
      <v-virtual-scroll :items="items" height="470" item-height="200">

        <template v-slot:default="{ item }">

          <v-list-item class="item">
             <img :src="item.img" height="200" width="200" />

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
              
                <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                <i @click="deleteProduct(item)" class="fas fa-trash ico"
                  v-bind="attrs"
                  v-on="on"
                ></i>
                </template>
              <span>Elimina de MiCarrito</span>
              </v-tooltip>

            
            </div>
            
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card>
  </v-main>
</template>

<script>
 export default {
    props: {
    products: Array,
  },
    data() {
    return {
      total: 0,
      fav_active: [],
    };
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
  },
    computed: {
      items() {
      const proLength = this.products.length;

      return Array.from({ length: proLength }, (k, v) => {
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
 };
</script>

<style scoped lang="scss">


.productos {
  font-family: $montserratSemiBold-font;
  margin: auto;
   
  img{
    padding-bottom: 10px;
    margin-top:0px;
  }

  .icons {
    position: absolute;
    right: 20px;
  }

  i {
    margin-left: 10px;
  }

  .item {
    padding-bottom: 20px;
    color: white;
  }
  .prendaInfo {
    float: right;
    margin-left: 20px;
  }

  .link {
    text-decoration: none;
    color: black;
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