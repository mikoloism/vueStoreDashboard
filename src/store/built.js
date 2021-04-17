// all `value` is `${id} ${name}`
// before mount first component, we should create this as first

let category = [
  { text: "دسته بندی ها", value: null },
  { text: "نوشیدنی ها", value: "drops" },
  { text: "خوراکی ها", value: "foods" },
  { text: "الکترونیک و برق", value: "electric" },
  { text: "خودرو", value: "car" },
  { text: "کامپیوتر و آی تی", value: "computer" },
];
let subcategory = {
  drops: [
    { text: "دمنوش ها", value: "dams" }, // :)
    { text: "آبمیوه ها", value: "juices" },
    { text: "نوشیدنی های گاز دار", value: "kolas" },
  ],
  foods: [
    { text: "پیتزا", value: "pizza" },
    { text: "محلی", value: "native" },
    { text: "صبحانه", value: "breakfast" },
  ],
  electric: [
    { text: "برد", value: "board" },
    { text: "ابزار", value: "tools" },
    { text: "باتری", value: "battery" },
  ],
  car: [
    { text: "لوازم جانبی", value: "assistant" },
    { text: "دزدگیر", value: "antispy" },
  ],
  computer: [
    { text: "کیس و مادربرد", value: "motherboard" },
    { text: "مانیتور", value: "monitor" },
    { text: "صفحه کلید و مواس", value: "keyboard-mouse" },
    { text: "کابل", value: "cabel" },
  ],
};

let brands = [
  { text: "ایران خودرو", value: "ikco" },
  { text: "کیان", value: "kyan" },
  { text: "کوکاکولا", value: "kocakola" },
  { text: "سامسونگ", value: "samsung" },
];

let units = [
  { text: "کیلوگرم (Kg)", value: "kilogram" },
  { text: "گرم (g)", value: "gram" },
  { text: "لیتر (lt)", value: "liter" },
  { text: "سی سی (cc)", value: "cc" },
  { text: "دانه", value: "item" },
];

export default {
  category,
  subcategory,
  brands,
  units,
};
