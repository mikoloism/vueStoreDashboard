<template>
  <b-row align-h="center">
    <b-col class="h2 text-right pr-5 p-3" align-self="start" cols="12">
      <h2>انتخاب تصاویر</h2>
    </b-col>
    <b-col cols="11" class="text-right">
      <v-input-box />
    </b-col>
    <b-col v-if="this.selected.length !== 0" cols="11">
      <v-img-box :files="this.selected" />
    </b-col>
  </b-row>
</template>

<script>
import VImgBox from "@/components/pictures/v-image-box";
import VInputBox from "@/components/pictures/v-input-box";

let index = -1;
const base64Encode = (data) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => resolve({ src: reader.result, index: ++index });
    reader.onerror = (error) => reject(error);
  });

export default {
  name: "VPicture",
  components: { VImgBox, VInputBox },

  methods: {
    handleUpload() {},
    handlePreview() {},
    handleRename() {},
    handleRemove() {
      // let $this = this.$refs[`preview_image_${e.target.dataset.index}`][0];
      // console.log($this);
      // if ($this) {
      //   let exist = !!this.selected.find(
      //     ({ file }) => file.name === $this.dataset.name
      //   );
      //   if (exist) {
      //     let newList = this.selected.filter(
      //       ({ file }) => file.name !== $this.dataset.name
      //     );
      //     this.selected = [...newList];
      //   }
      // }
    },
    handleSave() {},
  },

  computed: {
    model() {
      return this.selectedImage;
    },
  },

  data() {
    return {
      selectedImage: null,
      selected: [],
    };
  },
  watch: {
    selectedImage(next, prev) {
      if (next !== prev)
        base64Encode(next)
          .then(({ src, index }) =>
            this.selected.push({ file: next, src, index })
          )
          .catch((err) => console.error(err));
      else console.log("[watch] : {{ next }}");
    },
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
