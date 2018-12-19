<template>
  <div>
    <p class="ptex">清凉，可靠的vueImt库</p>
    <div
      class="liLink"
      @click="messageUfclick(index)"
      v-for="(item,key,index) in message"
      :key="index"
    >
      <ml-cell :height="'47px'" :size="'16px'" :title="key" is-link></ml-cell>
      <div :class="messageUf[index] ? 'liLinkHeight' : 'liLinks'">
        <ml-cell :title="items.value" is-link v-for="(items,index) in message[key]" :key="index"></ml-cell>
      </div>
    </div>
  </div>
</template>
<script>
import indexs from "./index.vue";
export default {
  name: "Button",
  data() {
    return {
      message: [],
      messageUf: []
    };
  },
  methods: {
    messageUfclick(index) {
      this.messageUf[index] = !this.messageUf[index]
    }
  },
  created() {
    var messageUf = [];
    for (var i = 0; i < Object.keys(indexs.data().message).length; i++) {
      messageUf.push(false);
    }
    this.messageUf = messageUf;
    this.message = indexs.data().message;
  }
};
</script>
<style scoped>
.button {
  margin-top: 20px;
}
.liLink {
  overflow: hidden;
  width: 90%;
  margin-top: 10px;
  margin-left: 5%;
}
.liLinks {
  height: 0px;
  transition: height 0.6s;
  background: white;
}
.liLinkHeight {
  height: 300px;
  transition: height 0.6s;
  background: white;
}
.ptex {
  text-align: center;
  color: #999;
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 14px;
}
</style>
