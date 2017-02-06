<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-item">
      <a v-link="{path:'/goods'}">商品</a>
    </div>
    <div class="tab-item">
      <a v-link="{path:'/ratings'}">评论</a>
    </div>
    <div class="tab-item">
      <a v-link="{path:'/seller'}">商家</a>
    </div>
    <router-view : seller:"seller" keep-alive></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import header from 'components/header/header.vue';
  export default {
    components: {
      'v-header': header
    }
  };

</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
