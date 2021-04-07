<template>
  <b-tab :active="active">
    <template #title>
      <span>{{ title }}</span>
      <span class="m-auto p-auto pl-3">
        <b-icon :icon="icon" />
      </span>
    </template>
    <v-tab-view :component="component" />
  </b-tab>
</template>

<script>
import VTabView from "./v-tab-view";
export default {
  name: "VTab",
  props: ["icon", "title", "component", "active"],
  components: {
    "v-tab-view": VTabView,
  },
};
</script>
