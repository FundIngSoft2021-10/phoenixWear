<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-container class="credits">
            <form method="POST" action="https://formspree.io/f/mbjqjand">
                    <v-text-field
                        name="Username"
                        :counter="20"
                        label="Username"
                        required
                        :rules="text_rule"
                    />
                    <v-text-field
                        name="Cantidad"
                        label="Cantidad"
                        required
                    />
                    <v-btn
                        type="submit"
                        name="send"
                        class="send"
                        color="phoenix"
                        dark
                        large
                        rounded
                        >
                        Agregar Créditos
                    </v-btn>
            </form>           
        </v-container>
    </v-form>
</template>
<script></script>
<style scoped lang="scss">
.width {
  width: 70vw;
  margin: auto;
  font-family: $montserratRegular-font;
  @media screen and (max-width: $breakpoint-desktop) {
    width: 90vw;
  }
  @media screen and (max-width: $breakpoint-tablet) {
    width: 100vw;
    margin: 0;
  }
}
.credits{
    font-family: $montserratRegular-font;
}
.credits #cantidad{
    background-color: red;
}
    
</style>