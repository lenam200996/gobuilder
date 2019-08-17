<template>
    <div class="wrap-element-tool" :style="styleBlock">
        <ul>
            <li class="name-element" @click="openEdit"><span>{{thisElement.name}}</span></li>
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
                    type:null,
                    name:'noname',
                    id:null,
                    section:null,
                    row:null,
                    column:null
                },
            },
        
        },
        methods:{
            openEdit(){
                if(this.thisElement.type === 'paragraph'){
                    bus.$emit('openEdit',{id : this.thisElement.id})
                } else{
                    bus.$emit('openSetting',this.thisElement)
                }
            },
            openSetting(){
                bus.$emit('openSetting',this.thisElement)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>