<template>
  <div id="app">
    <go-editor-menu-tool></go-editor-menu-tool>
    <go-editor-menu-add></go-editor-menu-add>
    <go-editor-element-setting v-if="setting.isSetting" :setting="setting"></go-editor-element-setting>
    <go-header></go-header>
    <go-body></go-body>
    <go-footer></go-footer>
  </div>
</template>
<script>
import {bus} from '../main.js'

export default {
    data:()=>({
      setting:{
        isSetting : false,
        name: null,
        id: null,
        row: null,
        column:null
      }
    }),
    mounted(){
      bus.$on('openSetting',(ev)=>{
        this.setting.isSetting = false
        setTimeout(()=>{
          this.setting.isSetting = true
          this.setting.name = ev.name
          this.setting.id = ev.id
          this.setting.row = ev.row
          this.setting.column = ev.column
        },200)
      })
      bus.$on('closeSetting',()=>{
        this.setting.isSetting = false
      })
    }
  }
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
