<template>
    <div class="md-layout row" :style="getStyle"
    :class="{active_editor:isActive}"
   
    >
        <slot></slot>
    <go-editor-element-tool  v-if="isActive" :styleBlock="styleBtnTool" :thisElement="getThis"></go-editor-element-tool>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import {bus} from '../../main.js'

const module_status = createNamespacedHelpers('status')
    export default {
        props:{
            properties:{
                type:Object,
                required:true,
                validator(){
                    return typeof properties != 'object' 
                }
            },
            h:{
                type:Number,
                required:true,
                validator(value){
                    return value > 50
                }
            }
        },
        data:()=>({
             isActive:false,
             name:'Row',
             styleBtnTool:{
                right: '50%',
                bottom: '0'
             },
             type:'row'
        }),
        methods:{
            
            clickOutsideRow(){
                this.isActive = false
            }
        },
        computed:{
            getSize(){
                return this.properties.row.sizeRow
            },
            getStyle(){
                return {
                    height: this.getSize +'%',
                    background : this.properties.row.bgRow
                }
            },
            getSection(){
                return this.properties.section
            },
            getRow(){
                return this.properties.row.indexRow  
            },
            ...module_status.mapGetters([
                'getRowIndexSelected','getSectionIdSelected'
            ]),
            getThis(){
                return {
                    type:this.type,name:this.name,id:null,section:this.properties.section,row:this.properties.row.indexRow,column: null
                }
            }
        },
        watch:{
            getRowIndexSelected(val){
                if(val === this.getRow && this.getSectionIdSelected === this.properties.section){
                    this.isActive = true
                }else{
                    this.isActive = false
                }
            }
        },
        mounted(){
           
        }
    }
</script>

<style scoped>

</style>