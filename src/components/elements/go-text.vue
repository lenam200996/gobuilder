<template>
    <drr
        ref="drr"
        :x="100"
        :y="100"
        :h="100"
        :w="100"
        :angle="0"
    >
        <span>{{active}}</span>
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
            active(){
                return this.isActive
            }
        }
       
    }
</script>

<style lang="scss" scoped>

</style>