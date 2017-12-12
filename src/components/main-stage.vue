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
    data () {
      return {
        fabricBackgroundImage: null
      }
    },
    computed: {
      ...mapGetters([
        'currentOption'
      ])
    },
    watch: {
      'currentOption.photo' (newVal, oldVal) {
        console.log('update option: photo', newVal)
        this.updateCanvasPhoto(newVal.small)
      },
      'currentOption.size' (newVal, oldVal) {
        console.log('update option: size', newVal)
        canvas.setHeight(this.currentOption.size.h * 549 / this.currentOption.size.w)
      },
      'currentOption.filter' (newVal, oldVal) {
        console.log('update option: filter', newVal)

        this.fabricBackgroundImage.filters = []
        let filters = []

        switch (newVal.ref) {
          case 'none':
            break
          case 'light-contrast':
            console.log('light-contrast')
            filters.push(new fabric.Image.filters.BlendColor({
              color: 'rgb(50,59,57)',
              alpha: 0.5,
              mode: 'tint'
            }))
            break
          case 'heavy-contrast':
            filters.push(new fabric.Image.filters.BlendColor({
              color: 'rgb(50,59,57)',
              alpha: 0.8,
              mode: 'tint'
            }))
            break
          case 'light-blur':
            filters.push(new fabric.Image.filters.BlendColor({
              color: 'rgb(50,59,57)',
              alpha: 0.5,
              mode: 'tint'
            }))

            filters.push(new fabric.Image.filters.Blur({
              blur: 0.1
            }))
            break
          case 'heavy-blur':
            filters.push(new fabric.Image.filters.BlendColor({
              color: 'rgb(50,59,57)',
              alpha: 0.5,
              mode: 'tint'
            }))

            filters.push(new fabric.Image.filters.Blur({
              blur: 0.5
            }))
            break
          case 'grayscale':
            filters.push(new fabric.Image.filters.BlendColor({
              color: 'rgb(50,59,57)',
              alpha: 0.5,
              mode: 'tint'
            }))

            filters.push(new fabric.Image.filters.Grayscale())
            break
          case 'blur-grayscale':
            filters.push(new fabric.Image.filters.BlendColor({
              color: 'rgb(50,59,57)',
              alpha: 0.5,
              mode: 'tint'
            }))
            filters.push(new fabric.Image.filters.Blur({
              blur: 0.1
            }))

            filters.push(new fabric.Image.filters.Grayscale())
            break
          case 'red-tint':
            filters.push(new fabric.Image.filters.BlendColor({
              color: 'rgb(115,34,25)',
              alpha: 0.5,
              mode: 'tint'
            }))
            break
          case 'green-tint':
            filters.push(new fabric.Image.filters.BlendColor({
              color: 'rgb(21,97,53)',
              alpha: 0.5,
              mode: 'tint'
            }))
            break
          case 'blue-tint':
            filters.push(new fabric.Image.filters.BlendColor({
              color: 'rgb(16,74,113)',
              alpha: 0.5,
              mode: 'tint'
            }))
            break
        }

        for (let f of filters) {
          this.fabricBackgroundImage.filters.push(f)
        }
        this.fabricBackgroundImage.applyFilters()
        canvas.renderAll()
      }
    },
    methods: {
      updateCanvasPhoto (photoUrl) {
        const self = this
        fabric.Image.fromURL('http://localhost:9000/?url=' + encodeURIComponent(photoUrl), (oImg) => {
          oImg.set('selectable', false)
          self.fabricBackgroundImage = oImg
          canvas.add(self.fabricBackgroundImage)
        }, {
          crossOrigin: 'anonymous'
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
