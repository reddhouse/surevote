import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  // Counter Component State ---------------------------------------------------
  count: 0,
  history: [],

  // ArtistSearch Component State ----------------------------------------------
  isBusy: false,
  artists: [],

  // SureVote Global State -----------------------------------------------------
  user: {},
  focus: 'nation',
  homeView: {
    intro1: true,
    intro2Why: true,
    intro2How: true,
    sureFooter: true
  },
  improvements: [],
  conditions: []
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
