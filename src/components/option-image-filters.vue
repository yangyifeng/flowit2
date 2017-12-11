<template>
  <option-box title="滤镜">
    <div class="content" slot="content">
      <div class="option-selector"
        @click.stop="toggleList">
        <div class="option-selected">
          {{ currentOption.filter.title || 'None' }}
        </div>
        <ul class="option-item-list"
          v-if="options && options.filters && isShowList">
          <li v-for="item in options.filters"
            @click="updateImageFilter(item)">
            {{ item.title }}
          </li>
        </ul>
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
        isShowList: false
      }
    },
    components: {
      OptionBox
    },
    methods: {
      toggleList () {
        this.isShowList = !this.isShowList
      }
    },
    mounted () {
      const oldHandler = document.onclick
      document.onclick = () => {
        if (typeof oldHandler === 'function') {
          oldHandler()
        }
        this.isShowList = false
      }
    }
  }
</script>
<style lang="less" scoped>
  .option-selector {
    text-align: left;
    cursor: pointer;
  }
  .option-item-list {
    position: absolute;
    z-index: 99;
    list-style: none;
    margin: 0;
    background: #fff;
    left: -1px;
    right: -1px;
    border: 1px solid #ddd;
    border-top: none;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    li {
      padding: 10px 0;
    }
  }
</style>
