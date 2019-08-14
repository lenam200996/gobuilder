<template>
    <div class="md-layout row" :style="_get_style"
    :class="{active_editor:$data._isActive}"
    v-closable="{
        handler: '_clickOutsideRow',
        exclude: []
    }"
    >
        <slot></slot>
    </div>
</template>

<script>
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
             _isActive:false,
        }),
        methods:{
            
            _clickOutsideRow(){
                this.$data._isActive = false
            }
        },
        computed:{
            _getSize(){
                return this.properties._size_row
            },
            _get_style(){
                return {
                    height: this._getSize +'%',
                    background : this.properties._bg_row
                }
            }
        }
    }
</script>

<style scoped>

</style>