<template>
  <button 
  @click="handleClick"
  :disabled=disabled
  :class="plain ? 'ghost' : ''"
  ><slot></slot></button>
</template>

<script>
/**
 * mt-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @example
 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
 */
export default {
  name: "ml-button",
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  props: {
    disabled: Boolean,
    plain: Boolean
  }
};
</script>
<style scoped>
button {
  line-height: 100px;
  width: 300px;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  color: #333;
  border: 0;
}
.ghost {
  background: none;
  border: 1px solid #333;
}
</style>
