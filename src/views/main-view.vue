<template>
  <b-form>
    <v-tabs :v-tabs-list="this.tabs" />
  </b-form>
</template>

<script>
import "@/styles/main.scss";
import VTabs from "@/layouts/v-tabs";
import VTabsList from "@/store/v-tabs-list.js";
export default {
  name: "VMain",
  data() {
    return { tabs: VTabsList };
  },
  components: { "v-tabs": VTabs },
};
</script>
