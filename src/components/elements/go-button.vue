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
        <button class="btn-editor" :class="'md-elevation-'+properties.attributes.style.shadow" :style="getStyle">{{properties.attributes.setting.text}}</button>
        <go-editor-element-tool v-if="isActive" :styleBlock="styleBtnTool" :thisElement="getThis"></go-editor-element-tool>
    </drr>
</template>

<script>
import elementMixin from '../mixins/element-mixin'
import {bus} from '../../main.js'

    export default {
        data(){
            return{
                name:'Button',
                type:'button',
              
            }
        },
        extends:elementMixin.mixin,
        mounted(){
          
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
            getStyle(){
                return {
                    fontFamily : this.properties.attributes.style.fontFamily,
                    backgroundColor : this.properties.attributes.style.backgroundColor, //check hover
                    border: this.properties.attributes.style.border.width+'px '+this.properties.attributes.style.border.type+' '+this.properties.attributes.style.border.color, //check hover
                    borderRadius:this.properties.attributes.style.borderRadius +'px',
                    color: this.properties.attributes.style.color, // check hover
                    textTransform:  this.properties.attributes.style.textTransform,
                    textAlign : this.properties.attributes.style.textAlign,
                    fontSize : this.properties.attributes.style.fontSize +'px',
                    fontWeight : this.properties.attributes.style.fontWeight,
                    fontStyle : this.properties.attributes.style.fontStyle,
                    paddingLeft : this.properties.attributes.style.paddingLeft,
                    paddingRight: this.properties.attributes.style.paddingRight,

                }
            }
        }
       
    }
</script>

<style scoped>
    .btn-editor{
        width: 100%;
        height: 100%;
    }
</style>