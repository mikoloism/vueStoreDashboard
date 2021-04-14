<template>
  <b-btn-group dir="ltr">
    <b-btn v-if="true" type="submit" variant="primary">
      <b-icon icon="chevron-double-left" />
      {{ (this.next && this.next.text) || "مرحله بعدی" }}
    </b-btn>
    <b-btn v-if="this.new.show || false">
      <b-icon icon="arrow-clockwise" />
      {{ this.new.text || "از نو" }}
    </b-btn>
    <b-btn v-if="this.prev.show || false" variant="outline-secondary">
      <b-icon icon="chevron-double-right" />
      {{ this.prev.text || "بازگشت" }}
    </b-btn>
  </b-btn-group>
</template>

<script>
export default {
  props: {
    new: {
      type: Object,
      default() {
        return {};
      },
    },
    prev: {
      type: Object,
      default() {
        return {};
      },
    },
    next: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style></style>
