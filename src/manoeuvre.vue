<template>
  <div id="app">
    <nav-bar
      left-text
      @click-left="se"
      :title="$router.history.current.meta.name"
      :left-arrow="true"
    ></nav-bar>
    <router-view/>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "App",
  created: function() {},
  methods: {
    se() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
body {
  background: #fafafa;
  min-height: 100vh;
}
</style>
