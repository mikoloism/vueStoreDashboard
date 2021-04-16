<template>
  <b-row align-h="center">
    <b-col cols="11" class="text-right" dir="rtl">
      <!-- form -->
      <v-input-name @state="setState" @change="setChange" />

      <v-input-category @state="setState" @change="setChange" />

      <v-input-brand @state="setState" @change="setChange" />

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
  components: { VInputLicense, VInputName, VInputCategory, VInputBrand },
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
        subcategory: null,
        brand: null,
        licenseOrigin: null,
        licenseSerial: null,
      },
    };
  },
  methods: {
    setState(state, value) {
      this.states[state] = value;
    },
    setChange(prop, value) {
      this.product[prop] = value;
    },
    validate() {},
    onSubmit() {},
    StoreSync() {
      // emit('handleNext') @click if states required === true next() : null
    },
  },
};
</script>
