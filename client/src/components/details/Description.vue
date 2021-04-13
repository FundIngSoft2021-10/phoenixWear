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
<h4 class="Description"> Descripción </h4>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of <br>
   classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <br>
   Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure <br>
   Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the <br>
   word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from <br>
   sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and <br>
   Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular <br>
   during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes <br>
   from a line in section 1.10.32. </p>
   
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
       .Description
       {
           position: absolute;
      width: 460px;
      height: 30px;
      left: 610px;
      top: 560px;
      font-family: $montserratSemiBold-font;
      font-style: normal; 
      font-weight: 600;
      font-size: 17px;
      line-height: 50px;

      text-align: left;
       }
    p{
      position: absolute;
      width: 1000px;
      height: 5px;
      left: 610px;
      top: 600px;
      font-family: $montserratRegular-font;
      font-style: normal; 
      font-weight: 600;
      font-size: 13px;
      line-height: 20px;

      
       
    }


</style>
