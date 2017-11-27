<template>
  <div class="main-stage">
    <div class="title">画布</div>
    <div class="canvas-wrapper">
      <canvas id="fabric-canvas" width="500px" height="500px"></canvas>
    </div>
  </div>
</template>
<script>
  import { fabric } from 'fabric'
  export default {
    props: {
      title: String
    },
    mounted () {
      const canvas = new fabric.Canvas('fabric-canvas')
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
    height: 500px;
  }

  canvas {
    margin: 0 auto;
  }
</style>
