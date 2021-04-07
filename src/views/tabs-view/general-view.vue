<template>
  <b-row align-h="center">
    <b-col class="h2 text-right pr-5 p-3" align-self="start" cols="12">
      <h2>عمومی</h2>
    </b-col>
    <b-col cols="11" class="text-right">
      <!-- form -->

      <b-form dir="rtl" @submit="onSubmit">
        <b-row>
          <b-form-group
            class="col-7"
            label-for="v-general__product--name"
            label="نام کالا"
          >
            <b-form-input
              type="text"
              id="v-general__product--name"
              v-model="product.name"
              placeholder="نمونه :‌ نوشابه رژیمی"
              required
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
              v-model="product.code"
              placeholder="نمونه :‌ PK-02"
              required
            />
            <template #description> این فیلد لاتین میباشد </template>
          </b-form-group>
        </b-row>

        <b-row>
          <b-form-group
            class="col-6"
            label-for="v-general__product--category"
            label="دسته بندی"
          >
            <b-form-select
              id="v-general__product--category"
              v-model="product.category"
              :options="builts.category"
              :value="null"
              required
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
              v-model="product.subcategory"
              placeholder="شاخه دسته بندی"
              :disabled="product.category ? false : true"
            />
            <template #description>
              <p>اگر زیرشاخه یافت نشد، آن را بنویسید</p>
            </template>
            <b-datalist
              id="v-general__product--sub-category-list"
              :options="builts.subcategory[product.category]"
            />
          </b-form-group>
        </b-row>

        <b-row>
          <b-form-group
            class="col-12 mr-1"
            label-for="v-general__product--brand"
            content-cols="8"
            label="برند (اختیاری)"
          >
            <b-form-input
              type="text"
              id="v-general__product--brand"
              v-model="product.brand"
              list="v-general__product--brand-list"
              placeholder="انتخاب نام برند"
            />
            <b-datalist
              id="v-general__product--brand-list"
              :options="builts.brands"
            />
          </b-form-group>
        </b-row>

        <b-row>
          <b-form-group
            class="col-7"
            label-for="v-general__product--licens-origin"
            label="مرجع صادرکننده مجوز (اختیاری)"
          >
            <b-form-input
              type="text"
              id="v-general__product--licens-origin"
              v-model="product.licens.origin"
            />
          </b-form-group>
          <b-form-group
            class="col-5"
            label-for="v-general__product--licens-serial"
            label="سریال مجوز (اختیاری)"
          >
            <b-form-input
              type="text"
              id="v-general__product--licens-serial"
              v-model="product.licens.serial"
              :formatter="(text) => this.serialer(text)"
              required
            />
          </b-form-group>
        </b-row>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>

      <!-- end-from -->
    </b-col>
  </b-row>
</template>

<script>
import builts from "@/store/built.js";
export default {
  data() {
    return {
      builts,
      product: {
        code: "",
        name: "",
        category: null,
        subcategory: null,
        brand: null,
        licens: {
          serial: "",
          origin: "",
        },
      },
    };
  },
  methods: {
    serialer(text) {
      // n3/nx
      if (/^([\d]{0,}|[\d]{0,3}\/[\d]{0,})$/.test(text)) {
        let t = Array.from(text);
        if (t.length > 3) {
          return `${t.slice(0, 3).join("")}/${t.slice(4).join("")}`;
        } else return t.join("");
      }
    },
    onSubmit() {},
  },
};
</script>

<style></style>
