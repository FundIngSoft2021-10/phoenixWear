<template>
  <section class="phoenix-info-section">
    <div class="section">
      <div class="info-section">
        <h2>¿Quiénes somos?</h2>
        <p>
          PhoenixWear es una plataforma web que busca darle una segunda
          oportunidad a prendas de alto nivel que han recibido pocos usos, de
          esta forma conectamos a compradores y vendedores en un sitio seguro y
          moderno que facilita el flujo de ropa. Esta plataforma busca
          garantizar seguridad a sus usuarios, con esto en mente se acomoda a
          métodos de pago flexibles, canales de comunicación, atención vía
          soporte y un conjunto de políticas de usuario que garantizan la idea
          principal de la página. PhoenixWear quiere centrarse en un público
          seleccionado, específicamente ropa para mujer de calidad superior.
        </p>
      </div>
      <img src="../../assets/imgs/aboutUs.svg" height="417" width="500" />
    </div>
    <div class="section reverse">
      <img src="../../assets/imgs/mision.svg" height="367" width="500" />
      <div class="info-section">
        <h2>Misión</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
      </div>
    </div>
    <div class="section">
      <div class="info-section">
        <h2>Visión</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
      </div>
      <img src="../../assets/imgs/vision.svg" height="337" width="500" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.section {
  display: flex;
  align-items: center;
  margin: 3rem 0;
  flex-flow: row;
  @media screen and (max-width: $breakpoint-tablet) {
    flex-flow: column;
    margin: 3rem 1rem;
  }
  .info-section {
    width: 50%;
    margin: 0.6rem;
    @media screen and (max-width: $breakpoint-tablet) {
      width: 100%;
      margin: 0;
      text-align: center;
    }
  }
  img {
    width: 50%;
    @media screen and (max-width: $breakpoint-tablet) {
      width: 300px;
      height: 200px;
      margin-top: 1rem;
    }
  }
  h2 {
    text-align: center;
    font-family: $montserratBold-font;
    margin: 1rem 0;
  }
  p {
    margin-bottom: 0;
  }
}
.reverse {
  @media screen and (max-width: $breakpoint-tablet) {
    flex-flow: column-reverse;
  }
}
</style>
