<template>
    <drr
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
        <span v-if="!isEditText" :class="'md-elevation-'+properties.attributes.style.shadow" v-html="properties.attributes.setting.value" :style="getStyle"></span>
        <editor v-else id="1" ref="area" v-model="properties.attributes.setting.value"  @editorInit="initEditor">
            <span class="saveEditor" @click="saveText">Save</span>
        </editor>
        <go-editor-element-tool v-if="isActive" :styleBlock="styleBtnTool" :thisElement="getThis"></go-editor-element-tool>
    </drr>
</template>

<script>
import elementMixin from '../mixins/element-mixin'
import {bus} from '../../main.js'

    export default {
        data(){
            return{
                name:'Text',
                type:'paragraph',
                isEditText: false
            }
        },
        extends:elementMixin.mixin,
        mounted(){
            bus.$on('openEdit',(ev)=>{
                if(ev.id === this.properties.id){
                    this.isEditText = true
                    this.isActive = false
                }else{
                    this.isEditText = false
                    this.isActive = false
                }
            })
        },
        methods:{
            change(rect){
                // console.log(rect) update style / save undo
            },
            initEditor(){
                this.$refs.area.editor.setContent(this.properties.attributes.setting.value);
            },
            saveText(){
                this.isEditText = false
                this.isActive = true
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
            getStyleEditor(){
                return {
                    
                }
            },
            getActive(){
                return this.isActive
            },
            getStyle(){
                return {
                    fontFamily : this.properties.attributes.style.fontFamily,
                    letterSpacing : this.properties.attributes.style.letterSpacing+'px', /** (number) px */
                    wordSpacing :this.properties.attributes.style.wordSpacing+'px', /** (number) px */
                    lineHeight :this.properties.attributes.style.lineHeight +'px', /** (number) px */
                }
            }
        }
       
    }
</script>

<style lang="scss" scoped>

</style>