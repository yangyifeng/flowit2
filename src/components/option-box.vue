<template>
  <div class="option-box">
    <div class="option-box-title">{{ title }}</div>
    <slot name="content"></slot>
  </div>
</template>
<script>
  export default {
    props: {
      title: String
    }
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
