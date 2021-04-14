<template>
  <b-form-group label-for="v-general__product--unit">
    <b-form-input
      type="text"
      id="v-general__product--unit"
      v-model="value"
      list="v-general__product--unit-list"
      placeholder="واحد شمارش"
      required
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
  methods: {
    trigger(value) {
      this.$emit("change", value);
    },
  },
  data() {
    return {
      value: null,
      builts,
    };
  },
  watch: {
    value(news, olds) {
      if (news !== olds) {
        if (news) {
          this.trigger(this.value);
        }
      }
    },
  },
};
</script>
