<template>
  <b-row align-h="center">
    <b-col class="h2 text-right pr-5 p-3" align-self="start" cols="12">
      <h2>وضعیت</h2>
    </b-col>
    <b-col cols="11" class="text-right">
      <b-form dir="rtl" @submit="onSubmit">
        <v-sell-state />
        <v-unit-select @change="(value) => (this.product.unit = value)" />
        <v-quantity />
        <v-tabs-nav />
        {{ this.product.unit }}
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import builts from "@/store/built.js";
import vTabsNav from "@/components/tabs/v-tabs-nav.vue";
import VUnitSelect from "@/components/pricing/v-unit-select.vue";
import VSellState from "@/components/pricing/v-sell-state.vue";
import VQuantity from "../../components/pricing/v-quantity.vue";
export default {
  components: { vTabsNav, VUnitSelect, VSellState, VQuantity },
  data() {
    return {
      builts,
      product: { unit: "", sellState: false, productState: false },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style></style>
