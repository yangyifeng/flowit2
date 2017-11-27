<template>
  <option-box title="图片">
    <div class="content" slot="content">
      <div class="photo-gallery">
        <div
          :class="['photo-item', item.raw === currentOption.photo.raw ? 'selected' : '']"
          v-if="options && options.photos"
          v-for="item in options.photos"
          @click="updatePhoto(item)">
          <img :src="item.small" alt="">
        </div>
      </div>
    </div>
  </option-box>
</template>
<script>
  import OptionBox from '@/components/option-box.vue'

  export default {
    extends: OptionBox,
    components: {
      OptionBox
    },
    mounted () {
      this.getPhotos()
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
    border: 2px solid #ddd;
    width: 100%;
  }

  .selected img {
    color: #00aa00;
    border-color: #00aa00;
  }
</style>
