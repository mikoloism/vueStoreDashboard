<template>
  <b-row class="text-right" align-h="center">
    <b-col cols="3">
      <b-row>
        <b-col cols="6">
          <b-icon icon="chevron-double-left" />
        </b-col>
        <b-col cols="6">
          <b-btn size="sm" variant="link">
            پیشین
            <b-icon icon="arrow-right" />
          </b-btn>
        </b-col>
      </b-row>
    </b-col>
    <b-col class="h3 text-right pr-5 p-3" align-self="start" cols="6">
      <h3>{{ header }}</h3>
    </b-col>
  </b-row>
</template>

<script>
export default { props: ["header"] };
</script>
