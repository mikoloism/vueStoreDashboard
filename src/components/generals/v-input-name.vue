<template>
  <b-row>
    <b-form-group
      class="col-7"
      label-for="v-general__product--name"
      label="نام کالا"
    >
      <b-form-input
        type="text"
        id="v-general__product--name"
        placeholder="نمونه :‌ نوشابه رژیمی"
        required
        v-model.trim="product.name"
        :state="states.name"
        @blur="validateName"
      />
    </b-form-group>
    <b-form-group
      class="col-5"
      label-for="v-general__product--code"
      label="کد کالا"
    >
      <b-form-input
        type="text"
        id="v-general__product--code"
        placeholder="نمونه :‌ PK-02"
        required
        v-model.trim="product.code"
        :state="states.code"
        @blur="validateCode"
      />
      <template #description> این فیلد لاتین میباشد </template>
    </b-form-group>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      product: { name: "", code: "" },
      states: { name: null, code: null },
    };
  },
  // states
  methods: {
    validateName() {
      this.states.name = this.product.name.length !== 0;
      this.trigger("state", "name", this.states.name);
      this.trigger("change", "name", this.product.name);
    },
    validateCode() {
      this.states.code = this.product.code.length !== 0;
      this.trigger("state", "code", this.states.code);
      this.trigger("change", "code", this.product.code);
    },
    trigger(emit, ...args) {
      this.$emit(emit, ...args);
    },
  },
};
</script>
