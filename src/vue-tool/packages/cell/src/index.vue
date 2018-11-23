<template>
    <div class="ml-cell" @click="handleClick" :style="`height:${height};line-height:${height};font-size:${size}`">
        <span :style="`float:${seat};${styleIcon}`" 
        :class="icon ? icon + ' iconfont' : ''"></span>
        <span :style="styleTitle">{{title}}</span>
        <div class="ml-cell-right">
            <span :style="styleValue">{{value}}</span>
        </div>
        <div class="ml-cell-label"><slot></slot></div>
    </div>
</template>

<script>
    /**
     * ml-cell
     * @module components/button
     * @desc 按钮
     * @param {string} [title=名字] - 名字/标题
     * @param {string} [value=内容] - 后缀显示内容
     * @param {string} [icon=icon-arrowright] - class名字 图片显示class（案例图标库）
     * @param {string} [height=100px] - 元素的高度
     * @param {string} [sise=12px] - 元素的字体大小
     * @param {string} [seat=right] - 图标位置 支持left right
     * @param {string} [label=描述字体] - 描述文字
     * @param {string} [style=string] - 根据key自动添加style 支持 styleTitle  styleValue
     * @example
     *  <ml-cell title="标题" icon="icon-arrowright" seat="left" label="描述信息" value="这是内容" @click="age"></ml-cell>
     */
    export default {
        name: "ml-cell",
        methods: {
            handleClick(evt) {
                this.$emit("click", evt);
            }
        },
        props: {
            title: String,
            value: String,
            icon: String,
            label:String,
            styleIcon:String,
            styleValue:String,
            styleTitle:String,
            height: {
                default: 'auto',
                type: String
            },
            size: {
                default: '14px',
                type: String
            },
            seat:{
                default:"right",
                type :String
            },
        }
    };
</script>
<style>
    .ml-cell {
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 7px;
        padding-bottom: 7px;
        border: 1px solid #eee;
        overflow: hidden;
        text-align: left;
    }
    .ml-cell-right {
        float: right;
        color: #888;
    }
    .ml-cell-label{
        font-size: 12px;
        color: #999;
    }
</style>