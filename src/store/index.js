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
      ref: 'none',
      title: 'None'
    },
    {
      ref: 'light-contrast',
      title: 'Light Contrast'
    },
    {
      ref: 'heavy-contrast',
      title: 'Heavy Contrast'
    },
    {
      ref: 'light-blur',
      title: 'Light Blur'
    },
    {
      ref: 'heavy-blur',
      title: 'Heavy Blur'
    },
    {
      ref: 'grayscale',
      title: 'Grayscale'
    },
    {
      ref: 'blur-grayscale',
      title: 'Blur Grayscale'
    },
    {
      ref: 'red-tint',
      title: 'Red Tint'
    },
    {
      ref: 'green-tint',
      title: 'Green Tint'
    },
    {
      ref: 'blue-tint',
      title: 'Blue Tint'
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
