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
      >
        {{ value ? "خریدار" : "فروشنده" }}
      </b-form-checkbox></label
    >
  </b-form-group>
</template>

<script>
export default {
  data() {
    return { value: true };
  },
  watch: {
    value(vn, vp) {
      if (vn !== vp) {
        if (vn) {
          this.trigger("change", vn);
        }
      }
    },
  },
  methods: {
    trigger(emit, arg) {
      this.$emit(emit, arg ? "customer" : "seller");
    },
  },
};
</script>
