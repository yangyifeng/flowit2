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
        this.reposition()
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
            filters.push({
              type: 'BlendColor',
              params: {
                color: 'rgb(50,59,57)',
                alpha: 0.5,
                mode: 'tint'
              }
            })
            break
          case 'heavy-contrast':
            filters.push({
              type: 'BlendColor',
              params: {
                color: 'rgb(50,59,57)',
                alpha: 0.8,
                mode: 'tint'
              }
            })
            break
          case 'light-blur':
            filters.push({
              type: 'BlendColor',
              params: {
                color: 'rgb(50,59,57)',
                alpha: 0.5,
                mode: 'tint'
              }
            })

            filters.push({
              type: 'Blur',
              params: {
                blur: 0.1
              }
            })
            break
          case 'heavy-blur':
            filters.push({
              type: 'BlendColor',
              params: {
                color: 'rgb(50,59,57)',
                alpha: 0.5,
                mode: 'tint'
              }
            })

            filters.push({
              type: 'Blur',
              params: {
                blur: 0.5
              }
            })
            break
          case 'grayscale':
            filters.push({
              type: 'BlendColor',
              params: {
                color: 'rgb(50,59,57)',
                alpha: 0.5,
                mode: 'tint'
              }
            })

            filters.push({
              type: 'Grayscale'
            })
            break
          case 'blur-grayscale':
            filters.push({
              type: 'BlendColor',
              params: {
                color: 'rgb(50,59,57)',
                alpha: 0.5,
                mode: 'tint'
              }
            })
            filters.push({
              type: 'Blur',
              params: {
                blur: 0.1
              }
            })

            filters.push({
              type: 'Grayscale'
            })
            break
          case 'red-tint':
            filters.push({
              type: 'BlendColor',
              params: {
                color: 'rgb(115,34,25)',
                alpha: 0.5,
                mode: 'tint'
              }
            })
            break
          case 'green-tint':
            filters.push({
              type: 'BlendColor',
              params: {
                color: 'rgb(21,97,53)',
                alpha: 0.5,
                mode: 'tint'
              }
            })
            break
          case 'blue-tint':
            filters.push({
              type: 'BlendColor',
              params: {
                color: 'rgb(16,74,113)',
                alpha: 0.5,
                mode: 'tint'
              }
            })
            break
        }

        this.createFilters(filters)
        this.fabricBackgroundImage.applyFilters()
        canvas.renderAll()
      }
    },
    methods: {
      updateCanvasPhoto (photoUrl) {
        const self = this
        fabric.Image.fromURL('http://localhost:9000/?url=' + encodeURIComponent(photoUrl), (oImg) => {
          let filters = null
          if (self.fabricBackgroundImage) {
            filters = self.fabricBackgroundImage.filters
          }

          self.fabricBackgroundImage = oImg

          canvas.setBackgroundImage(self.fabricBackgroundImage)

          if (filters) {
            self.fabricBackgroundImage.filters = filters
            self.fabricBackgroundImage.applyFilters()
          }

          self.reposition()
          canvas.renderAll()
        }, {
          crossOrigin: 'anonymous'
        })
      },
      createFilters (filters) {
        for (let f of filters) {
          this.fabricBackgroundImage.filters.push(new fabric.Image.filters[f.type](f.params))
        }
      },
      reposition () {
        if (!canvas.backgroundImage) return

        const bImg = canvas.backgroundImage
        const canvasAspect = canvas.width / canvas.height
        const imgAspect = bImg.width / bImg.height

        let left = 0
        let top = 0
        let scaleFactor = 1

        if (canvasAspect >= imgAspect) {
          scaleFactor = canvas.width / bImg.width
          left = 0
          top = -((bImg.height * scaleFactor) - canvas.height) / 2
        } else {
          scaleFactor = canvas.height / bImg.height
          top = 0
          left = -((bImg.width * scaleFactor) - canvas.width) / 2
        }

        canvas.backgroundImage.set({
          selectable: false,
          scaleX: scaleFactor,
          scaleY: scaleFactor,
          top: top,
          left: left,
          originX: 'left',
          originY: 'top'
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
