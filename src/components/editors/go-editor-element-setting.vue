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
                        <slider :min="100" :max="1000" v-model="dataModel.style.height"></slider><span>{{dataModel.style.height}}</span>
                    </div>
                    <!-- stretched section -->
                    <div v-if="attribute.ref === 'stretched'" class="referenceRefSelect">
                        <i-select v-model="dataModel.setting.stretched">
                            <i-option :value="'container-fluid'">Screen</i-option>
                            <i-option :value="'container'">Page</i-option>
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
                    <!-- font family -->
                    <div v-if="attribute.ref === 'fontFamily'" class="referenceRefSelect">
                        <i-select v-model="dataModel.style.fontFamily">
                            <i-option :value="'Roboto'">font 1</i-option>
                            <i-option :value="2">font 2</i-option>
                        </i-select>
                    </div>
                    <!-- letter spacing -->
                    <div v-if="attribute.ref === 'letterSpacing'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.letterSpacing"></slider><span>{{dataModel.style.letterSpacing}}</span>
                    </div>
                    <!-- word spacing -->
                    <div v-if="attribute.ref === 'wordSpacing'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.wordSpacing"></slider><span>{{dataModel.style.wordSpacing}}</span>
                    </div>
                    <!-- line height -->
                    <div v-if="attribute.ref === 'lineHeight'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.lineHeight"></slider><span>{{dataModel.style.lineHeight}}</span>
                    </div>
                    <!-- align block -->
                    <div v-if="attribute.ref === 'alignBlock'" class="referenceRefRadio">
                        <RadioGroup type="button" v-model="dataModel.setting.alignBlock">
                            <Radio label="none">
                                <span class="icon-align-left"></span>
                            </Radio>
                            <Radio label="alignLeft">
                                <span class="icon-align-left"></span>
                            </Radio>
                            <Radio label="alignCenter">
                                <span class="icon-align-center"></span>
                            </Radio>
                            <Radio label="alignRight">
                                <span class="icon-align-right"></span>
                            </Radio>
                        </RadioGroup>
                    </div>
                    <!-- line height -->
                    <div v-if="attribute.ref === 'shadow'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.shadow" :min="0" :max="20"></slider><span>{{dataModel.style.shadow}}</span>
                    </div>
                    <!-- background color -->
                    <div v-if="attribute.ref==='backgroundColor'" class="referenceRefColor">
                        <ColorPicker v-model="dataModel.style.backgroundColor" alpha />
                    </div>
                    <!-- border width -->
                    <div v-if="attribute.ref==='borderWidth'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.border.width"></slider><span>{{dataModel.style.border.width}}</span>
                    </div>
                    <!-- border type -->
                    <div v-if="attribute.ref==='borderType'" class="referenceRefSelect">
                        <i-select v-model="dataModel.style.border.type">
                            <i-option :value="'Roboto'">font 1</i-option>
                            <i-option :value="2">font 2</i-option>
                        </i-select>
                    </div>
                    <!-- border color -->
                    <div v-if="attribute.ref==='borderColor'" class="referenceRefColor"> 
                        <ColorPicker v-model="dataModel.style.border.color" alpha />
                    </div>
                    <!-- border radius -->
                    <div v-if="attribute.ref==='borderRadius'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.borderRadius"></slider><span>{{dataModel.style.borderRadius}}</span>
                    </div>
                    <!-- color -->
                    <div v-if="attribute.ref==='color'" class="referenceRefColor">
                        <ColorPicker v-model="dataModel.style.color" alpha />
                    </div>
                    <!-- Text Transform -->
                    <div v-if="attribute.ref==='textTransform'" class="referenceRefSelect">
                        <i-select v-model="dataModel.style.textTransform">
                            <i-option :value="'Up'">text 1</i-option>
                            <i-option :value="2">text 2</i-option>
                        </i-select>
                    </div>
                    <!-- textAlign -->
                    <div v-if="attribute.ref==='textAlign'" class="referenceRefRadio">
                        <RadioGroup type="button" v-model="dataModel.style.textAlign">
                            <Radio label="alignLeft">
                                <span class="icon-align-left"></span>
                            </Radio>
                            <Radio label="alignCenter">
                                <span class="icon-align-center"></span>
                            </Radio>
                            <Radio label="alignRight">
                                <span class="icon-align-right"></span>
                            </Radio>
                        </RadioGroup>
                    </div>
                    <!-- fontSize -->
                    <div v-if="attribute.ref==='fontSize'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.fontSize"></slider><span>{{dataModel.style.fontSize}}</span>
                    </div>
                    <!-- fontWeight -->
                     <div v-if="attribute.ref==='fontWeight'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.fontWeight" :min="500" :max="900"></slider><span>{{dataModel.style.fontWeight}}</span>
                    </div>
                    <!-- fontStyle -->
                    <div v-if="attribute.ref==='fontStyle'" class="referenceRefSelect">
                        <i-select v-model="dataModel.style.fontStyle">
                            <i-option :value="'Up'">text 1</i-option>
                            <i-option :value="2">text 2</i-option>
                        </i-select>
                    </div>
                    <!-- paddingLeft -->
                    <div v-if="attribute.ref==='paddingLeft'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.paddingLeft"></slider><span>{{dataModel.style.paddingLeft}}</span>
                    </div>
                    <!-- paddingRight -->
                    <div v-if="attribute.ref==='paddingRight'" class="referenceRefSlide">
                        <slider v-model="dataModel.style.paddingRight"></slider><span>{{dataModel.style.paddingRight}}</span>
                    </div>
                    <!-- background Color Hover -->
                    <div v-if="attribute.ref==='backgroundColorHover'" class="referenceRefColor"> 
                        <ColorPicker v-model="dataModel.style.backgroundColorHover" alpha />
                    </div>
                    <!-- colorHover -->
                    <div v-if="attribute.ref==='colorHover'" class="referenceRefColor"> 
                        <ColorPicker v-model="dataModel.style.colorHover" alpha />
                    </div>
                    <!-- borderColorHover -->
                    <div v-if="attribute.ref==='borderColorHover'" class="referenceRefColor"> 
                        <ColorPicker v-model="dataModel.style.borderColorHover" alpha />
                    </div>
                    <!-- text -->
                    <div v-if="attribute.ref==='text'" class="referenceRefColor"> 
                        <i-input v-model="dataModel.setting.text"/>
                    </div>
                    <!-- urlImage -->
                    <div v-if="attribute.ref==='urlImage'" class="referenceRefFIle">

                    </div>
                    <!-- keepProportion -->
                    <div v-if="attribute.ref==='keepProportion'" class="referenceRefSwitch">
                        <i-switch v-model="dataModel.setting.keepProportion"/>
                    </div>
                    <!-- url video -->
                    <div v-if="attribute.ref==='urlVideo'" class="referenceRefColor"> 
                        <i-input v-model="dataModel.setting.url"/>
                    </div>
                    <!-- keepProportion -->
                    <div v-if="attribute.ref==='autoPlay'" class="referenceRefSwitch">
                        <i-switch v-model="dataModel.setting.autoPlay"/>
                    </div>
                    <!-- keepProportion -->
                    <div v-if="attribute.ref==='loop'" class="referenceRefSwitch">
                        <i-switch v-model="dataModel.setting.loop"/>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {bus} from '../../main.js'
    import { createNamespacedHelpers } from 'vuex'
    import Attributes from '../../api/_element_attribute_config.json'
    const module_grid = createNamespacedHelpers('element')

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
            AttributesList : [],
            dataModel : null
            
        }),
        computed:{
            style(){
                return {
                    left : this.left + 'px',
                    top: this.top + 'px'
                }
            },
            
            ...module_grid.mapGetters([
                'getDataModelElement'
            ]),
        },
        created(){
            this.settingProps = this.setting
        },
        mounted(){
            this.AttributesList = Attributes[this.setting.name]
            this.dataModel = this.getDataModelElement({type:this.setting.type,id:this.setting.id})
            console.log(this.dataModel)

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