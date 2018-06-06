<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'app'
  })
  export default class App extends Vue {
  }
</script>


<style lang="scss">
  // 全局引入ElementUI样式 请勿删除
  @import "~normalize.css";

  $--font-path: "~element-ui/lib/theme-chalk/fonts";
  @import "~element-ui/packages/theme-chalk/src/index";
</style>

<style lang="scss">
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>
