<template>
  <div class="app-bar">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="updateDrawer()"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <span class="mr-2 headline">{{ title }}</span>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',

  props: {
    title: {
      type: String,
      default: 'Title',
    },
  },

  methods: {
    updateDrawer() {
      this.$emit('update:drawer');
    },
  },
};
</script>
