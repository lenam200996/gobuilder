<template>
  <div id="app" v-if="!loading">
    <go-editor-menu-tool></go-editor-menu-tool>
    <go-editor-menu-add></go-editor-menu-add>
    <go-editor-element-setting v-if="setting.isSetting" :setting="setting"></go-editor-element-setting>
    <go-header></go-header>
    <go-body></go-body>
    <go-footer></go-footer>
  </div>
  <div id="app" v-else>
    <div class="loading-api">
        <Spin fix>
            <Icon type="ios-loading" size=100 class="demo-spin-icon-load"></Icon>
            <div>Loading</div>
        </Spin>
      </div>
  </div>
</template>
<script>
import {bus} from '../main.js'

export default {
    data:()=>({
      setting:{
        isSetting : false,
        type:null,
        name: null,
        id: null,
        section:null,
        row: null,
        column:null
      },
     loading  :true,
    }),
    mounted(){
      setTimeout(()=>{
        this.loading = false
      },5000)
      bus.$on('openSetting',(ev)=>{
        this.setting.isSetting = false
        setTimeout(()=>{
          this.setting.isSetting = true
          this.setting.type = ev.type
          this.setting.name = ev.name
          this.setting.section = ev.section
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
.demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }


    .loading-api{
      position: fixed;
      margin-top: -60px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }

</style>
