<template>
  <b-row align-h="center">
    <b-col cols="11" class="text-right">
      <!-- <b-form dir="rtl" @submit="onSubmit"> -->
      <v-sell-state @change="(v) => (this.product.states = v)" />
      <v-unit-select @change="(v) => (this.product.unit = v)" />
      <v-quantity
        @min="(n) => (this.product.quantity.min = n)"
        @max="(x) => (this.product.quantity.max = x)"
      />
      <v-exemption @change="(v) => (this.product.exemption = v)" />
      <!-- <v-tabs-nav /> -->
      {{ this.product.unit }}
      <!-- </b-form> -->
    </b-col>
  </b-row>
</template>

<script>
import builts from "@/store/built.js";
// import vTabsNav from "@/components/tabs/v-tabs-nav.vue";
import VUnitSelect from "@/components/pricing/v-unit-select.vue";
import VSellState from "@/components/pricing/v-sell-state.vue";
import VQuantity from "@/components/pricing/v-quantity.vue";
import VExemption from "@/components/pricing/v-exemption.vue";
export default {
  components: { VUnitSelect, VSellState, VQuantity, VExemption },
  data() {
    return {
      builts,
      product: {
        unit: null,
        states: {},
        quantity: { max: 0, min: 0 },
        exemption: "customer ",
      },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style></style>
