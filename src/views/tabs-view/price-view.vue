<template>
  <b-row align-h="center">
    <b-col dir="rtl" cols="11" class="text-right">
      <v-sell-state @change="handleChange" />
      <v-unit-select @state="handleState" @change="handleChange" />
      <v-quantity @change="handleChange" @state="handleState" />
      <v-exemption @change="handleChange" />
    </b-col>
  </b-row>
</template>

<script>
import VUnitSelect from "@/components/pricing/v-unit-select.vue";
import VSellState from "@/components/pricing/v-sell-state.vue";
import VQuantity from "@/components/pricing/v-quantity.vue";
import VExemption from "@/components/pricing/v-exemption.vue";
export default {
  components: { VUnitSelect, VSellState, VQuantity, VExemption },
  data() {
    return {
      states: {
        min: null,
        max: null,
        unit: null,
      },
      required: ["min", "max", "unit"],
      values: {
        min: 0,
        max: 0,
        sellState: false,
        productState: false,
        unit: null,
        exemption: "customer",
      },
    };
  },
  methods: {
    handleChange(prop, value) {
      this.values[prop] = value;
      this.validate();
    },
    handleState(prop, value) {
      this.states[prop] = value;
      this.validate();
    },
    validate() {
      const { states, required } = this;
      const valids = [];
      Object.keys(states).forEach((key) => {
        if (required.indexOf(key) !== -1) {
          if (states[key] !== null && states[key] !== false) valids.push(true);
          else valids.push(false);
        } else {
          if (states[key] !== false) valids.push(true);
        }
      });
      if (!valids.includes(false)) this.$emit("before-nav", 3, true);
      else this.$emit("before-nav", 3, false);
    },
    onSubmit() {
      // no state and value can equal null
    },
    StoreSync() {},
  },
};
</script>
