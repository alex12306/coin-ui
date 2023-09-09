import { shallowReactive, type VNode } from 'vue'

interface messageInstance {
  id: string;
  VNode: VNode;
}
export const instances: messageInstance[] = shallowReactive([])

// 拿到前一个message
export const getPrev = (id: string) => {
  const index = instances.findIndex((instance) => instance.id === id)
  let prev: undefined | messageInstance
  if (index > 0) {
    prev = instances[index - 1]
  }
  return prev
}

export const getLastTop = (id: string): number => {
  const prev = getPrev(id)
  // 如果没有前一个，那就用默认值top，这里设计为15px
  if (!prev) {
    return 15
  }
  // 如果有前一个message实例，返回它的bottom值 + 默认top值
  return prev.VNode.component!.exposed!.bottom.value + 15
}

export const deleteInstance = (id: string) => {
  const index = instances.findIndex((instance) => instance.id === id)
  // 调用传进来的onClose函数（如果有的话）
  instances[index].VNode?.props?.onClose?.()
  if (index >= 0) {
    instances.splice(index, 1)
  }
}
