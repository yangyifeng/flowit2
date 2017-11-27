<template>
  <option-box title="滤镜">
    <div class="content" slot="content">
      <div class="option-selector" @click.stop="toggleList">
        <div class="option-selected">
          {{ selected.name }}
        </div>
        <ul class="option-item-list" v-if="isShowList">
          <li v-for="item in filters" @click="select(item)">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </option-box>
</template>
<script>
  import OptionBox from '@/components/option-box.vue'
  export default {
    data () {
      return {
        isShowList: false,
        selected: {
          name: 'none'
        },
        filters: [{
          name: 'light contrast',
          thumbnail: ''
        }, {
          name: 'none'
        }]
      }
    },
    components: {
      OptionBox
    },
    methods: {
      toggleList () {
        this.isShowList = !this.isShowList
      },
      select (item) {
        this.selected = item
        this.$emit('update:option', item)
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
