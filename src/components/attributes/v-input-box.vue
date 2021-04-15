<template>
  <b-input-group>
    <b-form-input
      v-model="attribute.name"
      :state="state.name"
      dir="rtl"
      placeholder="مقدار ویژگی"
      tabindex="1"
    />
    <b-form-input
      v-model.trim="attribute.value"
      :state="state.value"
      dir="rtl"
      placeholder="نام ویژگی"
      tabindex="0"
    />
    <template slot="prepend">
      <b-btn
        @click="validate"
        variant="outline-primary"
        class="d-flex align-items-center"
        tabindex="2"
      >
        <b-icon icon="plus" scale="1.7" class="p-0" />
      </b-btn>
    </template>
  </b-input-group>
</template>

<script>
export default {
  data() {
    return {
      attribute: { name: "", value: "" },
      state: { name: null, value: null },
    };
  },
  methods: {
    validate() {
      this.state.name = this.attribute.name.length !== 0;
      this.state.value = this.attribute.value.length !== 0;
      if (this.state.name && this.state.value) this.$emit("add", this.state);
    },
  },
};
</script>

<style></style>
