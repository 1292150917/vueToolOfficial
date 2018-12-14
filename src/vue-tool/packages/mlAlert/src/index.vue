<template>
    <div class="ml-alert">
        <div class="ml-alert-main">
            <div class="ml-alert-title">{{title}}</div>
            <div class="ml-alert-content">{{content}}</div>
            <div class="ml-alert-button">
                <button @click="cancelClick('cancel')" class="ml-alert-cenal" v-if="showCancelButton">{{cancelButtonText}}</button>
                <button @click="cancelClick('confirm')" class="ml-alert-confirm" v-if="showConfirmButton">{{confirmButtonText}}</button>
            </div>
        </div>
    </div>
</template>

<script>
/** 
 * mt-header
 * @module components/button
 * @desc 按钮
 * @param {string} [title=xxx] - title名字
 * @param {boolean} [content=xxx] - 内容
 * @param {boolean} [showCancelButton=true] - 是否显示取消按钮
 * @param {boolean} [showConfirmButton=true] - 是否显示确认按钮
 * @param {string} [cancelButtonText=取消] - 取消按钮内容
 * @param {string} [confirmButtonText=确认] - 确认按钮内容
 * @example
 * mlAlert('提示1','内容1').then(res=>{
      console.log(res)
   })
   mlAlert({title:"xxxx",content:xxx}).then(res=>{
      console.log(res)
   })
 */
export default {
  name: "mlAlert",
  data() {
    return {
      callback: null
    };
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
    cancelClick(evt) {
      this.callback = evt;
    }
  },
  props: {
    title: String,
    content: String,
    showConfirmButton: {
      default: true,
      type: Boolean
    },
    confirmButtonText: {
      default: "确认",
      type: String
    },
    cancelButtonText: {
      default: "取消",
      type: String
    },
    showCancelButton: {
      default: true,
      type: Boolean
    }
  }
};
</script>
<style scoped>
.ml-alert {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.ml-alert-main {
  width: 85%;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  border-radius: 3px;
}

.ml-alert-cenal {
  color: #333;
  border-right: 1px solid #eee !important;
}

.ml-alert-confirm {
  color: #26a2ff;
}

.ml-alert-content {
  padding: 10px 20px 15px;
  border-bottom: 1px solid #ddd;
  min-height: 36px;
  position: relative;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ml-alert-title {
  padding-top: 16px;
  font-size: 16px;
  font-weight: 700;
}

.ml-alert-button {
  display: flex;
}

.ml-alert-button button {
  flex: 1;
  background: none;
  border: 0;
  line-height: 35px;
  height: 35px;
}
</style>