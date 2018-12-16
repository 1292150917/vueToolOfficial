<template>
  <transition name="fade">
      <div ref="popupref" class="popup" v-if="checked" @click="checkedClick()">
  		<div :class="popupClass" @click.stop="stop">
  			<slot></slot>
  		</div>
  	</div>
  </transition>
</template>
/** 
 * mt-header
 * @module components/navBar
 * @desc 按钮
 * @param {string} [position=''] -  位置   位置，可选值为 top bottom right left
 * @example
 * <ml-popup v-model="pop" position="center"><div class="div1">弹框</div></ml-popup>
 */
<script>
  export default {
  	data(){
  		return {

  		}
  	},
  	model:{
  		prop: 'checked',
    	event: 'change'
  	},
  	props:{
    	checked : [Boolean],
    	position: {
    	    default: 'center',
          	type: [String]
    	}
  	},
    name: 'mlPopup',
    computed: {
    	popupClass(){
    		return [
    			'pop-div',`popup-${this.position}`
    		]
    	}
    },
    methods: {
      stop(){

      },
    	checkedClick(){
    		 this.$emit('change', !this.checked);
    	}
    },
    mounted(){
    	console.log(this.$refs.popup)
    }
  }
</script>
<style type="text/css" scoped>
.popup{
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.pop-div{
     position: fixed;
 	 transform:translate(0px,0px);
}
.popup-center{
    top: 50%;
    left: 50%;
    max-height: 100%;
    overflow-y: auto;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
}
.popup-top{
    top: 0%;
    left: 50%;
    max-height: 100%;
    overflow-y: auto;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    -webkit-overflow-scrolling: touch;
	-webkit-transform: translate3d(-50%, 0%, 0);
	transform: translate3d(-50%, 0%, 0);
}
.popup-bottom{
    bottom: 0%;
    left: 50%;
    max-height: 100%;
    overflow-y: auto;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    -webkit-overflow-scrolling: touch;
	-webkit-transform: translate3d(-50%, 0%, 0);
	transform: translate3d(-50%, 0%, 0);
}
.popup-left{
    top: 0%;
    left: 50%;
    max-height: 100%;
    overflow-y: auto;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    -webkit-overflow-scrolling: touch;
	-webkit-transform: translate3d(-50%, 0%, 0);
	transform: translate3d(-50%, 0%, 0);
}
.popup-right{
    right: 0;
    top: 0%;
    max-height: 100%;
    overflow-y: auto;
  	transition: transform 0.35s;
}
</style>