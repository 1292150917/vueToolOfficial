<template>
    <div class="ml-swipe-item" :style="`width:${width}px`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ml-swipe-item',
    data() {
        return {
            width: 0
        }
    },
    methods: {
    },
    created: function () {
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
}
</script>
<style scoped>
    .ml-swipe-item{
        height: 100%;
        float: left;
        width: 100%;
        overflow: hidden;
    }
</style>