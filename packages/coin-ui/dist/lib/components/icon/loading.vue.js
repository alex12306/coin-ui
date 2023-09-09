"use strict";
const vue = require("vue");
const _pluginVue_exportHelper = require("../../_virtual/_plugin-vue_export-helper.js");
const _sfc_main = {};
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "15",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMid",
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode(
  "circle",
  {
    cx: "50",
    cy: "50",
    fill: "none",
    stroke: "gray",
    "stroke-width": "10",
    r: "35",
    "stroke-dasharray": "164.93361431346415 56.97787143782138",
  },
  [
    /* @__PURE__ */ vue.createElementVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      repeatCount: "indefinite",
      dur: "1s",
      keyTimes: "0;1",
      values: "0 50 50;360 50 50",
    }),
  ],
  -1
);
const _hoisted_3 = [_hoisted_2];
function _sfc_render(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const Loading = /* @__PURE__ */ _pluginVue_exportHelper(_sfc_main, [
  ["render", _sfc_render],
]);
module.exports = Loading;
