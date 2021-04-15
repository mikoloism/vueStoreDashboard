<template>
  <b-row align-h="center">
    <b-col class="h2 text-right pr-5 p-3" align-self="start" cols="12">
      <h2>ویژگی ها</h2>
    </b-col>
    <b-col cols="11">
      <b-form>
        <v-input-box />
        <v-tabs-nav />
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import VTabsNav from "@/components/tabs/v-tabs-nav.vue";
import VInputBox from "@/components/attributes/v-input-box.vue";
export default {
  components: { VTabsNav, VInputBox },
};
</script>

<style></style>
