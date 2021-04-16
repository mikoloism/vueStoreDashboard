<template>
  <b-row dir="rtl">
    <b-col cols="6">
      <b-form-group label="حداقل موجودی">
        <b-form-input
          type="number"
          :state="state.min"
          min="0"
          :max="max <= 0 ? 0 : max - 1"
          v-model.number="min"
          required
          @change="handleMin"
          :value="minim"
        />
      </b-form-group>
    </b-col>
    <b-col cols="6">
      <b-form-group label="حداکثر موجودی">
        <b-form-input
          type="number"
          :state="state.max"
          :min="min <= 0 ? 0 : min + 1"
          v-model.number="max"
          required
          @change="handleMax"
          :value="maxim"
        />
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      min: 0,
      max: 0,
      state: {
        min: null,
        max: null,
      },
    };
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
    handleMin() {
      this.state.min = this.min > 0 && this.min < this.max;
      this.trigger("state", "min", this.state.min);
      this.trigger("change", "min", this.min);
    },
    handleMax() {
      this.state.max = this.max > 0 && this.max > this.min;
      this.trigger("state", "max", this.state.max);
      this.trigger("change", "max", this.max);
    },
    trigger(event, prop, value) {
      this.$emit(event, prop, value);
    },
  },
  computed: {
    minim() {
      return this.min >= this.max ? this.max - 1 : this.min;
    },
    maxim() {
      return this.max <= this.min ? this.min + 1 : this.max;
    },
  },
};
</script>
