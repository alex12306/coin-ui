import * as index$1 from "../components/index.mjs";
import { CMessage } from "../components/message/index.mjs";
import { default as default2 } from "../components/button/button.vue.mjs";
const index = {
  // 提供全局导入
  install: (app) => {
    const componentMap = index$1;
    Object.keys(index$1).forEach((item) => {
      app.component(componentMap[item].name, componentMap[item]);
    });
  }
};
export {
  default2 as CButton,
  CMessage,
  index as default
};
