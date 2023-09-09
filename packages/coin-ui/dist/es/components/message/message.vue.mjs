import { defineComponent, ref, onMounted, computed, openBlock, createBlock, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, toDisplayString, vShow } from "vue";
import { useResizeObserver } from "@vueuse/core";
import { getLastTop, deleteInstance } from "./instance.mjs";
import "./index.scss.mjs";
const _hoisted_1 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CMessage"
  },
  __name: "message",
  props: {
    id: {},
    message: { default: "" },
    type: { default: "info" },
    showClose: { type: Boolean, default: false },
    onClose: {},
    duration: { default: 2e3 }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const messageRef = ref();
    const height = ref(0);
    const visible = ref(false);
    onMounted(() => {
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
    const messageClassName = computed(() => {
      let fullClassName = "c-message";
      fullClassName += allowedTypes.includes(props.type) ? ` c-message-${props.type}` : " c-message-info";
      iconClassName += ` icon-${props.type}`;
      return fullClassName;
    });
    const lastTop = computed(() => getLastTop(props.id));
    const top = computed(() => lastTop.value);
    const bottom = computed(() => height.value + top.value);
    const customStyle = computed(() => ({
      top: `${top.value}px`
    }));
    useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    __expose({
      bottom
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "message",
        onBeforeLeave: _cache[0] || (_cache[0] = ($event) => unref(deleteInstance)(_ctx.id)),
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("destroy"))
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            id: _ctx.id,
            class: normalizeClass(messageClassName.value),
            ref_key: "messageRef",
            ref: messageRef,
            style: normalizeStyle(customStyle.value)
          }, [
            createElementVNode("i", {
              class: normalizeClass(unref(iconClassName))
            }, null, 2),
            createElementVNode("p", null, toDisplayString(_ctx.message), 1),
            withDirectives(createElementVNode("i", {
              class: "iconfont icon-close c-message-closeButton",
              onClick: close
            }, null, 512), [
              [vShow, _ctx.showClose]
            ])
          ], 14, _hoisted_1), [
            [vShow, visible.value]
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
