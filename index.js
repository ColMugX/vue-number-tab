import numtab from './lib/numtab'

export default {
  install (Vue) {
    Vue.component(numtab.name, numtab)
  }
}

export {
  numtab
}
