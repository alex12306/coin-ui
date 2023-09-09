import messageComponent from './message.vue'
import { createVNode, render } from 'vue'
import { instances } from './instance'
let idNum = 1
interface messageProps {
  /**
   * @description dom元素id
   */
  id: string;
  /**
   * @description 文本内容
   */
  message?: string;
  /**
   * @description 类型
   */
  type?: 'success' | 'warning' | 'info' | 'error';
  /**
   * @description 关闭message按钮
   */
  showClose?: boolean;
  /**
   * @description message关闭后的回调函数
   */
  onClose?: () => void;
  /**
   * @description message展示时长，单位毫秒，设为 0 则不关闭
   */
  duration?: number;
}
// id为组件内部使用，不需要用户传，用Omit去掉
type messageParam = string | Omit<messageProps, 'id'>;
const CMessage = (param: messageParam) => {
  let props
  if (param.constructor === String) props = { message: param }
  else if (param.constructor === Object) props = param
  // 防止用户传其他东西进来捣乱
  else props = {}
  const htmlBody = document.body
  // 拿到新建的DOM元素，以后删除会用到
  const container = document.createElement('div')
  const id = `message_${idNum++}`
  // 创建虚拟节点，内容为message组件
  const VNode = createVNode(messageComponent, {
    id,
    ...(props as object),
    onDestroy: () => {
      // 未来删除时会用到，将整个container从 DOM 中移除(也就是里面的message也没了)
      render(null, container)
    }
  })
  // 渲染该虚拟节点然后塞进前面新建的DOM元素里面
  render(VNode, container)
  // 向 document.body 中添加div里面的DOM元素(外面的div不需要)：message组件
  htmlBody.appendChild(container.firstElementChild!)
  // 存进message实例数组里面，用于计算每个message的top属性
  instances.push({ id, VNode })
}
export type { messageProps }
export { CMessage }
