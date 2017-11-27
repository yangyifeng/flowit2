<template>
  <option-box title="图片">
    <div class="content" slot="content">
      <div class="photo-gallery">
        <div
          :class="['photo-item', item === selected ? 'selected' : '']"
          v-for="item in photos"
          @click="select(item)">
          <img :src="item.small" alt="">
        </div>
      </div>
    </div>
  </option-box>
</template>
<script>
  import Unsplash, {toJson} from 'unsplash-js'
  import OptionBox from '@/components/option-box.vue'
  import config from '@/config'

  export default {
    data () {
      return {
        selected: {},
        photos: []
      }
    },
    components: {
      OptionBox
    },
    methods: {
      select (item) {
        this.selected = item
        this.$emit('update:option', item)
      }
    },
    mounted () {
      const unsplash = new Unsplash(config.unsplash)

      unsplash.collections.listCollections(1, 10, 'popular')
      .then(toJson)
      .then(res => {
        this.photos = res.filter(item => !!item.preview_photos[0])
          .map(item => item.preview_photos[0].urls)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
</script>
<style scoped>
  .photo-gallery {
    max-height: 500px;
    overflow-y: scroll;
  }
  .photo-item {
    cursor: pointer;
  }

  img {
    width: 100%;
  }
</style>
