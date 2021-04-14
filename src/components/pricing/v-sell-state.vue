<template>
  <b-row>
    <b-col cols="6">
      <b-form-group>
        <b-form-checkbox v-model="value.sellState" name="sellState" switch>
          وضعیت فروش
        </b-form-checkbox>
      </b-form-group>
    </b-col>
    <b-col cols="6">
      <b-form-group>
        <b-form-checkbox
          v-model="value.productState"
          name="productState"
          switch
        >
          وضعیت کالا
        </b-form-checkbox>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return { value: { sellState: false, productState: false } };
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
  methods: {
    trigger(value) {
      this.$emit("change", {
        sell: value.sellState,
        product: value.productState,
      });
    },
  },
};
</script>
