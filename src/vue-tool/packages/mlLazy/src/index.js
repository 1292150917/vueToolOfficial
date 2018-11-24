import Vue from 'vue'
import index from '../index';
// 方法：  <img v-ml-lazy="item.image" alt="">
function mlLazy() {

}
let elvAl = []
var distance = 50 //距离底部的距离 
var docwid = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
mlLazy.install = () => {
  Vue.directive('ml-lazy', {
    inserted: function (el, binding) {
      if (window.scrollY + docwid >= el.offsetTop) {
        el.src = binding.value
      } else {
        elvAl.push({
          el: el,
          offtop: el.offsetTop,
          val: binding.value
        })
      }
    },
    bind: function (e) {
      elvAl = [];
      !window.onscroll || !window.onscroll.prototype.mlScroll ? mlScroll() : ''
    }
  })
}

function mlScroll() {
  if(window.onscroll){
    window.onscroll.prototype.mlScroll = true
    return
  }
  window.addEventListener('scroll', function (e) {
    //   50为判断距离底部的位置
    elvAl.length != 0 && elvAl[0].offtop <= window.scrollY + docwid + distance ? funSrc(e) : ''
  })
}

function funSrc(e) {
  elvAl.forEach((item, index) => {
    //   50为判断距离底部的位置
    if (window.scrollY + docwid + distance > item.offtop) {
      item.el.src = item.val
      elvAl.splice(index, 1)
    }
  })
}
mlLazy.install()
export default mlLazy
