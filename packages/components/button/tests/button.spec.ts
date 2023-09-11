import { mount } from '@vue/test-utils'
import Button from '../button.vue'

const TEXT = '测试插槽内容'

describe('button', () => {
  test('type', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'danger'
      }
    })
    expect(wrapper.classes()).toContain('c-button-danger')
  })

  test('size', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'large'
      }
    })
    expect(wrapper.classes()).toContain('c-button-large')
  })

  test('round', () => {
    const wrapper = mount(Button, {
      props: {
        round: true
      }
    })
    expect(wrapper.classes()).toContain('c-button-round')
  })

  test('slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: TEXT
      }
    })

    expect(wrapper.text()).toEqual(TEXT)
  })
})
