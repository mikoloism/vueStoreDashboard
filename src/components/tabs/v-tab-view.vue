<template>
  <component :is="component" />
</template>
<script>
export default {
  name: "VTabView",
  props: ["component"],
};
</script>
