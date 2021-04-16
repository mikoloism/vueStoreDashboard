<template>
  <b-form-group>
    <!-- customer=true | seller=false -->
    <label>
      معافیت ارزش افزوده برای :
      <b-form-checkbox
        class="d-inline m-2"
        button
        :button-variant="value ? 'primary' : 'outline-primary'"
        v-model="value"
        size="sm"
        @change="handleChange"
      >
        {{ value ? "خریدار" : "فروشنده" }}
      </b-form-checkbox>
    </label>
  </b-form-group>
</template>

<script>
export default {
  data() {
    return { value: true };
  },
  methods: {
    handleChange() {
      this.$emit("change", "exemption", this.value ? "customer" : "seller");
    },
  },
};
</script>
