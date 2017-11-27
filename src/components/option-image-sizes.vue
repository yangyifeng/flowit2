<template>
  <option-box title="尺寸">
    <div class="content" slot="content">
      <div
        v-if="options && options.sizes"
        v-for="item in options.sizes"
        @click="updateImageSize(item)"
        :class="['image-sizes-item', item.name === currentOption.size.name ? 'selected' : '']"
        :style="{
            width:  itemHeight * item.w / item.h + 'px',
            height: itemHeight + 'px'
          }">
          {{ item.name }}
        </div>
    </div>
  </option-box>
</template>
<script>
  import OptionBox from '@/components/option-box.vue'

  export default {
    extends: OptionBox,
    data () {
      return {
        itemHeight: 45
      }
    },
    components: {
      OptionBox
    }
  }
</script>
<style scoped>
  .content {
    overflow: auto;
  }
  .image-sizes-item {
    float: left;
    line-height: 50px;
    font-size: 14px;
    border: 1px solid #aaa;
    margin: 5px;
    cursor: pointer;
  }
  .selected {
    color: #00aa00;
    border-color: #00aa00;
  }
</style>
