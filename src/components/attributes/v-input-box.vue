<template>
  <b-input-group dir="rtl">
    <b-form-input
      v-model.trim="attribute.name"
      :state="state.name"
      placeholder="نام ویژگی"
      :value="attribute.name"
      :readonly="editable ? true : false"
    />
    <b-form-input
      v-model="attribute.value"
      :state="state.value"
      placeholder="مقدار ویژگی"
      :value="attribute.value"
    />
    <template slot="append">
      <b-btn
        @click="validate"
        variant="outline-primary"
        class="d-flex align-items-center"
      >
        <b-icon icon="plus" scale="1.7" class="p-0" />
      </b-btn>
    </template>
  </b-input-group>
</template>

<script>
export default {
  props: ["editable", "lastId"],
  data() {
    return {
      attribute: { name: "", value: "" },
      state: { name: null, value: null },
    };
  },
  watch: {
    editable(n, o) {
      if ((n, o)) {
        if (n) {
          this.attribute = { name: n.name, value: n.value };
        }
      }
    },
  },
  methods: {
    validate() {
      this.state.name = this.attribute.name.length !== 0;
      this.state.value = this.attribute.value.length !== 0;
      if (this.state.name && this.state.value) {
        this.$emit("add", this.attribute);
        this.attribute = { name: "", value: "" };
        this.state = { name: null, value: null };
      }
    },
  },
};
</script>

<style></style>
