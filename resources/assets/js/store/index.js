import map from './modules/map'
import newpoint from './modules/newpoint'

import state from './state'
import getters from './getters'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    map,
    newpoint
  },
  state,
  getters,
});