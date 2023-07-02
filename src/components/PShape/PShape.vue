<template>
  <div @click.prevent="handleClick" :style="styleProps" class="l-shape-component" :draggable="false">
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useStylePick from '../../hooks/useStylePick'
import useComponentClick from '../../hooks/useComponentClick'
import { componentsDefaultProps, transformToComponentProps, isEditingProp } from '../../defaultProps'
const defaultProps = transformToComponentProps(componentsDefaultProps['p-shape'].props, isEditingProp)
// array that contains style props
export default defineComponent({
  name: 'p-shape',
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
