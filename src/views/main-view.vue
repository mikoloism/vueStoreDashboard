<template>
  <v-tabs :v-tabs-list="this.tabs" />
</template>

<script>
import "@/styles/main.scss";
import VTabs from "@/components/tabs/v-tabs";
import VTabsList from "@/store/v-tabs-list.js";
export default {
  name: "VMain",
  data() {
    return { tabs: VTabsList };
  },
  components: { "v-tabs": VTabs },
};
</script>
