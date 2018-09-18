<template>
  <div id="app">
    <!-- 使用keepalive把已经加载的内容放入内存 -->
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
