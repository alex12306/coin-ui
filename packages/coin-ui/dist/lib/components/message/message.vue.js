"use strict";
const vue = require("vue");
const core = require("@vueuse/core");
const instance = require("./instance.js");
require("./index.scss.js");
const _hoisted_1 = ["id"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CMessage",
  },
  __name: "message",
  props: {
    id: {},
    message: { default: "" },
    type: { default: "info" },
    showClose: { type: Boolean, default: false },
    onClose: {},
    duration: { default: 2e3 },
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const messageRef = vue.ref();
    const height = vue.ref(0);
    const visible = vue.ref(false);
    vue.onMounted(() => {
      visible.value = true;
      if (props.duration != 0)
        setTimeout(() => {
          close();
        }, props.duration);
    });
    function close() {
      visible.value = false;
    }
    const allowedTypes = ["success", "warning", "info", "error"];
    let iconClassName = "iconfont";
    const messageClassName = vue.computed(() => {
      let fullClassName = "c-message";
      fullClassName += allowedTypes.includes(props.type)
        ? ` c-message-${props.type}`
        : " c-message-info";
      iconClassName += ` icon-${props.type}`;
      return fullClassName;
    });
    const lastTop = vue.computed(() => instance.getLastTop(props.id));
    const top = vue.computed(() => lastTop.value);
    const bottom = vue.computed(() => height.value + top.value);
    const customStyle = vue.computed(() => ({
      top: `${top.value}px`,
    }));
    core.useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    __expose({
      bottom,
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createBlock(
          vue.Transition,
          {
            name: "message",
            onBeforeLeave:
              _cache[0] ||
              (_cache[0] = ($event) =>
                vue.unref(instance.deleteInstance)(_ctx.id)),
            onAfterLeave:
              _cache[1] || (_cache[1] = ($event) => _ctx.$emit("destroy")),
          },
          {
            default: vue.withCtx(() => [
              vue.withDirectives(
                vue.createElementVNode(
                  "div",
                  {
                    id: _ctx.id,
                    class: vue.normalizeClass(messageClassName.value),
                    ref_key: "messageRef",
                    ref: messageRef,
                    style: vue.normalizeStyle(customStyle.value),
                  },
                  [
                    vue.createElementVNode(
                      "i",
                      {
                        class: vue.normalizeClass(vue.unref(iconClassName)),
                      },
                      null,
                      2
                    ),
                    vue.createElementVNode(
                      "p",
                      null,
                      vue.toDisplayString(_ctx.message),
                      1
                    ),
                    vue.withDirectives(
                      vue.createElementVNode(
                        "i",
                        {
                          class: "iconfont icon-close c-message-closeButton",
                          onClick: close,
                        },
                        null,
                        512
                      ),
                      [[vue.vShow, _ctx.showClose]]
                    ),
                  ],
                  14,
                  _hoisted_1
                ),
                [[vue.vShow, visible.value]]
              ),
            ]),
            _: 1,
          }
        )
      );
    };
  },
});
module.exports = _sfc_main;
