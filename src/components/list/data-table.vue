<template>
  <div class="data-table">
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:headers="{ headers: header }">
        <pre>{{ header }}</pre>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',

  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    noDataText: {
      type: String,
    },
    useLimitOffset: {
      type: Boolean,
      default: false,
    },
  },

  created() {

  },
};
</script>
