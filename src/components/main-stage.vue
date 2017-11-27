<template>
  <div class="main-stage">
    <div class="title">画布</div>
    <div class="canvas-wrapper">
      <canvas id="fabric-canvas"
        width="549"
        :height="currentOption.size.h * 549 / currentOption.size.w">
      </canvas>
    </div>
  </div>
</template>
<script>
  import { fabric } from 'fabric'
  import {
    mapGetters
  } from 'vuex'

  let canvas = null

  export default {
    computed: {
      ...mapGetters([
        'currentOption'
      ])
    },
    watch: {
      'currentOption.photo' (newVal, oldVal) {
        console.log(newVal, oldVal)
        this.updateCanvasPhoto(newVal.small)
      },
      'currentOption.size' (newVal, oldVal) {
        console.log(newVal, oldVal)
        this.updateCanvasPhoto(newVal.small)
        canvas.setHeight(this.currentOption.size.h * 549 / this.currentOption.size.w)
      }
    },
    methods: {
      updateCanvasPhoto (photoUrl) {
        // canvas.setBackgroundImage(photoUrl)
        fabric.Image.fromURL(photoUrl, (oImg) => {
          oImg.set('selectable', false)
          canvas.add(oImg)
        })
      }
    },
    mounted () {
      canvas = new fabric.Canvas('fabric-canvas')
      console.log(fabric, canvas)
      var text = new fabric.Text('Hello world', {
        left: 100,
        top: 100,
        fill: '#f55',
        angle: 15
      })
      canvas.add(text)
    }
  }
</script>
<style scoped>
  .main-stage {
    border: 1px solid #ced7df;
    border-radius: 4px;
    background: #fff;
    padding: 5px;
    min-height: 500px;
  }

  .canvas-wrapper {
    margin: 0 auto;
    border: 1px solid #aaa;
  }
</style>
