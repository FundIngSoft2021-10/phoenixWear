<template>
<body>
   <h3 > Articulo </h3>
   <h4 class="Price"> $precio IVA incluido </h4>
   <hr class="Line1"><br>
   <h4 class="Info" > Información </h4>
   <table>
    <tr>
    <td class="TablaInfo">TALLA: </td>
    <td>M</td>
    </tr>
    <tr>
    <td class="TablaInfo">COLOR: </td>
    <td>Negro</td>
    </tr>
    <tr>
    <td class="TablaInfo">CANTIDAD: </td>
    <td>1</td>
    </tr>
   </table>
   <br>
   <hr class="Line2"><br>

</body>

  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    td{
        text-align: center;
    }
    h3 {
         
      position: absolute;
      width: 460px;
      height: 30px;
      left: 610px;
      top: 215px;
      font-family: $montserratSemiBold-font;
      font-style: normal; 
      font-weight: 600;
      font-size: 18px;
      line-height: 37px;

      text-align: left;
         
    }
    .Price {
       position: absolute;
      width: 460px;
      height: 30px;
      left: 610px;
      top: 245px;
      font-family: $montserratSemiBold-font;
      font-style: normal; 
      font-weight: 600;
      font-size: 15px;
      line-height: 50px;

      text-align: left;
    }
    
    .Line1 {
       
        position: absolute;
        width: 697px;
        height: 0px;
        left: 610px;
        top: 295px;
        border: 1px solid rgba(255, 133, 133, 1);    
        background-color: #FF8585;
    }
    .Info{
    position: absolute;
      width: 460px;
      height: 30px;
      left: 610px;
      top: 300px;
      font-family: $montserratSemiBold-font;
      font-style: normal; 
      font-weight: 600;
      font-size: 17px;
      line-height: 50px;

      text-align: left;
    }

    table{
      position: absolute;
      left: 610px;
      top: 360px;
      font-family: $montserratRegular-font;
      font-style: normal; 
      font-weight: 600;
      font-size: 13px;
      line-height: 50px;
      
    }
    td{
        text-align: left;
        
    }
   
    .Line2{
            position: absolute;
            width: 697px;
            height: 0px;
            left: 610px;
            top: 550px; 
            border: 1px solid rgba(255, 133, 133, 1);    
            background-color: #FF8585;
       }
       



</style>