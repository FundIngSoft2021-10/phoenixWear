<template>
<body>
   <div class="container">
       <router-link class="AddToCart" to="/carrito">Añadir al Carrito </router-link>
      
       </div>
</body>     
</template>


<script>
export default {

}
</script>

<style scoped lang="scss">

body{
    margin: 0;
    padding: 0;
} 
.container{
    text-align: center;
    margin-top: 360px;

}
.AddToCart{
    position: absolute;
      left: 590px;
      top: 800px;
      font-family: $montserratRegular-font;
      font-style: normal; 
    border: solid;
    color: white;
    background: #FF8585;
    padding: 10px 20px;
    font-size: 20px;
    font-family:  $montserratSemiBold-font;
    text-decoration: none;
    cursor: pointer;
    border-radius: 8px;
    margin: 10px;
    transition: 0.8s;

}
.AddToCart::before{
    bottom: 0;
    border-radius: 0 0 50% 50%;
}
.AddToCart:hover::before{
    height: 0%;
}
</style>
