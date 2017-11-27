<template>
  <option-box title="尺寸">
    <div class="content" slot="content">
      <div
        v-for="item in sizes"
        @click="select(item)"
        :class="['image-sizes-item', item.name === selected.name ? 'selected' : '']"
        :style="{
            width:  itemHeight * item.width / item.height + 'px',
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
    data () {
      return {
        selected: {},
        itemHeight: 45,
        sizes: [{
          name: 'wechat',
          width: 900,
          height: 500
        }, {
          name: 'weibo',
          width: 200,
          height: 200
        }]
      }
    },
    components: {
      OptionBox
    },
    methods: {
      select (item) {
        this.selected = item
        this.$emit('update:option', item)
      }
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
