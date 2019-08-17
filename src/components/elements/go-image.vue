<template>
    <drr
        ref="drr"
        :x="getPosition.x"
        :y="getPosition.y"
        :h="getPosition.h"
        :w="getPosition.w"
        :angle="getPosition.angle"
        @change="change"
        @select="active"
        :selected="isActive"
        @deselect="inActive"
        v-closable="{
            handler: 'inActive',
            exclude: []
        }"
    >
        <img class="md-image image-editor" :src="getUrlImage"/>
        <go-editor-element-tool v-if="isActive" :styleBlock="styleBtnTool" :thisElement="getThis"></go-editor-element-tool>
    </drr>
</template>

<script>
import elementMixin from '../mixins/element-mixin'
import {bus} from '../../main.js'

    export default {
        data(){
            return{
                name:'Image',
                type:'image',
                w: 100,
                h: 100
            }
        },
        extends:elementMixin.mixin,
        mounted(){
            // console.log(this.$refs.drr.$slots.default[0].elm.offsetHeight)
            this.h = this.$refs.drr.$slots.default[0].elm.offsetHeight
            this.w = this.$refs.drr.$slots.default[0].elm.offsetWidth
        },
        methods:{
            change(rect){
                // console.log(rect) update style / save undo
            },
            active(){
                setTimeout(()=>{
                    this.isActive = true
                },200)
            },
            inActive(){
                this.isActive = false
            }
        },
        watch:{
        },
        computed:{
            getActive(){
                return this.isActive
            },
            getUrlImage(){
                return this.properties.attributes.setting.url
            }
        }
       
    }
</script>

<style scoped>
    .image-editor{
        width: 100%;
        height: 100%;
    }
</style>