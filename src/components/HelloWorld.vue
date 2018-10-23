<template>
  <div>
    <ml-swipe :duration="Num" @autochange="age">
      <ml-swipe-item><div style="background: red;">1</div></ml-swipe-item>
      <ml-swipe-item><div style="background: #333;">2</div></ml-swipe-item>
      <ml-swipe-item><div style="background: #42b983;">3</div></ml-swipe-item>
      <ml-swipe-item><div style="background: #bbb;">4</div></ml-swipe-item>
      <ml-swipe-item><div style="background: #333;">5</div></ml-swipe-item>
      <ml-swipe-item><div style="background: #42b983;">6</div></ml-swipe-item>
    </ml-swipe>
  </div>
</template>

<script>
  import { mlToast, mlAlert } from 'vue-tool'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        ina:false,
        Num:1000
      }
    },
    methods: {
      age: function (a) {
        console.log(a)
      }
    },
    created: function () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
div{
  height: 150px;
  width: 100vw;
}
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>