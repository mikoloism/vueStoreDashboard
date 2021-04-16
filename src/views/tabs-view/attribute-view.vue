<template>
  <b-row align-h="center">
    <b-col cols="11">
      <v-input-box :id="id" :editable="editable" @add="addAttribute" />
      <v-attribute-list
        @edit="editAttribute"
        @remove="removeAttribute"
        :attributes="attributes"
      />
    </b-col>
  </b-row>
</template>

<script>
import VInputBox from "@/components/attributes/v-input-box.vue";
import VAttributeList from "@/layouts/attribute/v-attribute-list";
export default {
  data() {
    return {
      editable: null,
      id: 0,
      attributes: [],
    };
  },
  methods: {
    addAttribute({ name, value }) {
      let duplicate = this.attributes.findIndex((item) => item.name === name);
      if (duplicate === -1)
        this.attributes.push({ id: ++this.id, name, value });
      else {
        let forEdit = this.attributes.find(
          (item) => item.id === this.editable.id && item
        );
        this.editable = null;
        forEdit.value = value;
      }
    },
    removeAttribute(index) {
      let attrs = this.attributes.filter(({ id }) => id !== index);
      this.attributes = attrs;
    },
    editAttribute(index) {
      let editable = this.attributes.filter((attr) => attr.id === index)[0];
      this.editable = editable;
    },
    StoreSync() {},
  },
  components: { VInputBox, VAttributeList },
};
</script>

<style></style>
