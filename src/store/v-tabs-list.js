import VGeneral from "@/views/tabs-view/general-view.vue";
import VPrice from "@/views/tabs-view/price-view.vue";
import VPicture from "@/views/tabs-view/picture-view.vue";
import VAttribute from "@/views/tabs-view/attribute-view.vue";
import VCaption from "@/views/tabs-view/caption-view.vue";

const tabs = [
  {
    id: 0,
    icon: `gear`,
    title: "عمومی",
    component: VGeneral,
  },
  {
    id: 1,
    icon: `tag`,
    title: "وضعیت",
    component: VPrice,
  },
  {
    active: true,
    id: 1,
    icon: `images`,
    title: "تصاویر",
    component: VPicture,
  },
  {
    id: 2,
    icon: `check-all`,
    title: "ویژگی ها",
    component: VAttribute,
  },
  {
    id: 3,
    icon: `pencil-square`,
    title: "توضیحات",
    component: VCaption,
  },
];

export default tabs.reverse();
