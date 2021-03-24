<template>
<v-app  > 

 <header>
   <div>Mi cuenta</div>
   <h1>Phoenix Wear</h1>
   <div>Mi carrito</div>
 </header> 
  
  <hr noshade/>  
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
</v-app>
 
</template>

<script>
export default {}
</script>


<style scoped lang="scss">
 
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

header div{
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 30px;
}

</style>