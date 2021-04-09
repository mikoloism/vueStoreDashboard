<template>
  <b-card class="mb-3 p-0 m-0" align="center" id="v-picture__file-box" no-body>
    <div slot="header">
      <!-- v-image-preview -->
      <v-image
        v-if="states.file || states.file === false"
        :name="caches.file.name"
        :src="caches.file.src"
        :index="caches.file.index"
      />

      <!-- v-file-input -->
      <div v-else>
        <input
          type="file"
          id="v-picture__file-input"
          ref="v-picture__file-input"
          accept=".jpg, .jpeg, .png"
          v-bind:value="this.caches.image"
          @input="this.handleChange"
        />
        <b-icon icon="cloud-arrow-down" font-scale="10" />
        <p>
          برای بارگزاری تصاویر، آن ها را بکشید و در اینجا رها کنید یا آن ها را
          <b-btn
            size="sm"
            variant="outline-primary"
            tag="label"
            for="v-picture__file-input"
          >
            با کلیک روی این دکمه
          </b-btn>
          انتخاب کنید
        </p>
      </div>
    </div>
    <div
      slot="footer"
      :class="`v-picture__card-footer v-picture__card-footer${
        states.file
          ? '--rename'
          : states.file !== null
          ? '--progress'
          : '--copy'
      }`"
    >
      <!-- v-progress -->
      <b-progress
        v-if="states.file === false"
        max="100"
        :value="states.progress.value"
        :animated="!(states.progress.state === true)"
        :variant="
          states.progress.state === false
            ? 'danger'
            : states.progress.state
            ? 'success'
            : 'primary'
        "
      />
      <!-- v-name-input -->
      <div v-else-if="states.file">
        <b-input-group>
          <b-input
            type="text"
            :value="this.caches.file.name"
            @change="(v) => (this.caches.file.name = v)"
            placeholder="یک نام لاتین برای تصویر انتخاب کنید"
          />
          <b-btn
            slot="append"
            style="z-index: 99"
            :disabled="!this.states.canRename"
            :variant="this.states.canRename ? 'primary' : 'secondary'"
            @click="this.handleSubmit"
          >
            ثبت
          </b-btn>
        </b-input-group>
        <b-form-text>
          برای نام گزاری تصویر حتما از حروف و اعداد لاتین استفاده کنید
        </b-form-text>
      </div>
      <!-- v-power-text -->
      <v-copy v-else />
    </div>
  </b-card>
</template>

<script>
import VCopy from "@/components/copyright";
import VImage from "@/components/pictures/v-image";
import to from "@/plugins/v-pictures/";
export default {
  name: "VInputBox",
  components: { VCopy, VImage },

  methods: {
    async handleChange(e) {
      const $this = e.target;
      const $file = $this.files[0];
      const value = String($this.value);
      this.caches.image = $file;
      this.caches.file.realName = to.name(value);
      this.caches.file.src = to.url($file);
      this.caches.file.index = to.unique();
      this.caches.file.name = this.caches.file.realName;
      to.base64($file)
        .then((base) => {
          this.caches.file.base64 = base;
          this.states.progress.value = 50;
        })
        .catch((err) => {
          throw err;
        });

      // progress
      this.states.file = false;
      this.states.progress.value = 25;

      // wait
      let w = await window.setTimeout(() => {
        // progress
        this.states.progress.value = 100;
        this.states.progress.state = false;
        this.states.file = true;
        window.clearTimeout(w);
      }, 2000);
    },
    async handleSubmit() {
      await this.handleSave();
    },
    async handleSave() {
      let { index, realName, name, src, base64 } = this.caches.file;
      this.saves.files.push({ index, realName, name, src, base64 });
      await this.handleClear();
      this.trigger();
    },
    handleClear() {
      this.caches.image = null;
      this.states.file = null;
      this.states.progress.value = 0;
      this.states.progress.state = null;
      this.caches.file = {
        realName: "",
        name: "",
        src: "",
        base64: "",
        index: this.caches.file.index + 1,
      };
    },
    trigger() {
      this.$emit("change", this.saves.files);
    },
  },

  data() {
    return {
      states: {
        canRename: true,
        progress: { state: null, value: 0 },
        file: null,
        // null = nothing | default
        // false = prev-action | falsy action
        // true = upload | renaming
      },
      saves: {
        files: [], // { index, realName, name, src, base64}
      },
      caches: {
        image: null,
        file: { realName: "", name: "", src: "", base64: "", index: 0 },
      },
    };
  },
};
</script>
