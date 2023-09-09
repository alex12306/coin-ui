"use strict";
Object.defineProperties(exports, {
  __esModule: { value: true },
  [Symbol.toStringTag]: { value: "Module" },
});
const index$2 = require("../components/index.js");
const index$1 = require("../components/message/index.js");
const button_vue_vue_type_script_setup_true_lang = require("../components/button/button.vue.js");
const index = {
  // 提供全局导入
  install: (app) => {
    const componentMap = index$2;
    Object.keys(index$2).forEach((item) => {
      app.component(componentMap[item].name, componentMap[item]);
    });
  },
};
exports.CMessage = index$1.CMessage;
exports.CButton = button_vue_vue_type_script_setup_true_lang;
exports.default = index;
