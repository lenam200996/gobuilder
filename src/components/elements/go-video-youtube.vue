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
        <iframe class="iframe-video-editor" :src="getUriVideoYoutube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <go-editor-element-tool v-if="isActive" :styleBlock="styleBtnTool" :thisElement="getThis"></go-editor-element-tool>
    </drr>
</template>

<script>
import elementMixin from '../mixins/element-mixin'
import {bus} from '../../main.js'

    export default {
        data(){
            return{
                name:'Video',
                type:'video_youtube',
              
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
            getUriVideoYoutube(){
                 var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                var match = this.properties.attributes.setting.url.match(regExp);

                if (match && match[2].length == 11) {
                    return 'https://www.youtube.com/embed/'+match[2]+"?autoplay="+this.properties.attributes.setting.autoPlay+"&playlist="+match[2]+"&loop="+this.properties.attributes.setting.loop;
                } else {
                    return 'error';
                }
            }
        }
       
    }
</script>

<style scoped>
    .iframe-video-editor{
        width: 100%;
        height: 100%;
    }
</style>