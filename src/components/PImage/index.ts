import PImage from './PImage.vue'
PImage.install = (app: any) => {
  app.component(PImage.name, PImage)
}

export default PImage