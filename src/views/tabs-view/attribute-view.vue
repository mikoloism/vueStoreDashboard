<template>
  <b-row align-h="center">
    <b-col cols="11">
      <!-- <b-form> -->
      <v-input-box @add="addAttribute" />
      <v-attribute-list />
      <!-- <v-tabs-nav /> -->
      <!-- </b-form> -->
    </b-col>
  </b-row>
</template>

<script>
// import VTabsNav from "@/components/tabs/v-tabs-nav.vue";
import VInputBox from "@/components/attributes/v-input-box.vue";
export default {
  data() {
    return { attributes: [] };
  },
  methods: {
    addAttribute({ name, value }) {
      this.attributes.push({ name, value });
    },
  },
  components: { VInputBox },
};
</script>

<style></style>
