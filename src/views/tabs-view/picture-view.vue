<template>
  <b-row align-h="center">
    <b-col cols="11" class="text-right">
      <v-input-box @change="this.handleChange" />
    </b-col>
    <b-col v-if="this.uploadedFiles.length !== 0" cols="11">
      <v-img-box :files="this.uploadedFiles" />
    </b-col>

    <!-- <b-col cols="12">
      <v-tabs-nav :new="{}" :next="{}" :prev="{}" />
    </b-col> -->
  </b-row>
</template>

<script>
import VImgBox from "@/components/pictures/v-image-box";
import VInputBox from "@/components/pictures/v-input-box";
// import VTabsNav from "@/components/tabs/v-tabs-nav";

export default {
  name: "VPicture",
  components: { VImgBox, VInputBox },

  methods: {
    handleChange(files) {
      this.uploadedFiles = files;
    },
    // handleSaveFiles(files) {
    //   this.files = files;
    // },
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

  data() {
    return {
      uploadedFiles: [],
    };
  },
};
</script>

<style lang="scss">
#v-picture {
  &__file {
    &-input {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    &-box {
      position: relative;

      .card-header {
        cursor: pointer;
      }

      p {
        line-height: 3rem;
      }
    }
  }
}

.v-picture {
  &__preview {
    &-wrap {
      position: relative;
      height: 300px;
      max-height: 300px;
      &:hover {
        & .v-picture__preview-btn {
          opacity: 1;
        }
      }
    }
    &-btn {
      opacity: 0;
      transition: 0.3s ease all;
    }
  }
  &__card-footer {
    &--copy {
      transform: scale(0.8);
      height: 2px;
      padding: 0;
      margin-top: -10px;
    }
  }
}
</style>
