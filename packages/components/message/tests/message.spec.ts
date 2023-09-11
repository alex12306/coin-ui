import { mount } from '@vue/test-utils'
import Message from '../message.vue'

const TEXT = '测试文本'

describe('message', () => {
  test('type', async () => {
    const vm = mount(Message, {
      props: {
        id: '1',
        type: 'success'
      }
    }).vm
    expect(vm.type).toEqual('success')
  })

  test('message content', async () => {
    const vm = mount(Message, {
      props: {
        id: '1',
        message: TEXT
      }
    }).vm
    expect(vm.message).toEqual(TEXT)
  })

  test('duration', async () => {
    // 启用模拟计时器
    vi.useFakeTimers()
    const vm = mount(Message, {
      props: {
        id: '1',
        duration: 2000
      }
    }).vm as any
    expect(vm.visible).toBe(true)
    // 这个工具可加速瞬间完成计时器
    // 调用每个启动的计时器，直到计时器队列为空
    vi.runAllTimers()
    expect(vm.visible).toBe(false)
    // 调用此方法将模拟计时器返回到其原始实现
    vi.useRealTimers()
  })

  test('showClose', async () => {
    const wrapper = mount(Message, {
      props: {
        id: '1',
        showClose: true,
        duration: 0
      }
    })
    const closeBtn = wrapper.find('.c-message-closeButton')
    expect(closeBtn.exists()).toBe(true)
    await closeBtn.trigger('click')
    expect((wrapper.vm as any).visible).toBe(false)
  })
})
