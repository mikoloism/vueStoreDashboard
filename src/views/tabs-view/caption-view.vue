<template>
  <b-row align-h="center">
    <b-col cols="11">
      <!-- <b-form> -->
      <!-- <b-wiswyg controller="all" /> -->
      <!-- </b-form> -->
      <b-btn ref="last-form-btn" variant="primary" @click="handleLastBtn">
        checkout
        <b-icon-check />
      </b-btn>
    </b-col>
  </b-row>
</template>

<script>
export default {
  methods: {
    handleLastBtn() {
      this.$route.push("/checkout");
    },
  },
};
</script>
