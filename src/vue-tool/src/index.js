import button from '../packages/button'
import cell from '../packages/cell'
import swipe from '../packages/swipe'
import swipeItem from '../packages/swipe/src/swipeItem'
// 请提示  不需要注册组建
import mlAlert from '../packages/ml-alert'
import mlToast from '../packages/toast'
import InfiniteScroll from '../packages/InfiniteScroll'
import mlLazy from '../packages/mlLazy'
import './assets/iconfont.css'
const install = function (Vue, cog = {}) {
  Vue.component(button.name, button)
  Vue.component(cell.name, cell)
  Vue.component(swipe.name, swipe)
  Vue.component(swipeItem.name, swipeItem)
}
export {
  install,
  button,
  cell,
  mlAlert,
  mlToast,
  swipe,
  mlLazy,
  InfiniteScroll
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install;
