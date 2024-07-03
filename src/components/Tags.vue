<template>
  <fragment>
    <div v-for="item in items" :key="item.id">
      <v-icon aria-hidden="false"> mdi-circle-small </v-icon
      ><v-icon>{{ item.icon }}</v-icon
      ><span>{{ item.text }}</span>
    </div>
</fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  name: "Tags",

  data: () => ({
    items: [
      { id: 0, text: "granny house", icon: "mdi-star" },
      { id: 1, text: "sequel" },
      { id: 2, text: "magnet tricks", icon: "mdi-check-circle" },
      { id: 3, text: "linus" },
      { id: 4, text: "hellblade 2", icon: "mdi-alert-circle" },
      { id: 5, text: "pixio", icon: "mdi-plus" },
      { id: 6, text: "friday the 13th puzzle", icon: "mdi-cached" },
      { id: 8, text: "over it" },
      { id: 9, text: "playing games video", icon: "mdi-information" },
      { id: 10, text: "guardian games medals", icon: "mdi-star" },
      { id: 11, text: "fgteev gaming" },
      { id: 12, text: "xbox series x", icon: "mdi-check-circle" },
      { id: 13, text: "safari hunt 2018" },
      { id: 14, text: "2020", icon: "mdi-alert-circle" },
      { id: 15, text: "super long tag with super long name", icon: "mdi-plus" },
      { id: 16, text: "3d stick fight", icon: "mdi-cached" },
      { id: 18, text: "kids pretend play" },
      { id: 19, text: "ajax", icon: "mdi-information" },
    ],
  }),
};
</script>
