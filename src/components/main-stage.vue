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

  const filters = {
    tint (obj) {
      const f = new fabric.Image.filters.Tint(obj)
      this.fabricBackgroundImage.filters.push(f)
    },
    stackBlur (obj) {
      const f = new fabric.Image.filters.StackBlur(obj)
      this.fabricBackgroundImage.filters.push(f)
    },
    grayScale () {
      const f = new fabric.Image.filters.Grayscale
      this.fabricBackgroundImage.filters.push(f)
    }
  }

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
        this.updateCanvasPhoto(newVal.small)
        canvas.setHeight(this.currentOption.size.h * 549 / this.currentOption.size.w)
      },
      'currentOption.filter' (newVal, oldVal) {
        console.log('update option: filter', newVal)

        const c = filters.tint.bind(this)
        const d = filters.stackBlur.bind(this)
        const e = filters.grayScale.bind(this)

        switch (newVal.ref) {
          case 'none':
            break
          case 'light-contrast':
            console.log('light-contrast')
            c({ color: "rgb(50,59,57)", opacity: .5 })
            break
          case "heavy-contrast":
              c({ color: "rgb(50,59,57)", opacity: .8 })
              break
          case "light-blur":
              c({ color: "rgb(50,59,57)", opacity: .5 }), d({ radius: 25 })
              break
          case "heavy-blur":
              c({ color: "rgb(50,59,57)", opacity: .5 }), d({ radius: 45 })
              break
          case "grayscale":
              c({ color: "rgb(50,59,57)", opacity: .5 }), e()
              break
          case "blur-grayscale":
              c({ color: "rgb(50,59,57)", opacity: .5 }), d({ radius: 25 }), e()
              break
          case "red-tint":
              c({ color: "rgb(115,34,25)", opacity: .5 })
              break
          case "green-tint":
              c({ color: "rgb(21,97,53)", opacity: .5 })
              break
          case "blue-tint":
              c({ color: "rgb(16,74,113)", opacity: .5 }) }
              break

        }
      }
    },
    methods: {
      updateCanvasPhoto (photoUrl) {
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
