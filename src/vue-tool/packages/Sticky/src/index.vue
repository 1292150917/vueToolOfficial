<template>
    <div class="ml-sticky" :style="style">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ml-sticky',
        props: {
            top: {
                type: [Number, String],
                default: 0
            },
            top: {
                type: [Number, String],
                default: 1
            },
        },
        computed: {
            style() {
                return {
                    'top': this.top + 'px',
                    'z-index' : this.zIndex
                }
            }
        }
    }
</script>
<style>
    .ml-sticky {
        position: sticky;
        top: 30px;
    }
</style>