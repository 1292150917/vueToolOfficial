<template>
    <div>
        <i v-if="!html" :class="classList" :style="style" />
        <i v-html="html"></i>
    </div>
</template>

<script>
    export default {
        name: 'ml-icon',
        data(){
            return {
                html:""
            }
        },
        props: {
            name: String,
            size: String,
            color: String
        },
        computed: {
            classList() {
                if(this.name === 'success'){
                    this.html = `<svg t="1544966788627" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2900" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.size || '30px'}" height="${this.size || '30px'}"><defs><style type="text/css"></style></defs><path d="M376.87958 613.902878 158.344355 434.862155 61.411675 516.025687l377.931538 401.503397C504.790808 743.701083 710.793602 403.722948 962.587302 162.085562l-23.063275-55.614645C665.199171 281.94951 466.434222 502.672564 376.87958 613.902878z" p-id="2901" fill="${this.color || '#999'}"></path></svg>`
                    return 
                }
                if(this.name === 'fail'){
                    this.html = `<svg t="1544967538625" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3294" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.size || '30px'}" height="${this.size || '30px'}"><defs><style type="text/css"></style></defs><path d="M415.744006 1.033277A0.992256 0.992256 0 0 1 416.747526 0.000061h189.5045c0.569344 0 1.017856 0.45056 1.001472 1.033216l-21.227518 754.803667a1.062912 1.062912 0 0 1-1.05984 1.032192h-146.933752c-0.569344 0-1.04448-0.45056-1.059839-1.032192L415.744006 1.033277zM511.510528 1024c-52.595709 0-95.231994-39.866366-95.231994-89.043963 0-49.176573 42.636285-89.042939 95.231994-89.042938 52.594685 0 95.231994 39.866366 95.231994 89.042938 0 49.177597-42.637309 89.043963-95.231994 89.043963z" p-id="3295" fill="${this.color || '#999'}"></path></svg>`
                    return 
                }
                return [
                    'i-icon',
                    'fa',
                    'fa-fw',
                    {
                        [`fa-${this.name}`]: this.name
                    }
                ]
            },
            style() {
                return {
                    fontSize: this.size,
                    color: this.color
                }
            }
        }
    }
</script>