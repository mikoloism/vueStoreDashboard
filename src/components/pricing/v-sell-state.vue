<template>
  <b-row>
    <b-col cols="6">
      <b-form-group>
        <b-form-checkbox
          @change="handleSell"
          v-model="sellState"
          name="sellState"
          switch
        >
          وضعیت فروش
        </b-form-checkbox>
      </b-form-group>
    </b-col>
    <b-col cols="6">
      <b-form-group>
        <b-form-checkbox
          @change="handleProduct"
          v-model="productState"
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
    return {
      sellState: false,
      productState: false,
    };
  },
  methods: {
    handleSell() {
      this.trigger("sellState", this.sellState);
    },
    handleProduct() {
      this.trigger("productState", this.productState);
    },
    trigger(prop, value) {
      this.$emit("change", prop, value);
    },
  },
};
</script>
