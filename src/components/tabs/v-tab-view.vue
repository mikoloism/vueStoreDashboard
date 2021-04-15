<template>
  <div>
    <v-tab-header :header="header" />
    <component :is="body" />
  </div>
</template>
<script>
import vTabHeader from "./v-tab-header.vue";
export default {
  components: { vTabHeader },
  name: "VTabView",
  props: ["header", "body"],
};
</script>
