import map from './modules/map'
import map from './modules/newpoint'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    map,
    newpoint
  }
});