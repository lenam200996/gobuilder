import Vue from "vue";
import Vuex from "vuex";
import gridModules from './modules/module-elements/index'
import statusModules from './modules/module-status/index'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { 
    'grid' : gridModules,
    'status' :statusModules
  },
  state: {},
  mutations: {},
  actions: {}
});
