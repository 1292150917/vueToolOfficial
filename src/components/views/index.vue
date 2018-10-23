<template>
    <div class="index">
        <div class="nav"></div>
        <div class="left">
            <ul>
                <p class="zhinan">开发指南</p>
                <p>组建</p>
                <li @click="routerClick(item.router)" v-for="item in navMessage">{{item.name}}
                    <span>{{item.value}}</span>
                </li>
            </ul>
        </div>
        <div class="main">
            <router-view></router-view>  
        </div>
        <div class="right">
            <img src="https://mint-ui.github.io/docs/static/img/phone.5909f66.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      navMessage: [
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Cell", router: "Cell", value: "单元格" },
        { name: "Button", router: "Button1", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Button", router: "Button", value: "按钮1" }
      ]
    };
  },
  methods: {
    routerClick: function(rou) {
      this.$router.push({ name: rou });
    }
  },
  created: function() {
    hljs.initHighlightingOnLoad();
  }
};
</script>
<style scoped>
/* 内容是main */

h2,
h3 {
  font-weight: 500;
}

.index,
.left {
  height: 100%;
}

.left p {
  font-weight: 800;
  color: #333;
}

.main {
  width: 53%;
  height: 100%;
  min-width: 427px;
  /* margin-left: 53px; */
  margin: 0 auto;
  position: relative;
  left: -100px;
}

.left {
  overflow: scroll;
  width: 180px;
  position: fixed;
  top: 60px;
}

.right {
  width: 320px;
  height: 640px;
  margin-right: 20px;
  position: fixed;
  right: 30px;
  top: 70px;
}

.right img {
  width: 100%;
  height: 100%;
}

.zhinan {
  padding-top: 25px;
}

.nav {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #eee;
}

ul > li {
  list-style: none;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  color: #333;
}

ul > li > span {
  color: #999;
}

ul {
  border-right: 1px solid #eee;
  min-height: 100%;
}

ul > li:hover {
  color: rgb(128, 158, 182);
}
</style>