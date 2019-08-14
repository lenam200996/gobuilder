<template>
    <drr
        ref="drr"
        :x="100"
        :y="100"
        :h="100"
        :w="100"
        :angle="0"
    >
        <span>{{_active}}</span>
    </drr>
</template>

<script>
import elementMixin from '../mixins/element-mixin'
    export default {
        data(){
            return{
            }
        },
        extends:elementMixin.mixin,
        mounted(){
           
        },
        methods:{
            
        },
        watch:{
            
        },
        computed:{
            _active(){
                return this.$data._isActive
            }
        }
       
    }
</script>

<style lang="scss" scoped>

</style>