<template>
    <div class="md-layout-item" ref="column" :class="{active_editor:isActive}"
    @click="clickColumn"
    v-closable="{
        handler: 'clickOutsideColumn',
        exclude: []
    }"
    >
        <!-- element-->
        <go-text v-for="text in getElements.filter(item => item.type=='paragraph' && item.section == properties.section && item.row == properties.column.indexRow && item.column == properties.column.indexColumn)" :key="text.id"></go-text>
        <go-editor-element-tool v-if="isActive" :styleBlock="styleBtnTool" :thisElement="getThis"></go-editor-element-tool>
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import {bus} from '../../main.js'

const module_status = createNamespacedHelpers('status')
const module_grid = createNamespacedHelpers('grid')
    export default {
        props:{
            properties:{
                type:Object,
                required:true,
                validator(){
                    return typeof properties != 'object' 
                }
            }
        },
        data:()=>({
            classReponsive:'',
            isActive:false,
            styleBtnTool:{
                top:'0px',
                right:'10px',
            },
            name:'Column'
        }),
        methods:{
            clickColumn(){
                this.isActive = true
                this.setSectionIdSelectedAction({id:this.getSection})
                this.setRowIndexSelectedAction({index:this.getRow})
                this.setColumnIndexSelectedAction({index:this.getColumn})
            },
            clickOutsideColumn(){
                this.isActive = false
            },
            ...module_status.mapActions([
                'setSectionIdSelectedAction',
                'setRowIndexSelectedAction',
                'setColumnIndexSelectedAction'
            ])
        },
        computed:{
            size(){
                return this.properties.column.sizeColumn
            },
            getRow(){
                return this.properties.column.indexRow
            },
            getSection(){
                return this.properties.section
            },
            getColumn(){
                return this.properties.column.indexColumn
            },
             getThis(){
                return {
                   name:this.name,id:this.properties.section,row:this.properties.column.indexRow,column: this.properties.column.indexColumn
                }
            },
            ...module_grid.mapGetters([
                'getElements'
            ])
        },
        mounted(){
            this.classReponsive+= 'md-large-size-'+this.size
            this.$refs.column.classList.add(this.classReponsive)
            
        }
    }
</script>

<style lang="scss" scoped>

</style>