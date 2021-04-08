<template>
  <footer>
    <div class="line"></div>
    <div class="footer-mainSection">
      <div class="footer-leftSection">
        <p class="footer-title">PHOENIXWEAR</p>
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
      </div>
      <div class="footer-middleSection">
        <p class="footer-title">CONTÁCTANOS</p>
        <p>
          TELÉFONO: +57 300-878-1789 <br />
          EMAIL: phoenixwear.co@gmail.com <br />WHATSAPP:
          <a
            class="footer-whatsAppLink"
            href="https://api.whatsapp.com/send?phone=+57 300 578 1578&text=Hola%20me%20gustaría%20saber%20más"
          >
            Click aquí
          </a>
        </p>
      </div>
      <div class="footer-rightSection">
        <p class="footer-title">SIGUENOS</p>
        <div class="footer-icons">
          <a href="https://www.facebook.com/phoenix.wear.7/"
            ><i class="fab fa-facebook fa-lg"></i
          ></a>
          <a href="https://www.instagram.com/phoenix_wear_co/">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://github.com/FundIngSoft2021-10/phoenixWear">
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
    <p class="footer-copyRight">
      2020 made by
      <a
        class="footer-copyRightLink"
        href="https://github.com/FundIngSoft2021-10/phoenixWear"
        >Phoenix Wear</a
      >
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  width: 100vw;
  background: linear-gradient(180deg, rgba(229, 229, 229, 0) 0%, #e5e5e5 100%);
  text-align: center;
  font-family: $montserratRegular-font;
  padding: 1.5rem 0;
  margin-top: 10rem;

  a {
    color: black;
    text-decoration: none;
    &:hover {
      color: $phoenix-color;
    }
  }
  .router-link-exact-active {
    color: #ff8585 !important;
  }
}
.line {
  border-top: 2px solid #ffbbbb;
  width: 80%;
  margin: auto;
  padding: 1rem;
}
nav {
  text-align: left;
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    padding: 0.3rem 0;
  }
  .link {
    text-decoration: none;
    padding: 1rem 0;
    color: black;

    &:hover {
      color: $phoenix-color;
    }
  }
}
.footer-icons {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  width: 9rem;
  align-items: center;
  height: 20%;
  i {
    color: black;
    padding: 1.2rem;
    &:hover {
      color: #ffbbbb;
      border-bottom: none;
    }
  }
}
.footer-mainSection {
  display: flex;
  justify-content: space-around;
}
.footer-title {
  font-family: $montserratBold-font;
  justify-content: center;
}
</style>
