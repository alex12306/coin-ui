import { defineComponent, openBlock, createElementBlock } from "vue";
const _hoisted_1 = {
  type: "text",
  placeholder: "alex"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CInput"
  },
  __name: "input",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
