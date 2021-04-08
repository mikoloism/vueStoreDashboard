import _ from "lodash";
const to = {
  url: (file) => URL.createObjectURL(file),
  base64: (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    }),
  unique: () => Number(_.uniqueId()),
  name: (file) => {
    return Array.from(file).slice(12, -4).join("");
  },
};

export default to;
