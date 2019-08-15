<template>
    <div class="wrap-element-setting-editor" :style="style">
        <h2 class="title-setting"  @mousedown="startDrag" @mouseup="stopDrag" @mouseout="stopDrag" @mousemove="drag">{{type}} - Setting</h2>
        <div class="content-setting"></div>
    </div>
</template>

<script>
    export default {
        props:{
            type:{
                type:String,
                required: true
            }
        },
        data:()=>({
            left : 600,
            top: 100,
            isDragging :false,
            xCursor : 0,
            yCursor : 0
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>