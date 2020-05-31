<template>
  <v-navigation-drawer
    class="primary"
    dark
    permanent
    :mini-variant="!drawer"
    app
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LeftBar',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'dashboard' },
      { title: 'Account', icon: 'account_box' },
      { title: 'Admin', icon: 'gavel' },
    ],
  }),

  computed: {
    drawer() {
      return this.value;
    },
  },
};
</script>
