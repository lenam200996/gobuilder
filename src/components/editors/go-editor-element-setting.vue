<template>
    <div class="wrap-element-setting-editor" :style="style">
        <h2 class="title-setting"  @mousedown="startDrag" @mouseup="stopDrag" @mouseout="stopDrag" @mousemove="drag">{{setting.name}} - Setting
            <span class="icon-help"></span>
            <span class="icon-close" @click="closeSetting"></span>
        </h2>
        <div class="content-setting">
            <!-- content setting -->
            <ul>
                <li v-for="attribute in AttributesList" :key="attribute.ref">
                    <span class="ref">{{attribute.ref}}</span>
                    <!-- height -->
                    <div v-if="attribute.ref === 'height'" class="referenceRefSlide">
                        <slider></slider><span>100</span>
                    </div>
                    <!-- stretched section -->
                    <div v-if="attribute.ref === 'stretched'" class="referenceRefSelect">
                        <i-select>
                            <i-option :value="1">Home</i-option>
                            <i-option :value="2">About</i-option>
                        </i-select>
                    </div>
                    <!-- row manager -->
                    <div v-if="attribute.ref === 'rowManager'" class="referenceRefRowManager">
                        <go-editor-item-row-manager></go-editor-item-row-manager>   
                        <go-editor-item-row-manager></go-editor-item-row-manager> 
                        <div class="tool-manager">
                            <span class="icon-delete">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                                <span class="path4"></span>
                            </span>
                            <span class="icon-arrow-next up" ></span>
                            <span class="icon-arrow-next down"></span>
                        </div>  
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {bus} from '../../main.js'
    import Attributes from '../../api/_element_attribute_config.json'
    export default {
        props:{
            setting:{
                type:Object,
                required:true
            }
        },
        data:()=>({
            left : 600,
            top: 100,
            isDragging :false,
            xCursor : 0,
            yCursor : 0,
            AttributesList : []
        }),
        computed:{
            style(){
                return {
                    left : this.left + 'px',
                    top: this.top + 'px'
                }
            }
        },
        mounted(){
            this.AttributesList = Attributes[this.setting.name]
            console.log(this.AttributesList)
        },
        methods:{
            startDrag(ev){
                this.isDragging = true
                this.xCursor = ev.clientX
                this.yCursor = ev.clientY
            },
            stopDrag(){
                this.isDragging = false
            },
            drag(ev){
                if(this.isDragging){
                    this.left += ev.clientX - this.xCursor
                    this.top +=  ev.clientY - this.yCursor
                    this.xCursor = ev.clientX
                    this.yCursor = ev.clientY
                }
            },
            closeSetting(){
                bus.$emit('closeSetting',true)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>