<template>
    <div class="wrap-element-tool" :style="styleBlock">
        <ul>
            <li class="name-element"><span>{{name}}</span></li>
            <li class="setting-element"><span class="icon-setting"></span></li>
            <li class="delete-element"><span class="icon-delete"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span></li>
            <li class="up-element"><span class="icon-arrow-next"></span></li>
            <li class="down-element"><span class="icon-arrow-next"></span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            styleBlock:{
                type:Object,

            },
            name:{
                type:String,
                default:'Noname',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>