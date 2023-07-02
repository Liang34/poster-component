<template>
<component :is="tag" @click.prevent="handleClick" :style="styleProps" class="p-text-component">
  {{text}}
</component>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useStylePick from '../../hooks/useStylePick'
import useComponentClick from '../../hooks/useComponentClick'
import { componentsDefaultProps, transformToComponentProps, isEditingProp } from '../../defaultProps'


const extraProps = {
  tag: {
    type: String,
    default: 'p'    
  },
  ...isEditingProp
}
const defaultProps = transformToComponentProps(componentsDefaultProps['p-text'].props, extraProps)

// array that contains style props
export default defineComponent({
  name: 'p-text',
  props: {
    ...defaultProps
  },
  setup (props) {
    const styleProps = useStylePick(props)
    const handleClick = useComponentClick(props)
    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<style scoped>
h2.p-text-component, p.p-text-component {
  margin-bottom: 0;
}
button.p-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.p-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>
