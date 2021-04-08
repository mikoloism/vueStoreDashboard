<template>
  <b-row align-h="center">
    <b-col class="h2 text-right pr-5 p-3" align-self="start" cols="12">
      <h2>انتخاب تصاویر</h2>
    </b-col>
    <b-col cols="11" class="text-right">
      <b-card
        tag="label"
        class="mb-3 p-0 m-0 col-12"
        align="center"
        no-body
        for="v-picture__file-input"
        style="cursor: pointer"
      >
        <template #header>
          <b-icon-cloud-arrow-down font-scale="10" style="height: 300px" />
        </template>
        <template #footer>
          <b-form-file
            id="v-picture__file-input"
            ref="v-picture__file-input"
            v-model="selectedFiles"
            autofocus
            multiple
            accept=".jpg, .jpeg, .png"
          />
        </template>
      </b-card>
    </b-col>
    <b-col v-if="this.selected.length !== 0" cols="11">
      <b-row>
        <b-col
          v-for="{ src, file, index } in this.selected"
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
          <b-img
            :ref="`preview_image_${index + 1}`"
            :src="src"
            :alt="`file ${src} can't uploaded!`"
            :data-url="src"
            :data-name="file.name"
            block
            fluid
            center
            thumbnail
            rounded
          />
          <p>{{ file.name }}</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
let index = -1;
const base64Encode = (data) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => resolve({ src: reader.result, index: ++index });
    reader.onerror = (error) => reject(error);
  });
export default {
  data() {
    return {
      selectedFiles: [],
      selected: [],
      uploaded: [],
      inUpload: [],
      inPreview: [],
    };
  },
  watch: {
    selectedFiles(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue) {
          newValue.forEach((v) => {
            base64Encode(v)
              .then(({ src, index }) =>
                this.selected.push({ src, file: v, index })
              )
              .catch(() => console.log("[base64] => catch"));
          });
        } else {
          console.log("[watch] => false");
        }
      }
    },
  },
  methods: {
    handleUploading() {},
    handleRemoveSelected(e) {
      let $this = this.$refs[`preview_image_${e.target.dataset.index}`][0];
      console.log($this);
      if ($this) {
        let exist = !!this.selected.find(
          ({ file }) => file.name === $this.dataset.name
        );
        if (exist) {
          let newList = this.selected.filter(
            ({ file }) => file.name !== $this.dataset.name
          );
          this.selected = [...newList];
        }
      }
    },
    handleSetName() {},
  },
};
</script>

<style lang="scss">
.v-picture {
  &__preview-wrap {
    position: relative;

    &:hover {
      & .v-picture__preview-btn {
        opacity: 1;
      }
    }
  }
  &__preview-btn {
    opacity: 0;
    transition: 0.3s ease all;
  }
}
</style>
