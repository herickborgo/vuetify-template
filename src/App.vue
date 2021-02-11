<template>
  <v-app>
    <app-bar @update:drawer="drawer = !drawer"></app-bar>
    <left-bar v-model="drawer"></left-bar>
    <v-content class="ma-5">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/components/layout/app-bar.vue';
import LeftBar from '@/components/layout/left-bar.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    LeftBar,
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
