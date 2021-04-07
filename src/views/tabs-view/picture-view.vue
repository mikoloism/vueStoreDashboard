<template>
  <b-row align-h="center">
    <b-col class="h2 text-right pr-5 p-3" align-self="start" cols="12">
      <h2>انتخاب تصاویر</h2>
    </b-col>
    <b-col cols="11" class="text-right">
      <b-card
        tag="label"
        class="mb-3 p-0 m-0 col-lg-3 col-md-6 col-sm-12"
        align="center"
        no-body
        for="v-picture__file-input"
        style="cursor: pointer"
      >
        <template #header>
          <b-icon-cloud-arrow-down font-scale="10" />
        </template>
        <template #footer>
          <b-form-file
            id="v-picture__file-input"
            ref="v-picture__file-input"
            @change="handleUploading"
            multiple
            autofocus
            accept=".jpg, .jpeg, .png"
          />
        </template>
      </b-card>
    </b-col>
    <b-col v-if="this.files.selected.length !== 0" cols="11">
      <b-row>
        <b-col
          class="mb-2 mt-2"
          sm="6"
          md="3"
          v-for="{ url, name } in this.files.selected"
          :key="name"
          @dblclick="handleRemoveFile"
        >
          <b-img
            :src="url"
            :alt="`file ${url} can't uploaded!`"
            :data-url="url"
            :data-name="name"
            block
            fluid
            center
            thumbnail
            rounded
          />
          <p>{{ name }}</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      url: null,
      modelFiles: [],
      files: {
        selected: [],
        uploaded: [],
      },
    };
  },
  methods: {
    isExist(file, fileList, key = "name") {
      return !!fileList.find((f) => f[key] === file);
    },
    handleUploading(e) {
      const $this = e.target;
      let files;
      let w = window.setTimeout(() => {
        if ($this.tagName === "LABEL") {
          files = $this.previousElementSibling.files;
        } else if ($this.tagName === "INPUT") {
          files = $this.files;
        }
        files.forEach((file) => {
          let url = URL.createObjectURL(file);
          console.log(file);
          let exist = this.isExist(file.name, this.files.selected);
          if (!exist) this.files.selected.push({ url, name: file.name });
        });
        window.clearTimeout(w);
      }, 1000);
    },
    handleRemoveFile(e) {
      let $this = e.target;
      let exist = this.isExist($this.dataset.name, this.files.selected);
      if (exist) {
        let newList = this.files.selected.filter((f) => f.url !== $this.src);
        this.files.selected = [...newList];
      }
    },
  },
};
</script>
