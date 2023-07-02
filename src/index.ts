import PText from './components/PText'
// import LImage from './components/LImage'
// import LShape from './components/LShape'
// import FinalPage from './components/FinalPage'
const components = [ 
  PText,
  // LImage,
  // LShape,
  // FinalPage
]

const install = (app: any) => { 
  components.map(component => {
    app.use(component)
  })
}

export { 
  // install,
  PText,
  // LImage,
  // LShape,
  // FinalPage
}

export default {
  install
}