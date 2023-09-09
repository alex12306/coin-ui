"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const instances = vue.shallowReactive([]);
const getPrev = (id) => {
  const index = instances.findIndex((instance) => instance.id === id);
  let prev;
  if (index > 0) {
    prev = instances[index - 1];
  }
  return prev;
};
const getLastTop = (id) => {
  const prev = getPrev(id);
  if (!prev) {
    return 15;
  }
  return prev.VNode.component.exposed.bottom.value + 15;
};
const deleteInstance = (id) => {
  var _a, _b, _c;
  const index = instances.findIndex((instance) => instance.id === id);
  (_c =
    (_b = (_a = instances[index].VNode) == null ? void 0 : _a.props) == null
      ? void 0
      : _b.onClose) == null
    ? void 0
    : _c.call(_b);
  if (index >= 0) {
    instances.splice(index, 1);
  }
};
exports.deleteInstance = deleteInstance;
exports.getLastTop = getLastTop;
exports.getPrev = getPrev;
exports.instances = instances;
