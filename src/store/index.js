import Vue from "vue";
import Vuex from "vuex";
import gridModules from './modules/module-elements/index'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { 
    'grid' : gridModules
  },
  state: {},
  mutations: {},
  actions: {}
});
