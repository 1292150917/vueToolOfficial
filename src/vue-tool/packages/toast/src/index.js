import Vue from 'vue'
import toast from './index.vue'
import start from './start'
import { monitoring, hq, cj, sc } from '../../../src/unity'
function mlToast(props) {
    mlToast.clear()
    let node = Vue.extend(toast)
    if(props.icon){
    	node = Vue.extend(start)
    }
    var div = cj('div')
    var ne = new node({
        el: div,
        propsData: props
    })
    setTimeout(res => {
        mlToast.clear()
    }, props.duration || 3000)
}
mlToast.clear = function(){
    if(hq('.ml-toast')){
          sc(hq('.ml-toast'))
        }
        if(hq('.loading')){
            sc(hq('.loading'))
        }
}

mlToast.success = function(props,call = 'success'){
    var meg = {
        message: props ||'加载中',
        position: "middle",
        duration: 2000,
        icon: call
    }
    let success = Vue.extend(start)
    var div = cj('div')
    var ne = new success({
        el: div,
        propsData: meg
    })
    setTimeout(res => {
        mlToast.clear()
    }, props.duration || 3000)
}
mlToast.fail = function(props){
    mlToast.success(props,'fail')
}
export default mlToast