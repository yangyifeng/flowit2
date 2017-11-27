import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  options: {
    sizes: [{
      name: 'wechat',
      w: 900,
      h: 500
    }, {
      name: 'weibo',
      w: 200,
      h: 200
    }],
    filters: [{
      name: 'light contrast',
      thumbnail: ''
    }, {
      name: 'none'
    }],
    photos: []
  },
  currentOption: {
    size: {},
    filter: {},
    photo: {}
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
