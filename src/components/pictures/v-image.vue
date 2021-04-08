<template>
  <b-img
    :ref="`preview_image_${index + 1}`"
    :src="src"
    :alt="name ? name : 'please, wait...'"
    :index="index"
    block
    fluid
    center
    thumbnail
    rounded
  />
</template>

<script>
export default {
  name: "VImage",
  props: ["index", "src", "name"],
};
</script>

<style></style>
