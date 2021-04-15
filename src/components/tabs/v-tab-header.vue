<template>
  <div
    dir="ltr"
    class="d-flex overflow-hidden p-2 pb-1 pt-4 border border-1 text-right"
  >
    <div class="col-4">
      <div class="row">
        <!-- TODO: before change step of tab, validate of data -->
        <!-- goto next step  -->
        <b-btn
          @click="nav((step) => step - 1)"
          class="col-6"
          size="sm"
          variant="link"
        >
          <b-icon icon="chevron-double-left" />
          بعدی
        </b-btn>
        <b-btn
          @click="nav((step) => step + 1)"
          class="col-6"
          size="sm"
          variant="link"
        >
          بازگشت
          <b-icon icon="arrow-right" />
        </b-btn>
      </div>
    </div>

    <div class="h3 text-right col-6">
      <h3 class="cols-12">{{ header }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "nav"],
};
</script>
