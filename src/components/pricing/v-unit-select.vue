<template>
  <b-form-group label-for="v-general__product--unit">
    <b-form-input
      type="text"
      id="v-general__product--unit"
      list="v-general__product--unit-list"
      placeholder="واحد شمارش"
      v-model.trim="value"
      :state="state"
      @change="handleChange"
      @input="handleChange"
    />
    <template #description>
      <p>اگر واحد شمارشی مورد نظر یافت نشد، آن را بنویسید</p>
    </template>
    <b-datalist :options="builts.units" id="v-general__product--unit-list" />
  </b-form-group>
</template>

<script>
import builts from "@/store/built";
export default {
  data() {
    return {
      builts,
      value: null,
      state: null,
    };
  },
  methods: {
    handleChange() {
      this.state =
        this.value !== null &&
        this.value !== "" &&
        Object.keys(this.value).length !== 0;
      this.trigger("state", "unit", this.state);
      this.trigger("change", "unit", this.value);
    },
    trigger(event, prop, value) {
      this.$emit(event, prop, value);
    },
  },
};
</script>
