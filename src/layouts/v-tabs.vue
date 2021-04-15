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
          :nav="navigate"
        />
      </b-tabs>
    </b-col>
  </b-row>
</template>

<script>
import VTab from "@/components/tabs/v-tab";
export default {
  name: "VTabs",
  props: ["VTabsList"],
  data() {
    return {
      currentTabIndex: 0,
    };
  },
  methods: {
    navigate(callback) {
      let navStep = callback.call(this, this.currentTabIndex);
      this.currentTabIndex = navStep;
    },
  },
  components: { "v-tab": VTab },
};
</script>
