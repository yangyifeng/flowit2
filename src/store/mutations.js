import * as types from './mutation-types'

export default {
  [types.RECEIVE_PHOTOS] (state, payload) {
    state.options.photos = payload
  },
  [types.UPDATE_IMAGE_SIZE] (state, payload) {
    state.currentOption.size = payload
  },
  [types.UPDATE_IMAGE_FILTER] (state, payload) {
    state.currentOption.filter = payload
  },
  [types.UPDATE_PHOTO] (state, payload) {
    state.currentOption.photo = payload
  }
}
