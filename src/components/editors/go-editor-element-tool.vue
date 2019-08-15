<template>
    <div class="wrap-element-tool" :style="styleBlock">
        <ul>
            <li class="name-element" @click="openSetting"><span>{{thisElement.name}}</span></li>
            <li class="setting-element"><span class="icon-setting" @click="openSetting"></span></li>
            <li class="delete-element"><span class="icon-delete"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span></li>
            <li class="up-element"><span class="icon-arrow-next"></span></li>
            <li class="down-element"><span class="icon-arrow-next"></span></li>
        </ul>
    </div>
</template>

<script>
import {bus} from '../../main.js'

    export default {
        props:{
            styleBlock:{
                type:Object,

            },
            thisElement:{
                type:Object,
                default:{
                    name:'noname',
                    id:null,
                    row:null,
                    column:null
                },
            },
        
        },
        methods:{
            openSetting(){
                bus.$emit('openSetting',this.thisElement)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>