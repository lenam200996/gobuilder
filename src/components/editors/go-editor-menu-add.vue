<template>
    <div class="wrap-menu-add-editor" ref="menuAddEditor">
        <ul>
            <li class="madd-menu-page" ref="page" @click="_openContent('page')">
                <span class="icon-add-page"></span>
                <span class="title-add">Menu & Page</span>
            </li>
            <li class="madd-background" ref="background" @click="_openContent('background')">
                <span class="icon-add-background"></span>
                <span class="title-add">Background</span>
            </li>
            <li class="madd-add" ref="add" @click="_openContent('add')">
                <span class="icon-add-element"></span>
                <span class="title-add">Add</span>
            </li>
            <li class="madd-application" ref="application" @click="_openContent('application')">
                <span class="icon-add-application"></span>
                <span class="title-add">Application</span>

            </li>
            <li class="madd-media" ref="media" @click="_openContent('media')">
                <span class="icon-add-media"></span>
                <span class="title-add">Media</span>

            </li>
            <li class="madd-blog" ref="blog" @click="_openContent('blog')">
                <span class="icon-add-blog"></span>
                <span class="title-add">Blog</span>
            </li>
        </ul>
        <go-editor-menu-add-content v-if="$data._opened" :type="_getType"></go-editor-menu-add-content>
    </div>
</template>

<script>
    import {bus} from '../../main.js'
    export default {
        data:()=>({
            _opened : false,
            _type : 'page'
        }),
        methods:{
            _openContent(type){
                this.$data._type = type
                setTimeout(()=>{
                    Object.keys(this.$refs).map(item => {
                        item != type ? this.$refs[item].classList.remove('opened'):this.$refs[item].classList.add('opened')
                    })
                    this.$data._opened = true
                },200)
            },
        },
        computed:{
            _getType(){
                return this.$data._type
            }
        },
        mounted(){
            bus.$on('_closeContent',()=>{
                this.$data._opened = false
                Object.keys(this.$refs).map(item => {
                    this.$refs[item].classList.remove('opened')
                })
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>