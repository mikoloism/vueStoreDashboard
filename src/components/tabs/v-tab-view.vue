<template>
  <b-row align-h="center">
    <div class="col-12">
      <v-tab-header class="overflow-hidden" :header="header" />
    </div>
    <div class="p-3 col-12">
      <component :is="body" />
    </div>
  </b-row>
</template>
<script>
import vTabHeader from "./v-tab-header.vue";
export default {
  components: { vTabHeader },
  name: "VTabView",
  props: ["header", "body"],
};
</script>
