<template>
  <b-row align-h="center">
    <b-col cols="11">
      <b-form>
        <!-- <b-wiswyg controller="all" /> -->
        <b-btn-group>
          <b-btn type="submit" variant="primary">
            <b-icon icon="chevron-double-left" />
            مرحله بعدی
          </b-btn>
          <b-btn type="reset" variant="outline-danger">
            <b-icon icon="arrow-clockwise" />
            از نو
          </b-btn>
          <b-btn type="button" variant="outline-secondary">
            بازگشت
            <b-icon icon="chevron-double-right" />
          </b-btn>
        </b-btn-group>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
export default {};
</script>

<style></style>
