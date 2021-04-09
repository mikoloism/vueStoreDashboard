<template>
  <b-img
    :ref="`preview_image_${index + 1}`"
    :src="src"
    :alt="name ? name : 'please, wait...'"
    :index="index"
    :data-index="index"
    :data-name="name"
    :data-real-name="real"
    :data-virtual-src="src"
    center
    thumbnail
    rounded
  />
</template>

<script>
export default {
  name: "VImage",
  props: ["index", "src", "name", "real", "value"],
};
</script>

<style></style>
