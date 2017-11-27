<template>
  <div class="page">
    <nav class="main-nav">
      <div class="container">
        <div class="logo">{{ title }}</div>
      </div>
    </nav>
    <main>
      <div class="container">
        <aside class="aside-photo-gallery">
          <option-photos @update:option="updateOption('photo', $event)"></option-photos>
        </aside>
        <div class="main-stage-wrapper">
          <main-stage></main-stage>
        </div>
        <aside class="aside-options">
          <option-image-sizes @update:option="updateOption('size', $event)"></option-image-sizes>
          <option-image-filters @update:option="updateOption('filter', $event)"></option-image-filters>
          <option-uploader></option-uploader>
        </aside>
      </div>
    </main>
  </div>
</template>

<script>
import OptionPhotos from '@/components/option-photos'
import OptionImageSizes from '@/components/option-image-sizes'
import OptionImageFilters from '@/components/option-image-filters'
import OptionUploader from '@/components/option-uploader'
import MainStage from '@/components/main-stage'

export default {
  name: 'Home',
  data () {
    return {
      title: 'flow.it',
      filters: [],
      photos: [],
      myOption: {
        size: '',
        filter: '',
        photo: ''
      }
    }
  },
  components: {
    OptionPhotos,
    OptionImageSizes,
    OptionImageFilters,
    OptionUploader,
    MainStage
  },
  methods: {
    updateOption (type, val) {
      console.log('option update: ' + type, val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .main-nav {
    width: 100%;
    border-bottom: 1px solid #ced7df;
    background: #fff;
    margin-bottom: 20px;
    .logo {
      padding: 10px 0;
      text-align: left;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }

  .container {
    display: table;
    width: 1024px;
    margin: 0 auto;
    overflow: auto;
    /*border: 1px dashed;*/
  }

  .aside-photo-gallery {
    width: 20%;
    min-height: 500px;
    float: left;
  }

  .main-stage-wrapper {
    float: left;
    width: 55%;
    min-height: 500px;
    margin: 0 2.5%;
  }

  .aside-options {
    width: 20%;
    float: left;
    min-height: 500px;
  }
</style>
