"use strict";
const vue = require("vue");
const loading = require("../icon/loading.vue.js");
require("./index.scss.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CButton",
  },
  __name: "button",
  props: {
    type: { default: "default" },
    size: { default: "default" },
    round: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
  setup(__props) {
    const props = __props;
    const className = vue.computed(() => {
      let fullClassName = "c-button";
      fullClassName += allowedTypes.includes(props.type)
        ? ` c-button-${props.type}`
        : " c-button-default";
      fullClassName += props.disabled ? " c-button-disabled" : "";
      fullClassName += props.round ? " c-button-round" : "";
      fullClassName += props.size != "default" ? ` c-button-${props.size}` : "";
      return fullClassName;
    });
    const allowedTypes = [
      "default",
      "primary",
      "success",
      "warning",
      "danger",
      "info",
    ];
    const allowedSizes = ["small", "default", "large"];
    vue.watchEffect(() => {
      if (props.type && !allowedTypes.includes(props.type)) {
        console.warn(
          `Invalid type "${
            props.type
          }" for CButton. Valid types are: [${allowedTypes.join(", ")}]`
        );
      }
      if (props.size != "default" && !allowedSizes.includes(props.size)) {
        console.warn(
          `Invalid size "${
            props.size
          }" for CButton. Valid sizes are: [${allowedSizes.join(", ")}]`
        );
      }
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "button",
          {
            class: vue.normalizeClass(className.value),
          },
          [
            _ctx.loading
              ? (vue.openBlock(), vue.createBlock(loading, { key: 0 }))
              : vue.createCommentVNode("", true),
            vue.createElementVNode("span", null, [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createTextVNode("默认按钮"),
              ]),
            ]),
          ],
          2
        )
      );
    };
  },
});
module.exports = _sfc_main;
