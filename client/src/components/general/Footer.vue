<template>
  <div class="footer">
    <div class="cards">
      <div class="we">
        <h2>Phoenix Wear</h2>
      </div>
      <div class="social-media">
        <h2>Redes sociales</h2>
        <a href="#"><i class="fab fa-facebook fa-2x icon"></i></a>
       <a href="#"><i class="fab fa-twitter fa-2x icon"></i></a>
        <a href="https://github.com/FundIngSoft2021-10/phoenixWear/wiki/Integrantes"><i class="fab fa-github fa-2x icon"></i></a>
      </div>
      <div class="contact">
        <h2>Contacto</h2>
        <a href="mailto:fcamargodiaz@gmial.com"><i class="fas fa-envelope fa-2x icon"></i></a>
      </div>
    </div>
    <div class="License">
    <i class="far fa-copyright"> All rights reserved</i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer{
    margin-top: 40px;
    background-color: #FFBBBB;
    padding: 2rem 2rem;
    font-family: $montserratRegular-font;
}

.cards{
    align-items: center;
    display:flex;
    justify-content: space-around; 
    color: white;
}

.we{
    position: relative;
    display: inline-block;
    padding: 2rem 1.5rem;
}

.social-media{
    position: relative;
    display: inline-block;
    text-align: center;
    padding: 2rem 1.5rem;
}

.contact{
    position: relative;
    display: inline-block;
    padding: 2rem 1.5rem;
    text-align: center;
}



.license {
    padding-top: 1rem;
    text-align: center;
}

.icon{
  padding: 0 5px;
  color: #ababab;
}

.icon:hover{
  color: white;
}

.License{
  margin-top: 1rem;
  padding-left: 65px;
  align-items: center;
  display:flex;
  justify-content: space-around;
  color: white;
}

</style>
