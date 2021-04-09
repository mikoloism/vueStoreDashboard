<template>
  <b-row align-h="center">
    <b-col class="h2 text-right pr-5 p-3" align-self="start" cols="12">
      <h2>وضعیت</h2>
    </b-col>
    <b-col cols="11" class="text-right">
      <b-form dir="rtl" @submit="onSubmit">
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
          <b-datalist
            :options="builts.units"
            id="v-general__product--unit-list"
          />
        </b-form-group>
        <b-btn-group dir="ltr">
          <b-btn type="submit" variant="primary">
            <b-icon icon="chevron-double-left" />
            مرحله بعدی
          </b-btn>
          <b-btn type="reset" variant="outline-danger">
            <b-icon icon="arrow-clockwise" />
            از نو
          </b-btn>
          <b-btn type="button" variant="outline-secondary">
            بازگشت
            <b-icon icon="chevron-double-right" />
          </b-btn>
        </b-btn-group>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import builts from "@/store/built.js";
export default {
  data() {
    return { builts, product: { unit: "" } };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style></style>
