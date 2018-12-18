var Regular = {
  // 手机电话
  mobile(phone) {
    var phone = phone
    if (!/^1[345678]\d{9}$/.test(phone)) {
      return false;
    } else {
      return true
    }
  },
  //   固定电话
  tel(tel) {
    var tel = tel
    if (!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(tel)) {
      return false;
    } else {
      return true
    }
  },
  //  判断数据字段是否为空 Arr
  arrVacancy(arr) {
    var obj = Object.keys(arr)
    var s = true
    obj.forEach(res => {
      if (arr[res] === '' || arr[res] === undefined || arr[res] === null) {
        s = false
      }
    })
    return s
  },
  //   判断用户真实姓名
  name(str) {
    var re1 = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$");
    if (!re1.test(str)) {
      return false;
    }
    return true;
  },
  // url截取
  getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //构造一个含有目标参数的正则表达式对象
    var str = window.location.href.split("?")[1];
    if (str) {
      var r = str.substr(0).match(reg);
      //匹配目标参数
      if (r != null)
        return decodeURI(r[2]);
      return '';
    } else {
      return ''
    }
  },
  // 判断类型是否为特殊字符
  symbol(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]");
    if (pattern.test(str)) {
      return true;
    }
    return false;
  },
  // 判断是否为整数或者小数点
  figure(str) {
    var pattern = new RegExp("^[0-9]+\.{0,1}[0-9]{0,2}$");
    if (pattern.test(str)) {
      return true;
    }
    return false;
  },
  //   email地址 
  email(email) {
    var email = email
    if (!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(email)) {
      return false;
    } else {
      return true
    }
  },
  //   身份证正则：
  identity(identity) {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(identity) === false) {
      return false;
    } else {
      return false
    }
  },
  //   msg 替换内容  start 开始替换位置  end结束替换位置  content替换内容
  star(msg, start = 3, end = msg.length, content = '*') {
    var msga = msg.replace(/(\d{3})(\d{4})/, "$1****$2");
    console.log(msga)
    return
  },
  //   对url的分割处理
  urlSplit(url) {
    var patt1 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
    return url.match(patt1)
  }
}
export default Regular
