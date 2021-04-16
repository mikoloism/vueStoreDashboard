<template>
  <b-row>
    <b-form-group
      class="col-12 mr-1"
      label-for="v-general__product--brand"
      content-cols="8"
      label="برند (اختیاری)"
    >
      <b-form-input
        type="text"
        id="v-general__product--brand"
        v-model="brand"
        list="v-general__product--brand-list"
        placeholder="انتخاب نام برند"
        :state="state"
        @input="send"
      />
      <b-datalist
        id="v-general__product--brand-list"
        :options="this.builts.brands"
      />
    </b-form-group>
  </b-row>
</template>

<script>
import builts from "@/store/built.js";
export default {
  data() {
    return {
      builts,
      brand: null,
      state: null,
    };
  },
  methods: {
    send() {
      this.$emit("change", "brand", this.brand);
    },
  },
};
</script>
