<template>
    <div class="container-fluid"
        :class="{active_editor:isActive}"
        :style="style"
    >
        <go-row v-for="row in row" :key="row.indexRow" :properties="{row,section: properties.id}" :h="getStyle.height">
            <go-column v-for="column in column.filter(item => item.indexRow == row.indexRow)" :key="column.indexColumn" :properties="{column,section:properties.id}"></go-column>
        </go-row>
        <go-editor-element-tool v-if="isActive" :styleBlock="styleBtnTool" :thisElement="getThis"></go-editor-element-tool>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import {bus} from '../../main.js'
const module_status = createNamespacedHelpers('status')
    export default {
        props:{
            properties:{
                type: Object,
                required: true,
                validator(){
                    return typeof properties !== 'object'
                },
            }
        },
        data:()=>({
            isActive : false,
            row :[],
            column :[],
            name:'Section',
            styleBtnTool:{
                right: '10px',
                bottom: '0'
           },
        }),
        methods:{
            clickOutsideSection(){
                this.isActive =false
            },
            getProperties(){
                return this.properties
            },
            resetRowColumn(){
                this.row = []
                this.column = []
            }
        },
        computed:{
            getStyle(){
                return this.properties.attributes.style
            },
            style(){
                return {
                    backgroundColor: this.getStyle.backgroundColor,
                    boxShadow: this.getStyle.boxShadow,
                    margin: this.getStyle.margin,
                    height : this.getStyle.height +'px',
                    position:'relative'
                }
            },
            getThis(){
                return {
                   name:this.name,id:this.properties.id,row:null,column: null
                }
            },
            ...module_status.mapGetters([
                'getSectionIdSelected'
            ])
        },
        watch:{
            getProperties(val){
                this.resetRowColumn()
                this.row = val.attributes.rows
                this.column = val.attributes.columns
            },
            getSectionIdSelected(val){
                if(val === this.properties.id){
                    this.isActive = true
                }else{
                    this.isActive = false
                }
            }
            
        },
        mounted(){
            this.resetRowColumn()
            this.row = this.properties.attributes.rows
            this.column = this.properties.attributes.columns
            
         
        }
        
    }
</script>

<style scoped>

</style>