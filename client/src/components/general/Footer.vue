<template>
  <div class="footer">
    <div class="cards">
      <div class="footer-navigation">
        <h2>Phoenix Wear</h2>
        <ul class="nav-footer" style="padding-left: 0px;">
          <li>
            <router-link class="link" to="/"><p class="text-footer-nav">Trending</p></router-link>
          </li>
          <li>
            <router-link class="link" to="/ropa"><p class="text-footer-nav">Ropa</p></router-link>
          </li>
          <li>
            <router-link class="link" to="/preguntas"><p class="text-footer-nav">Q&A</p></router-link>
          </li>
          <li>
            <router-link class="link" to="/nosotros"><p class="text-footer-nav">Nosotros</p></router-link>
          </li>
          <li>
            <router-link class="link" to="/contacto"><p class="text-footer-nav">Contacto</p></router-link>
          </li>
        </ul>
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
      <i class="far fa-copyright"></i><p>All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
ul li{
  padding: 0px;
  list-style-type: none;
}

ul li :hover{
  color: white;
}

.text-footer-nav{
  color: #ababab;
  line-height: 25%;
}

.link{
  text-decoration: none;
}

.footer{
    margin-top: 40px;
    background-color: #FFBBBB;
    padding: 2rem 2rem;
    font-family: $montserratRegular-font;
}

.cards{
    align-items: start;
    display:flex;
    justify-content: space-around; 
    color: white;
}

.footer-navigation{
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
  display: inline-block;
  padding-left: 50px;
  justify-content: center;
  margin-top: 1rem;
  text-align: center;
  align-items: start;
  display:flex;
  color: white;
}

</style>
