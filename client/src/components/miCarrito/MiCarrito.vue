<template>
  <v-main class="main">
    <v-card class="resumen">
      <div class="titulo">
        <p class="remi">Resumen de mi carrito</p>
        <div class="descrip">
          <p>Artículo</p>
          <p>Precio</p>
        </div>
        <v-divider class="divider"></v-divider>
      </div>

      <div class="contenido">
        <!--Aquí el for para el script-->
        <div class="prenda">Camisa azul</div>
        <div class="precio">$140,000</div>
      </div>

      <div class="fin">
        <div class="txtTotal">TOTAL</div>
        <div class="numTotal">$140,000</div>
        <!--Igual depende del script la suma-->
      </div>

      <v-btn class="boton" rounded color="#ff8585" dark>
        Continuar con envío
      </v-btn>
    </v-card>

    <v-card elevation="0" max-width="710" class="productos">
      <v-virtual-scroll :items="items" height="470" item-height="200">
        <template v-slot:default="{ item }">
          <v-list-item class="item">
            <img src="../../assets/imgs/logo.png" height="100" width="100" />

            <div class="prendaInfo">
              <p>{{ item.name }}</p>
              <p>$140,000 IVA incluido</p>
            </div>

            <div class="icons">
              <i class="far fa-heart"></i>
              <i class="fas fa-trash"></i>
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
  computed: {
    items() {
      const proLength = this.products.length;

      return Array.from({ length: proLength }, (k, v) => {
        return {
          _id: this.products[v]._id,
          name: this.products[v].information.name,
          price: this.products.price,
        };
      });
    },
  },
};
</script>

<style scoped lang="scss">
.resumen {
  width: 280px;
  float: right;

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

  .icons {
    position: absolute;
    right: 20px;
  }

  i {
    margin-left: 10px;
  }

  .item {
    color: white;
  }

  .prendaInfo {
    float: right;
    margin-left: 20px;
  }
}
</style>
