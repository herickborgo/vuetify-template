<template>
  <div class="left-bar">
    <v-navigation-drawer
      class="primary"
      dark
      permanent
      :mini-variant="!drawer"
      app
    >
      <menu-list class="mt-2" :routes="routes"></menu-list>

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
  </div>
</template>

<script>
import MenuList from '@/components/layout/left-bar/menu-list.vue';

export default {
  name: 'LeftBar',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  components: { MenuList },

  computed: {
    drawer() {
      return this.value;
    },
    routes() {
      return this.getRoutes(this.$router.options.routes);
    },
  },

  methods: {
    getRoutes(routes) {
      return routes.filter((route) => route.meta && route.meta.leftBar).map((route) => {
        const { leftBar } = route.meta;
        leftBar.name = route.name;
        if (route.children) {
          leftBar.children = this.getRoutes(route.children);
        }
        return leftBar;
      });
    },
  },
};
</script>
