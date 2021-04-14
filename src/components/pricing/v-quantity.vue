<template>
  <b-row>
    <b-col cols="6">
      <b-form-group label="حداقل موجودی">
        <b-form-input
          type="number"
          :state="minState"
          min="0"
          v-model.number="min"
          required
        />
      </b-form-group>
    </b-col>
    <b-col cols="6">
      <b-form-group label="حداکثر موجودی">
        <b-form-input
          type="number"
          :state="maxState"
          min="0"
          v-model.number="max"
          required
        />
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return { min: 0, max: 0 };
  },
  watch: {
    min(newMin, oldMin) {
      if (newMin !== oldMin) {
        if (newMin) {
          this.trigger("min", this.min);
        }
      }
    },
    max(newMax, oldMax) {
      if (newMax !== oldMax) {
        if (newMax) {
          this.trigger("max", this.max);
        }
      }
    },
  },
  methods: {
    trigger(emit, ...args) {
      this.$emit(emit, ...args);
    },
  },
  computed: {
    minState(value) {
      return value.min !== 0;
    },
    maxState(value) {
      return value.max !== 0;
    },
  },
};
</script>
