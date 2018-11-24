  //文档的总高度
  function getScrollHeight() {　　
    var scrollHeight = 0,
      bodyScrollHeight = 0,
      documentScrollHeight = 0;　　
    if (document.body) {　　　　
      bodyScrollHeight = document.body.scrollHeight;　　
    }　　
    if (document.documentElement) {　　　　
      documentScrollHeight = document.documentElement.scrollHeight;　　
    }　　
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
    return scrollHeight;
  }

  function getScrollTop() {　　
    var scrollTop = 0,
      bodyScrollTop = 0,
      documentScrollTop = 0;　　
    if (document.body) {　　　　
      bodyScrollTop = document.body.scrollTop;　　
    }　　
    if (document.documentElement) {　　　　
      documentScrollTop = document.documentElement.scrollTop;　　
    }　　
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
    return scrollTop;
  }

  function getWindowHeight() {　　
    var windowHeight = 0;　　
    if (document.compatMode == "CSS1Compat") {　　　　
      windowHeight = document.documentElement.clientHeight;　　
    } else {　　　　
      windowHeight = document.body.clientHeight;　　
    }　　
    return windowHeight;
  }

  function scroll(e, but, disabled, onlyOnce) {
    var x = false
    window.onscroll = function () {
      if (getScrollTop() + getWindowHeight() >= getScrollHeight() - disabled) {
        !x ? but() : ''
        onlyOnce ? x = true : ''
      } else {
        x = false
      }
    };
  }
  export {
    scroll,
    getScrollHeight,
    getWindowHeight,
    getScrollTop
  }
