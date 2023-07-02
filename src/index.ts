import PText from './components/PText'
import PImage from './components/PImage'
import PShape from './components/PShape'

const components = [ 
  PText,
  PImage,
  PShape,
]

const install = (app: any) => { 
  components.map(component => {
    app.use(component)
  })
}

export { 
  install,
  PText,
  PImage,
  PShape,
}

export default {
  install
}