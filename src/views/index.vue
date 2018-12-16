<template>
  <div class="index">
    <div class="nav"></div>
    <div class="left">
      <ul>
        <p class="zhinan">开发指南</p>
        <p class="list" @click="$router.push({path:'brief'})">快速上手</p>
        <p class="title-left">方法</p>
        <p class="title-left">组建</p>
        <li @click="routerClick(item.router)" :key="index" v-for="(item,index) in navMessage">
          {{item.name}}
          <span>{{item.value}}</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="right">
      <img src="https://mint-ui.github.io/docs/static/img/phone.5909f66.png" alt>
      <div class="right-main">
        <iframe :src="iframeSrc" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      compon: "",
      iframeSrc: "index2.html#/Button",
      navMessage: [
        { name: "Icon", router: "Icon", value: "图标" },
        { name: "Cell", router: "Cell", value: "单元格" },
        { name: "Toast", router: "Toast", value: "轻提示" },
        { name: "List", router: "List", value: "瀑布流滚动" },
        { name: "NavBar", router: "NavBar", value: "导航栏" },
        { name: "Button", router: "Button", value: "按钮" },
        { name: "Popup", router: "Popup", value: "弹出层" },
        { name: "Swipe", router: "Swipe", value: "轮播" },
        { name: "Sticky", router: "Sticky", value: "粘贴定位" },
        { name: "Switch", router: "Switch", value: "开关" },
        { name: "mlLazy", router: "mlLazy", value: "图片懒加载" },
        { name: "mlAlert", router: "mlAlert", value: "弹框" },
        { name: "Loading", router: "Loadings", value: "加载" },
      ]
    };
  },
  methods: {
    routerClick: function(rou) {
      this.$router.push({ name: rou });
      this.compon = rou;
      this.iframeSrc = `index2.html#/${rou}`;
    }
  },
  components: {},
  created: function() {
    this.iframeSrc = `index2.html` + location.hash
  }
};
</script>
<style scoped>
.title-left {
  font-size: 14px;
  font-weight: 800 !important;
}
.list {
  font-size: 14px;
  margin-top: 25px;
  margin-bottom: 17px;
  font-weight: 500 !important;
}
/* 内容是main */
.right-main {
  height: 79%;
  width: 89%;
  background: white;
  position: absolute;
  top: 11%;
  left: 5.5%;
}
iframe {
  width: 100%;
  height: 100%;
}
h2,
h3 {
  font-weight: 500;
}

.index,
.left {
  height: 100%;
}
.left{
  height:91%;
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
  overflow-y: auto;
  width: 230px;
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
  font-size: 12px;
}

ul {
  border-right: 1px solid #eee;
  min-height: 100%;
  text-indent: 9px;
}

ul > li:hover {
  color: rgb(128, 158, 182);
}
</style>