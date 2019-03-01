import Vue from 'vue';
import Vuex from 'vuex';
import plugins from './plugins'
import * as getters from './getters'
import getData from './modules/getData'
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  getters,
  modules: {
    getData
  },
  strict: debug,plugins
});
export default store;