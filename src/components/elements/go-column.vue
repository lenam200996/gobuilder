<template>
    <div class="md-layout-item" ref="column" :class="{active_editor:isActive}"
    @click="clickColumn"
    v-closable="{
        handler: 'clickOutsideColumn',
        exclude: []
    }"
    >
        <!-- element-->
    <go-editor-element-tool v-if="isActive" :styleBlock="styleBtnTool" :name="name"></go-editor-element-tool>
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
                return this.properties.column.rowIndex
            },
            getSection(){
                return this.properties.section
            },
            getColumn(){
                return this.properties.column.indexColumn
            },
            ...module_status.mapGetters([

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