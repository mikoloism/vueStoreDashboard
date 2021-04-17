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
          :before-nav="befNavigate"
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
      steps: [null, null, null, null, null],
      currentTabIndex: 0,
    };
  },
  methods: {
    befNavigate(index = 4, value) {
      this.steps[index] = value;
    },
    navigate(callback) {
      let navStep = callback.call(this, this.currentTabIndex);
      let canNav =
        this.steps[this.currentTabIndex] !== false &&
        this.steps[this.currentTabIndex] !== undefined;
      if (canNav) this.currentTabIndex = navStep;
    },
  },
  components: { "v-tab": VTab },
};
</script>
