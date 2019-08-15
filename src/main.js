import Vue from "vue";
import App from "./components/App.vue";
import router from "./router/router";
import store from "./store/index";
/* 
* register components
*/
require('./components/elements')
require('./components/editors')
require('./components/editors/editor-item')
require('./components/options')
require('./components/render-elements')
require('./components/elements/main-section')
/**
 * register library
 */
import drr from '@minogin/vue-drag-resize-rotate'
import VueMaterial from 'vue-material'
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';
import VueClosable from 'vue-closable'
/**
 * import css
 */
import './assets/css/main.css'
import './assets/css/editor.css'
import './assets/css/fonts.css'
import './assets/css/default_class.css'
import 'vue-material/dist/vue-material.min.css'
import 'iview/dist/styles/iview.css';
/**
 * vue use
 */
Vue.use(VueMaterial)
Vue.use(iView,{locale});
Vue.use(VueClosable)

/**
 * vue register component
 */
Vue.component('drr', drr)
/**
 * other config
 */
export const bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
