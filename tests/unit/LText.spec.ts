// https://v1.test-utils.vuejs.org/zh/api/#mount
import { shallowMount } from '@vue/test-utils'
import PText from '../../src/components/PText'
import { componentsDefaultProps } from '../../src/defaultProps'
describe('PText.vue', () => {
  const { location } = window
  beforeEach((): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delete window.location;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.location = {
          href: '',
      }
  })
  afterEach((): void => {
      window.location = location;
  })
  it('default PText render', () => {
    const msg = 'test'
    const props = {
      ...componentsDefaultProps['p-text'],
      text: msg
    }
    const wrapper = shallowMount(PText, { props })
    const style = wrapper.attributes().style
    // should have the right text
    expect(wrapper.text()).toMatch(msg)
    // should be p tag
    expect(wrapper.element.tagName).toBe('P')
    // should have one css attr
    expect(style.includes('font-size')).toBeTruthy()
    // should not have prop has been filtered
    expect(style.includes('actionType')).toBeFalsy()
  })
  it('PText with actionType and URL should trigger location href change', () => {
    const props = {
      ...componentsDefaultProps['p-text'],
      actionType: 'to',
      url: 'http://dummy.url',
      tag: 'h2'
    }
    const wrapper = shallowMount(PText, { props })
    // should be h2
    expect(wrapper.element.tagName).toBe('H2')
    // trigger the element
    wrapper.trigger('click')
    expect(window.location.href).toBe(props.url)
  })
  it('PText with isEditing should not trigger location change', () => {
    const props = {
      ...componentsDefaultProps['p-text'],
      actionType: 'to',
      url: 'http://dummy.url',
      tag: 'h2',
      isEditing: true
    }
    const wrapper = shallowMount(PText, { props })
    // trigger the element
    wrapper.trigger('click')
    expect(window.location.href).not.toBe(props.url)
  })
})
