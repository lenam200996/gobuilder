<template>
    <div class="container-fluid"
        :class="{active_editor:$data._isActive}"
        :style="_style"
        v-closable="{
            handler: '_clickOutsideSection',
            exclude: []
        }"
    >
        <go-row v-for="row in $data._row" :key="row._index_row" :properties="row" :h="_getStyle.height">
            <go-column v-for="column in $data._column.filter(item => item._row_index == row._index_row)" :key="column._index_column" :properties="column"></go-column>
        </go-row>
        <go-editor-element-tool></go-editor-element-tool>
    </div>
</template>

<script>
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
           _isActive:false,
           _row :[],
           _column :[]
        }),
        methods:{
            
            _clickOutsideSection(){
                this.$data._isActive =false
            },
            _getProperties(){
                return this.properties
            },
            _reset_row_column(){
                this.$data._row = []
                this.$data._column = []
            }
        },
        computed:{
            _getStyle(){
                return this.properties.attributes.style
            },
            _style(){
                return {
                    backgroundColor: this._getStyle.backgroundColor,
                    boxShadow: this._getStyle.boxShadow,
                    margin: this._getStyle.margin,
                    height : this._getStyle.height +'px',
                    position:'relative'
                }
            }
        },
        watch:{
            _getProperties(val){
                this._reset_row_column()
                this.$data._row = val.attributes.rows
                this.$data._column = val.attributes.columns
            },
            
        },
        mounted(){
            this._reset_row_column()
            this.$data._row = this.properties.attributes.rows
            this.$data._column = this.properties.attributes.columns
        }
        
    }
</script>

<style scoped>

</style>