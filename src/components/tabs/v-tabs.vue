<template>
  <b-row
    align-h="center"
    align-v="center"
    align-content="center"
    class="p-2 pt-5"
  >
    <b-col md="8">
      <b-tabs class="border border-1" fill v-model="currentTabIndex">
        <v-tab
          v-for="tab in VTabsList"
          :key="tab.id"
          :icon="tab.icon"
          :title="tab.title"
          :component="tab.component"
          :active="tab.active || false"
        />
      </b-tabs>
    </b-col>
  </b-row>
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
