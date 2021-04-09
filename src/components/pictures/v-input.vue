<template>
  <div>
    <input
      type="file"
      id="v-picture__file-input"
      ref="v-picture__file-input"
      accept=".jpg, .jpeg, .png"
      v-bind:value="this.caches.image"
      @input="this.handleChange"
    />
    <b-icon icon="cloud-arrow-down" font-scale="10" />
    <p>
      برای بارگزاری تصاویر، آن ها را بکشید و در اینجا رها کنید یا آن ها را
      <b-btn
        size="sm"
        variant="outline-primary"
        tag="label"
        for="v-picture__file-input"
      >
        با کلیک روی این دکمه
      </b-btn>
      انتخاب کنید
    </p>
  </div>
</template>

<script>
export default {
  name: "VInput",
};
</script>
