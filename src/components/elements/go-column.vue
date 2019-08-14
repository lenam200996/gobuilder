<template>
    <div class="md-layout-item" ref="column" :class="{active_editor:$data._isActive}"
    @click="_clickColumn"
    v-closable="{
        handler: '_clickOutsideColumn',
        exclude: []
    }"
    >
        <!-- element-->
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
            }
        },
        data:()=>({
            _class_reponsive:'',
            _isActive:false
        }),
        methods:{
            _clickColumn(){
                this.$data._isActive = true
            },
            _clickOutsideColumn(){
                this.$data._isActive = false
            }
        },
        computed:{
            _size(){
                return this.properties._size_column
            },
            
        },
        mounted(){
            this.$data._class_reponsive+= 'md-large-size-'+this._size
            this.$refs.column.classList.add(this.$data._class_reponsive)
        }
    }
</script>

<style lang="scss" scoped>

</style>