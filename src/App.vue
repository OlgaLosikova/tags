<template>
  <v-app>
    <v-main>
      <v-container d-flex my-5>
        <v-layout justify-start row><Tags /></v-layout>
      </v-container>
      <v-container d-flex my-5>
        <v-layout justify-space-between row><Tags /></v-layout>
      </v-container>
      <v-container d-flex my-5>
      
        <v-layout  w-50 justify-start row>
        <Tags />
      </v-layout>
      <v-layout  w-50 justify-space-between row>
        <Tags />
      </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Tags from "./components/Tags.vue";
export default {
  name: "App",

  components: {
    Tags,
  },

  data: () => ({
    //
  }),
};
</script>
