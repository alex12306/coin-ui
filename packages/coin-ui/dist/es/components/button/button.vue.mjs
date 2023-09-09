import { defineComponent, computed, watchEffect, openBlock, createElementBlock, normalizeClass, createBlock, createCommentVNode, createElementVNode, renderSlot, createTextVNode } from "vue";
import Loading from "../icon/loading.vue.mjs";
import "./index.scss.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CButton"
  },
  __name: "button",
  props: {
    type: { default: "default" },
    size: { default: "default" },
    round: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const className = computed(() => {
      let fullClassName = "c-button";
      fullClassName += allowedTypes.includes(props.type) ? ` c-button-${props.type}` : " c-button-default";
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
      "info"
    ];
    const allowedSizes = ["small", "default", "large"];
    watchEffect(() => {
      if (props.type && !allowedTypes.includes(props.type)) {
        console.warn(
          `Invalid type "${props.type}" for CButton. Valid types are: [${allowedTypes.join(", ")}]`
        );
      }
      if (props.size != "default" && !allowedSizes.includes(props.size)) {
        console.warn(
          `Invalid size "${props.size}" for CButton. Valid sizes are: [${allowedSizes.join(", ")}]`
        );
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(className.value)
      }, [
        _ctx.loading ? (openBlock(), createBlock(Loading, { key: 0 })) : createCommentVNode("", true),
        createElementVNode("span", null, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode("默认按钮")
          ])
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
