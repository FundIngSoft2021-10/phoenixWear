<template>
<v-app  > 

 <header>
   <div class="MC">  <router-link class="MC" to="/cuenta">Mi cuenta </router-link> <i class="fas fa-user-alt"></i> <i class="fas fa-bell"></i></div>
   <h1>Phoenix Wear</h1>
   <div class="Carrito"> <router-link class="Carrito" to="/carrito">Mi carrito </router-link><i class="fas fa-shopping-cart"></i><i class="fas fa-search"></i></div>
 </header> 
  
 <hr noshade/>  
 <nav>
    <ul >
      <li>
        <router-link class="link" to="/"  @click="activate(1)" :class="{ active: active_el == 1 }" >Trending</router-link>
      </li>
      <li>
        <router-link class="link" to="/ropa" @click="activate(2)" :class="{ active: active_el == 2 }">Ropa</router-link>
      </li>
      <li>
        <router-link class="link" to="/preguntas" @click="activate(3)" :class="{ active: active_el == 3 }">Q&A</router-link>
      </li>
      <li>
        <router-link class="link" to="/nosotros" @click="activate(4)" :class="{ active: active_el == 4}">Nosotros</router-link>
      </li> 
      <li>
        <router-link class="link" to="/contacto" @click="activate(5)" :class="{ active: active_el == 5 }">Contacto</router-link>
      </li>
    </ul> 
    </nav>
</v-app>
 
</template>

<script>
export default {

  data() {
    return{
    active_el : 1,
    }
  },
  methods: {
    activate(el) {
      this.active_el = el;
    },
  },
};

</script>


<style scoped lang="scss">

.active{
   color: #FF8585  !important;
}

h1{
     font-family: $pattaya-font;
     font-size: 45px;
     color: #2C363F;
     margin-top: 5mm;
     justify-content: center;
     display: flex;    
  }

nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    font-family: $montserratRegular-font;
}

ul{
    display:flex;
    justify-content: space-around;
    width: 80%;
    
}

ul li{
    list-style: none;
    display: inline-block;
    position: relative;
    padding-inline: 70px;
} 


ul li :hover{
    color: #FF8585;
}

.link{
    color: #2C363E;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;   
    
} 

hr{
  color: #FFBBBB;
  margin: 0 11.6% 0 11.6%;
}

header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    font-family: $montserratRegular-font;

}

.MC{
  margin-left: 3%;
  width: 9%;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 30px;
  text-decoration: none;
  color: #2C363E;
}

.MC :hover{
color:#FF8585;
}

.Carrito{
  margin-right: 3%;
  width: 10%;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 30px;
  color: #2C363E;
  text-decoration: none;
}

.Carrito :hover{
  color:#FF8585;
}

i{

  margin-left: 5%;
  color: #FF8585;
}

.fa-shopping-cart{
  margin-left: 0;
  margin-right: 5%;
}
.fa-search{
  padding: 6px;
  border-left: 1px solid #2C363F;
  color: #2C363F;
}

</style>