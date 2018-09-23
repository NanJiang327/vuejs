<template>
  <div>
    <div class="content-wrapper">
    <div class="avatar">
      <img :src="this.seller.avatar" alt="">
    </div>
   </div>
  <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'Seller',
  props: {
    seller: Object
  }
}
</script>

<style>

</style>
