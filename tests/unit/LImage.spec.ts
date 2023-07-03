import { shallowMount } from '@vue/test-utils'
import PImage from '../../src/components/PImage'
import { componentsDefaultProps } from '../../src/defaultProps'
describe('PImage.vue', () => {
  it('default PImage render', () => {
    const srcPath = 'test.jpg'
    const props = {
      ...componentsDefaultProps['p-image'],
      imageSrc: srcPath
    }
    const wrapper = shallowMount(PImage, { props })
    const style = wrapper.attributes().style
    const src = wrapper.attributes().src
    // should match the path
    expect(src).toMatch(srcPath)
    // should be Img tag
    expect(wrapper.element.tagName).toBe('IMG')
    // should not have prop has been filtered
    expect(style.includes('imageSrc')).toBeFalsy()
  })
})
