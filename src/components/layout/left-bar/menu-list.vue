<template>
  <div class="menu-list">
    <v-list class="pa-0 ma-0">
      <div
        v-for="route in routes"
        :key="route.name"
      >
        <v-list-group
          v-if="route.children"
          :prepend-icon="route.icon"
          active-class="secondary"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </template>
          <menu-list ml-2 :routes="route.children"></menu-list>
        </v-list-group>
        <v-list-item
          v-if="!route.children"
          link
          :to="{ name: route.name }"
          active-class="secondary"
        >
          <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ route.title }}</v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'MenuList',

  props: {
    routes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>>
