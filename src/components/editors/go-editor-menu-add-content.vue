<template>
    <div class="wrap-menu-add-content-editor">
        <div class="wrap-content-list-editor">
            <ul>
                <li v-for="item in _getContentList" @click="_setContent(item._title)" :key="item.title" :class="{active : $data._title == item._title}">{{item._title}}</li>
            </ul>
        </div>
        <div class="wrap-content">
            <h2>{{_getType}}
                <span class="icon-help"></span>
                <span class="icon-close" @click="_closeContent"></span>
            </h2>
            <ul>
                <li v-for="item in _getContentItem" :key="item._name" @click="_add_item_action({type : item._ref})">{{item._name}}</li>
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
            _title : 'Text',

        }),
        methods:{
            _setContent(title){
                this.$data._title = title
            },
            _closeContent(){
                bus.$emit('_closeContent',true)
            },
            ...moduleGrid.mapActions([
                '_add_item_action'
            ])
           
        },
        computed:{
            _getType(){
                return this.type
            },
            _getContentList(){
                return content[this._getType]
            },
            _getContentItem(){
                var item = null
                var nohavelist = ["page","background"]
                if(!nohavelist.includes(this._getType))
                {
                    item =  content[this._getType].find(item => item._title == this.$data._title)._list
                }else{
                    item = []
                }
                return item
            }
        },
        created(){
            this.$data._title = this._getContentList[0]._title
        },
        watch:{
            _getType(val){
                this.$data._title = this._getContentList[0]._title
            }
        }

    }
</script>

<style scoped>

</style>