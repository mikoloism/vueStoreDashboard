<template>
  <b-row>
    <b-form-group
      class="col-6"
      label-for="v-general__product--category"
      label="دسته بندی"
    >
      <b-form-select
        id="v-general__product--category"
        required
        v-model="category"
        :options="builts.category"
        :value="null"
        :state="states.category"
        @change="validateCategory"
      ></b-form-select>
    </b-form-group>
    <b-form-group
      class="col-6"
      label-for="v-general__product--sub-category"
      label="زیر شاخه (اختیاری)"
    >
      <b-form-input
        id="v-general__product--sub-category"
        list="v-general__product--sub-category-list"
        v-model="subcategory"
        placeholder="شاخه دسته بندی"
        :disabled="category ? false : true"
        @blur="validateSubCategory"
      />
      <template #description>
        <p>اگر زیرشاخه یافت نشد، آن را بنویسید</p>
      </template>
      <b-datalist
        id="v-general__product--sub-category-list"
        :options="this.builts.subcategory[category]"
      />
    </b-form-group>
  </b-row>
</template>

<script>
import builts from "@/store/built.js";
export default {
  data() {
    return {
      builts,
      subcategory: null,
      category: null,
      states: { category: null },
    };
  },
  methods: {
    validateCategory() {
      this.states.category = this.category !== null;
      this.trigger("state", "category", this.states.category);
      this.trigger("change", "category", this.category);
    },
    validateSubCategory() {
      this.trigger("change", "subcategory", this.subcategory);
    },
    trigger(method, prop, value) {
      this.$emit(method, prop, value);
    },
  },
};
</script>
