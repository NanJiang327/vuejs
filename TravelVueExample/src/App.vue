<template>
  <div id="app">
    <!-- 使用keepalive把已经加载的内容放入内存 -->
    <!-- KEEP ALIVE 可以设置exclude来选择不缓存这个数据 -->
    <!-- <keep-alive exclude="Detial"></keep-alive> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
