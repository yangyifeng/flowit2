// import Unsplash, {toJson} from 'unsplash-js'
// import config from '@/config.js'

import photos from './photos'

export const getPhotos = () => {
  // const unsplash = new Unsplash(config.unsplash)

  // return unsplash.collections.listCollections(1, 10, 'popular')
  // .then(toJson)
  // .then(res => {
  //   return res.filter(item => !!item.preview_photos[0])
  //     .map(item => item.preview_photos[0].urls)
  // })

  return new Promise((resolve, reject) => {
    resolve(photos.filter(item => !!item.preview_photos[0])
      .map(item => item.preview_photos[0].urls))
  })
}
