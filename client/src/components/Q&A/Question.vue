<template>
  <section>
    <v-row justify="center">
      <v-col cols="7">
        <div class="card">
          <div class="question">
            <h3>{{ title }}</h3>
            <v-tooltip right v-if = !show>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </template>
              <span>Mira la respuesta</span>
            </v-tooltip>

            <v-btn v-else v-bind="attrs" v-on="on" icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
            </v-btn>
          </div>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                {{ ans }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    ans: String,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #ffebeb;
  border-radius: 10px;
  font-family: $montserratRegular-font;
  padding: 0.4rem 0;
  margin: 0;
}
.question {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  font-family: $montserratSemiBold-font;
}
</style>
