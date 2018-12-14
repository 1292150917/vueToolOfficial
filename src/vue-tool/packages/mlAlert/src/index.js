import Vue from 'vue'
import mlAlertMsg from './index.vue'
import { monitoring, hq, cj, sc } from '../../../src/unity'
var alertMsg = {};
const mlAlert = function (options, callback) {
    if (typeof options == 'object') {
        alertMsg = options
    } else {
        alertMsg = {}
        alertMsg.content = arguments[0] || ''
        alertMsg.title = arguments[1] || ''
    }
    let node = Vue.extend(mlAlertMsg)
    var div = cj('div')
    var ne = new node({
        el: div,
        propsData: alertMsg
    })
    var mlAlHt = hq('.ml-alert')
    return new Promise(function (resolve, reject) {
        monitoring(ne, 'callback', res => {
            options.success ? options.success(res) : ''
            sc(mlAlHt) ? resolve(res) : ''
        })
    });
}
export default mlAlert