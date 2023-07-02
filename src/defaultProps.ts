import { mapValues } from 'lodash-es'

export interface ComponentData {
  props: { [key: string]: any };
  id: string;
  name: string;
  layerName?: string;
  isHidden?: boolean;
  isLocked?: boolean;
}

// 作品信息
export interface PageData {
  props: { [key: string]: any };
  setting: { [key: string]: any };
  id?: number;
  title?: string;
  desc?: string;
  coverImg?: string;
  uuid?: string;
  latestPublishAt?: string;
  updatedAt?: string;
  isTemplate?: boolean;
  isHot?: boolean;
  isNew?: boolean;
  author?: string;
  status?: string;
}

// 组件样式属性
export const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}
// 文本组件属性
export const textDefaultProps = {
  // basic props - font styles
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}
// 图片属性
export const imageDefaultProps = {
  imageSrc: '',
  ...commonDefaultProps
}
// 形状属性
export const shapeDefaultProps = {
  backgroundColor: '',
  ...commonDefaultProps
}
// this contains all default props for all the components
// useful for inserting new component into the store
export const componentsDefaultProps = {
  'p-text': {
    props: textDefaultProps
  },
  'p-image': {
    props: imageDefaultProps
  },
  'p-shape': {
    props: shapeDefaultProps
  }
}

export const isEditingProp = {
  isEditing: {
    type: Boolean,
    default: false
  }
}

export const transformToComponentProps = (props: { [key: string]: any }, extraProps?: { [key: string]: any }) => {
  const mapProps =  mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item
    }
  })
  if (extraProps) {
    return { ...mapProps, ...extraProps }
  } else {
    return mapProps
  }
}
export default componentsDefaultProps
