<template>
  <b-form-group label-for="v-general__product--unit">
    <b-form-input
      type="text"
      id="v-general__product--unit"
      v-model="product.unit"
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
import builts from "@/store/built.js";
export default {
  data() {
    return { builts };
  },
};
</script>

<style></style>
