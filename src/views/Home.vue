<template>
  <div>
    <nav-bar />
    <side-bar />
  </div>
</template>

<script>
import navBar from '@/components/nav-bar'
import sideBar from '@/components/side-bar'
export default {
  components: {
    navBar,
    sideBar,
  },
}
</script>

<style lang="scss" scoped></style>
