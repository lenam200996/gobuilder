<template>
    <div class="md-layout row" :style="getStyle"
    :class="{active_editor:isActive}"
    v-closable="{
        handler: 'clickOutsideRow',
        exclude: []
    }"
    >
        <slot></slot>
    <go-editor-element-tool  v-if="isActive" :styleBlock="styleBtnTool" :name="name"></go-editor-element-tool>
    <!-- <go-editor-element-setting :type="name"></go-editor-element-setting> -->
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

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
             }
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
            ])
        },
        watch:{
            getRowIndexSelected(val){
                if(val === this.getRow && this.getSectionIdSelected === this.properties.section){
                    this.isActive = true
                }else{
                    this.isActive = false
                }
            }
        }
    }
</script>

<style scoped>

</style>