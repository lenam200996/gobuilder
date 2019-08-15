<template>
    <div class="wrap-menu-add-content-editor">
        <div class="wrap-content-list-editor">
            <ul>
                <li v-for="item in getContentList" @click="setContent(item.title)" :key="item.title" :class="{active : title == item.title}">{{item.title}}</li>
            </ul>
        </div>
        <div class="wrap-content">
            <h2>{{getType}}
                <span class="icon-help"></span>
                <span class="icon-close" @click="closeContent"></span>
            </h2>
            <ul>
                <li v-for="item in getContentItem" :key="item.name" @click="addItemAction({type : item.ref})">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import content from '../../api/_content_add_tool.json'
import {bus} from '../../main.js'
import { createNamespacedHelpers } from 'vuex'

const moduleGrid = createNamespacedHelpers('grid')
// const moduleB = createNamespacedHelpers('b')
    export default {
        props:{
            type:{
                type:String,
                required:true,
                validator(){
                    return typeof type != 'string'
                }
            }
        },
        data:()=>({
            title : 'Text',

        }),
        methods:{
            setContent(titleContent){
                this.title = titleContent
            },
            closeContent(){
                bus.$emit('closeContent',true)
            },
            ...moduleGrid.mapActions([
                'addItemAction'
            ])
           
        },
        computed:{
            getType(){
                return this.type
            },
            getContentList(){
                return content[this.getType]
            },
            getContentItem(){
                var item = null
                var nohavelist = ["page","background"]
                if(!nohavelist.includes(this.getType))
                {
                    item =  content[this.getType].find(item => item.title == this.title).list
                }else{
                    item = []
                }
                return item
            }
        },
        created(){
            this.title = this.getContentList[0].title
        },
        watch:{
            getType(val){
                this.title = this.getContentList[0].title
            }
        }

    }
</script>

<style scoped>

</style>