"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const message_vue_vue_type_script_setup_true_lang = require("./message.vue.js");
const vue = require("vue");
const instance = require("./instance.js");
let idNum = 1;
const CMessage = (param) => {
  let props;
  if (param.constructor === String) props = { message: param };
  else if (param.constructor === Object) props = param;
  else props = {};
  const htmlBody = document.body;
  const container = document.createElement("div");
  const id = `message_${idNum++}`;
  const VNode = vue.createVNode(message_vue_vue_type_script_setup_true_lang, {
    id,
    ...props,
    onDestroy: () => {
      vue.render(null, container);
    },
  });
  vue.render(VNode, container);
  htmlBody.appendChild(container.firstElementChild);
  instance.instances.push({ id, VNode });
};
exports.CMessage = CMessage;
