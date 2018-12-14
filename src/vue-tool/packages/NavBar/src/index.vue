<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <i v-if="leftArrow"  @click="clickLeft" class="fa fa-angle-left fa-lg" aria-hidden="true"></i>
      <div class="nav-slot-left" @click="clickLeft">
        <slot name="left">
         <div>{{leftText}}</div>
        </slot>
      </div>
    </div>
    <div class="nav-bar-title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="nav-bar-right" @click="clickRight">
      <slot name="right">
         <div>{{rightText}}</div>
      </slot>
    </div>
  </div>
</template>
/** 
 * mt-header
 * @module components/navBar
 * @desc 按钮
 * @param {string} [title=''] -  标题
 * @param {string} [left-text=''] - 左侧文案
 * @param {string} [right-text=''] -  右侧文案
 * @param {Boolean} [left-arrow=false] - 是否显示左侧箭头
 * @param {string} [cancelButtonText=取消] - 取消按钮内容
 * @param {string} [confirmButtonText=确认] - 确认按钮内容
 * @example
 * <nav-bar title="标题"><div slot="left">左侧内容</div></nav-bar>
 * @Slot
 * @param {string} [Slot=title] - 自定义标题
 * @param {string} [Slot=left] - 自定义左侧区域内容
 * @param {string} [Slot=right] - 自定义右侧区域内容
 * @Event
 * @param {string} [click-left=fun] - 点击左侧按钮时触发
 * @param {string} [click-right=fun] - 点击右侧按钮时触发  
 */
<script>
  export default {
    name: 'navBar',
    props: {
       title: {
          default: '',
          type: [String]
       },
       leftText:{
          default: '',
          type: [String]
       },
       rightText:{
          default: '',
          type: [String]
       },
       leftArrow:false
    },
    computed: {
    },
    methods: {
      clickLeft(e){
        this.$emit('click-left',e)
      },
      clickRight(){
        this.$emit('click-right',e)
      }
    }
  }
</script>
<style type="text/css">
  .nav-bar{
    height: 45px;
    line-height: 45px;
    background: #fff;
    position: relative;
  }
  .fa{
    line-height: 6px;
    margin-right: 5px;
  }
  .nav-slot-left{
    float: right;
    font-size: 13px;
  }
  .slot{
    display: inline-block;
  }
  .nav-bar-left{
    position: absolute;
    cursor:pointer;
    left: 15px;
    top: 0;
    color: #1989fa;
  }
  .nav-bar-title{
    width: 100%;
    text-align: center;  
    font-size: 15px;
    font-weight: 500;
  }
  .nav-bar-right{
    position: absolute;
    top: 0;
    color: #1989fa;
    right: 15px;
    cursor:pointer;
    font-size: 13px;
  }
</style>