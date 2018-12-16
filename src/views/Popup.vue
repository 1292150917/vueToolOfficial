<template>
	<div>
		<button @click="tankuang1 = true">中间弹框</button>
		<ml-popup v-model="tankuang1" position="center"><div class="div1">弹框</div></ml-popup>
    <button @click="tankuang2 = true">上面弹框</button>
    <ml-popup v-model="tankuang2" position="top"><div class="div1">弹框</div></ml-popup>
    <button @click="tankuang3 = true">下面弹框</button>
    <ml-popup v-model="tankuang3" position="bottom"><div class="div1">弹框</div></ml-popup>
    <button @click="tankuang4 = true">右间弹框</button>
    <ml-popup v-model="tankuang4" position="left"><div class="div1">弹框</div></ml-popup>
	</div>
</template>
<script>
  export default {
  	data(){
  		return {
  			tankuang1:false,
        tankuang2:false,
        tankuang3:false,
        tankuang4:false,
  		}
  	},
    name: 'mlaopup',
    computed: {
    },
    methods: {
    }
  }
</script>
<style>
  .div1{
    padding: 20px;
    background: #fff;
  }
</style>