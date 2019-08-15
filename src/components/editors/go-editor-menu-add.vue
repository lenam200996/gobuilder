<template>
    <div class="wrap-menu-add-editor" ref="menuAddEditor">
        <ul>
            <li class="madd-menu-page" ref="page" @click="openContent('page')">
                <span class="icon-add-page"></span>
                <span class="title-add">Menu & Page</span>
            </li>
            <li class="madd-background" ref="background" @click="openContent('background')">
                <span class="icon-add-background"></span>
                <span class="title-add">Background</span>
            </li>
            <li class="madd-add" ref="add" @click="openContent('add')">
                <span class="icon-add-element"></span>
                <span class="title-add">Add</span>
            </li>
            <li class="madd-application" ref="application" @click="openContent('application')">
                <span class="icon-add-application"></span>
                <span class="title-add">Application</span>

            </li>
            <li class="madd-media" ref="media" @click="openContent('media')">
                <span class="icon-add-media"></span>
                <span class="title-add">Media</span>

            </li>
            <li class="madd-blog" ref="blog" @click="openContent('blog')">
                <span class="icon-add-blog"></span>
                <span class="title-add">Blog</span>
            </li>
        </ul>
        <go-editor-menu-add-content v-if="opened" :type="getType"></go-editor-menu-add-content>
    </div>
</template>

<script>
    import {bus} from '../../main.js'
    export default {
        data:()=>({
            opened : false,
            type : 'page'
        }),
        methods:{
            openContent(typeContent){
                this.type = typeContent
                setTimeout(()=>{
                    Object.keys(this.$refs).map(item => {
                        item != typeContent ? this.$refs[item].classList.remove('opened'):this.$refs[item].classList.add('opened')
                    })
                    this.opened = true
                },200)
            },
        },
        computed:{
            getType(){
                return this.type
            }
        },
        mounted(){
            bus.$on('closeContent',()=>{
                this.opened = false
                Object.keys(this.$refs).map(item => {
                    this.$refs[item].classList.remove('opened')
                })
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>