import _sfc_main from "./message.vue.mjs";
import { createVNode, render } from "vue";
import { instances } from "./instance.mjs";
let idNum = 1;
const CMessage = (param) => {
  let props;
  if (param.constructor === String)
    props = { message: param };
  else if (param.constructor === Object)
    props = param;
  else
    props = {};
  const htmlBody = document.body;
  const container = document.createElement("div");
  const id = `message_${idNum++}`;
  const VNode = createVNode(_sfc_main, {
    id,
    ...props,
    onDestroy: () => {
      render(null, container);
    }
  });
  render(VNode, container);
  htmlBody.appendChild(container.firstElementChild);
  instances.push({ id, VNode });
};
export {
  CMessage
};
