<template>
  <b-row>
    <b-col
      v-for="{ src, file, index } in this.files"
      :key="index + 1"
      md="6"
      sm="6"
      class="mb-2 mt-2 v-picture__preview-wrap"
    >
      <b-btn-group class="v-picture__preview-btn">
        <b-btn
          class="v-picture__delete-icon"
          :data-index="index + 1"
          @dblclick="handleRemoveSelected"
          variant="outline-danger"
        >
          <b-icon icon="trash-fill" font-scale="1.5" />
        </b-btn>
        <b-btn
          class="v-picture__edit-icon"
          :data-index="index + 1"
          @click="handleSetName"
          variant="outline-info"
        >
          <b-icon icon="pencil-square" font-scale="1.5" />
        </b-btn>
      </b-btn-group>
      <v-img :src="src" :index="index" :name="file.name" />
      <p>{{ file.name }}</p>
    </b-col>
  </b-row>
</template>

<script>
import VImg from "./v-image";
export default {
  name: "VImageBox",
  props: ["files"],
  components: { VImg },
};
</script>

<style></style>
