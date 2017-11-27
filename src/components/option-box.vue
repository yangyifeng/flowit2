<template>
  <div class="option-box">
    <div class="option-box-title">{{ title }}</div>
    <slot name="content"></slot>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    props: {
      title: String
    },
    computed: {
      ...mapGetters([
        'options',
        'currentOption'
      ])
    },
    methods: {
      ...mapActions([
        'getPhotos',
        'updateImageSize',
        'updateImageFilter',
        'updatePhoto'
      ])
    },
    // mounted () {
    //   if (this.handleMounted) {
    //     this.handleMounted()
    //   }
    // }
  }
</script>
<style scoped>
  .option-box {
    position: relative;
    border: 1px solid #ced7df;
    border-radius: 4px;
    padding: 10px;
    background: #fff;
    margin-bottom: 10px;
    /*overflow: auto;*/
  }

  .option-box-title {
    border-bottom: 1px solid #ddd;
    text-align: left;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
</style>
