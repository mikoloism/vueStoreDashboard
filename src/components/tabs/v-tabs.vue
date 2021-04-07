<template>
  <b-tabs v-model="currentTabIndex">
    <v-tab
      v-for="tab in VTabsList"
      :key="tab.id"
      :icon="tab.icon"
      :title="tab.title"
      :component="tab.component"
      :active="tab.active || false"
    />
  </b-tabs>
</template>

<script>
import VTab from "./v-tab";
export default {
  name: "VTabs",
  props: ["VTabsList"],
  data() {
    return {
      currentTabIndex: 0,
    };
  },
  components: { "v-tab": VTab },
};
</script>
