<template>
<body>
    <ul class="list">

        <li class="list_item">COMPRADO</li>
        <li class="list_item">ENVIADO</li>
        <li class="list_item">EN CAMINO</li>
        <li class="list_item">ENTREGADO</li>
    </ul>    
</body>    



  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
     .list {
       
        position: absolute;
        left: 602px;
        top: 560px;
        padding: 0;
        font-size: 12px;
        font-family: $montserratRegular-font;
        text-align: left;

         }
    .list_item{
        display: inline-block;
        padding: 10px;
        color: #9B9797;
        text-decoration: none;
 
    }
    .list_item:not(:last-of-type)::after{
        content: '\2192';
        font-size: 22px;
        padding: 5px;
        margin: 0 5px;
        color: #9B9797;
    }



</style>
