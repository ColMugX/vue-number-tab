import numberTab from './lib/numtab'

export default {
  install (Vue) {
    Vue.component(numberTab.name, numberTab)
  }
}

export {
  numberTab
}
