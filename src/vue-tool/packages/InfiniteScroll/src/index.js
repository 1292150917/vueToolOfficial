import Vue from 'vue';
import {
  scroll,
  getScrollHeight,
  getWindowHeight
} from './scroll'

function InfiniteScroll() {}

/**
* infinite-scroll
* @module components/Infinite-scroll
* @desc 按钮
* @param {fun} [infinite-scroll-disabled=0] - 滚动的距离到浏览器底部的距离 和[infinite-scroll]同时使用则会是距离底部距离额外加上多少
* @param {fun} [infinite-scroll] - 到底底部的返回值 callback
* @param {boolean} [only-once-teue] - 需要使用infinite-scroll-disabled以后禁止1px执行一次 如果需要可以更改为false  和[self-adaption]同时使用则会是距离底部距离额外加上多少
* @param {boolean} [self-adaption = false] 自适应高度，到达使用元素元素最底部触发 默认是针对[infinite-scroll]绑定的元素
* @example
   
    //   // disabled = 
  <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="10">
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </ul>
*/

function funs(el) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(document.body.offsetHeight - (el.offsetHeight + el.offsetTop))
    }, 500);
  });
}

function install() {
  Vue.directive('infinite-scroll', {
    bind: function (el, binding) {
      var disabled = el.getAttribute('infinite-scroll-disabled') || 0
      // 需要使用infinite-scroll-disabled以后推荐使用这个，否则就每1px执行一次，因为距离到底部了 
      var selfAdaption = el.getAttribute('self-adaption') || false
      var onlyOnce = el.getAttribute('only-once') || true
      if (selfAdaption) {
        Vue.prototype.$nextTick(function () {
          funs(el).then(res => {
            scroll(el, binding.value, Number(disabled) + Number(res), onlyOnce)
          })
        })
        return
      }
      scroll(el, binding.value, disabled, onlyOnce)
    },
    unbind: function () {
      window.onscroll = null
    }
  })
}
InfiniteScroll.install = install
if (!Vue.prototype.$isServer && window.Vue) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install); // eslint-disable-line
}
InfiniteScroll.install()
export default InfiniteScroll
