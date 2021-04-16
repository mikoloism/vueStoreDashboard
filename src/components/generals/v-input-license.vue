<template>
  <b-row>
    <b-form-group
      class="col-7"
      label-for="v-general__product--licens-origin"
      label="مرجع صادرکننده مجوز (اختیاری)"
    >
      <b-form-input
        type="text"
        id="v-general__product--licens-origin"
        v-model="origin"
        @input="handleOrigin"
      />
    </b-form-group>
    <b-form-group
      class="col-5"
      label-for="v-general__product--licens-serial"
      label="سریال مجوز (اختیاری)"
    >
      <b-form-input
        type="text"
        id="v-general__product--licens-serial"
        v-model="serial"
        :state="stateSerial"
        @input="handleSerial"
        :formatter="(text) => this.serialer(text)"
      />
    </b-form-group>
  </b-row>
</template>

<script>
export default {
  data() {
    return { origin: "", serial: "", stateSerial: null };
  },
  methods: {
    handleOrigin() {
      this.$emit("change", "licenseOrigin", this.origin);
    },
    handleSerial() {
      if (this.serial.length !== 0) {
        this.stateSerial = this.serial.length > 7;
        this.$emit("state", "licenseSerial", this.stateSerial);
        this.$emit("change", "licenseSerial", this.serial);
      }
    },
    serialer(text) {
      // n3/nx
      if (/^([\d]{0,}|[\d]{0,3}\/[\d]{0,})$/.test(text)) {
        let t = Array.from(text);
        if (t.length > 3) {
          return `${t.slice(0, 3).join("")}/${t.slice(4).join("")}`;
        } else return t.join("");
      }
    },
  },
};
</script>
