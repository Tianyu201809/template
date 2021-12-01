<template>
  <div class="side-bar">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="side-bar-item"
      :class="index === current ? '' : ''"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      list: ['收藏', '分享', '', ''],
    }
  },
}
</script>

<style lang="scss" scoped>
.side-bar {
  position: fixed;
  left: 0;
  top: 144px;
  width: 80px;
  background-color: #0a5ab6;
  color: #fff;
  height: 360px;
  border: 1px solid #0a5ab6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .side-bar-item {
    overflow: hidden;
    margin: 10px 0;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid #fff;
    border-radius: 50%;
  }
}
</style>
