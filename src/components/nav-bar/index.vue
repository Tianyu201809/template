<template>
  <div class="nav-container">
    <div class="nav-bar">
      <div class="nav-left">
        <div class="nav-fav animated" @mouseover="addClass">Y</div>
      </div>
      <div class="nav-right">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="nav-item"
          @click="changeRouter()"
          @mouseleave="current = ''"
          @mouseover="current = index"
        >
          <div>{{ item }}</div>
          <!-- 底部动画效果 -->
          <div class="flag" :class="index === current ? 'animated tada' : ''"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      current: '',
      list: ['基础知识', '手写代码', '网络知识', '相关资料'],
    }
  },
  methods: {
    addClass() {
      const node = document.querySelector('.nav-fav')
      node.classList.add('rotateIn')
      setTimeout(() => {
        node.classList.remove('rotateIn')
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-container {
  width: 100%;
  background-color: #000;
  .nav-bar {
    margin: 0 auto;
    width: 80%;
    height: 64px;
    display: flex;
    align-items: center;
    color: #fff;
    .nav-left {
      width: 200px;
      min-width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      .nav-fav {
        border-radius: 50%;
        height: 50px;
        width: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 700;
        background-color: #f0ab00;
      }
    }
    .nav-right {
      display: flex;
      font-size: 18px;
      .nav-item {
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .flag {
          position: absolute;
          width: 50%;
          height: 3px;
          bottom: -5px;
          border-radius: 3px;
          background-color: #f0ab00;
          visibility: hidden;
        }
      }
      .nav-item:hover {
        cursor: pointer;
        position: relative;
        .flag {
          visibility: inherit;
        }
      }
    }
  }
}
</style>
