<template>
  <b-table
    table-class="mt-5"
    striped
    hover
    :items="attributes"
    :fields="fields"
  >
    <template #cell(id)="row">{{ row.item.id }}</template>
    <template #cell(op)="row">
      <b-btn-group>
        <b-btn
          size="sm"
          variant="outline-danger"
          title="برای حذف دوبار کلیک کنید"
          @dblclick="() => remove(row.item.id)"
        >
          <b-icon icon="trash-fill" />
        </b-btn>
        <b-btn
          @click="() => edit(row.item.id)"
          size="sm"
          variant="outline-primary"
        >
          <b-icon icon="pencil-square" />
        </b-btn>
      </b-btn-group>
    </template>
  </b-table>
</template>

<script>
export default {
  props: ["attributes"],
  data() {
    return {
      fields: [
        { key: "op", label: "عملیات" },
        { key: "value", label: "مقدار ویژگی" },
        { key: "name", label: "نام ویژگی" },
        { key: "id", label: "#", sortable: true },
      ],
    };
  },
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
    edit(id) {
      this.$emit("edit", id);
    },
  },
};
</script>
