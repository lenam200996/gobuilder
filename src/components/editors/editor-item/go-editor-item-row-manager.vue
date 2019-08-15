<template>
    <div @mousedown="active" :class="{itemActive : isActive}" 
     v-closable="{
        handler: 'inActive',
        exclude: []
    }"
    ><span>1</span></div>
</template>

<script>
    export default {
        data:()=>({
            isActive :false
        }),
        methods:{
            active(){
                this.isActive = true
            },
            inActive(){
                this.isActive = false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>