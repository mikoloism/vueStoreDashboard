<template>
  <b-row align-h="center">
    <b-col cols="11" class="text-right" dir="rtl">
      <!-- form -->
      <v-input-name @state="setState" @change="setChange" />

      <v-input-category @state="setState" @change="setChange" />

      <v-input-brand @change="setChange" />

      <v-input-license @state="setState" @change="setChange" />
      <!-- end-from -->
    </b-col>
  </b-row>
</template>

<script>
import VInputName from "@/components/generals/v-input-name.vue";
import VInputCategory from "@/components/generals/v-input-category.vue";
import VInputBrand from "@/components/generals/v-input-brand.vue";
import VInputLicense from "@/components/generals/v-input-license.vue";
export default {
  props: ["nav"],
  data() {
    return {
      product: {
        name: "",
        code: "",
        category: null,
        subcategory: null,
        brand: null,
        licenseSerial: "",
        licenseOrigin: "",
      },
      states: {
        name: null,
        code: null,
        category: null,
        licenseSerial: null,
      },
      required: ["name", "code", "category"],
    };
  },

  methods: {
    setState(state, value) {
      this.states[state] = value;
      this.validate();
    },
    setChange(prop, value) {
      this.product[prop] = value;
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
      if (!valids.includes(false)) this.$emit("before-nav", 4, true);
      else this.$emit("before-nav", 4, false);
    },
    onSubmit() {},
    StoreSync() {
      // emit('handleNext') @click if states required === true next() : null
    },
  },
  components: { VInputLicense, VInputName, VInputCategory, VInputBrand },
};
</script>
