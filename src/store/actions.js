import * as api from '@/api'
import * as types from './mutation-types'

export const getPhotos = ({ commit }) => {
  api.getPhotos().then(photos => {
    commit(types.RECEIVE_PHOTOS, photos)
  })
}

export const updateImageSize = ({ commit }, payload) => {
  commit(types.UPDATE_IMAGE_SIZE, payload)
}

export const updateImageFilter = ({ commit }, payload) => {
  commit(types.UPDATE_IMAGE_FILTER, payload)
}

export const updatePhoto = ({ commit }, payload) => {
  commit(types.UPDATE_PHOTO, payload)
}
