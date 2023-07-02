import PText from './components/PText'
import PImage from './components/PImage'
// import LShape from './components/LShape'
// import FinalPage from './components/FinalPage'
const components = [ 
  PText,
  PImage,
  // LShape,
  // FinalPage
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
  // LShape,
  // FinalPage
}

export default {
  install
}