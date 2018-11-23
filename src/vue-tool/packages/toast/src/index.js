import Vue from 'vue'
import toast from './index.vue'
import { monitoring, hq, cj, sc } from '../../../src/unity'
function mlToast(props) {
    let node = Vue.extend(toast)
    var div = cj('div')
    var ne = new node({
        el: div,
        propsData: props
    })
    setTimeout(res => {
        sc(hq('.ml-toast'))
    }, props.duration || 3000)
}
export default mlToast