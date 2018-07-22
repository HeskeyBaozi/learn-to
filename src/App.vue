<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import TopNav from '@/views/global/TopNav.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'app'
})
export default class App extends Vue {}
</script>

<style src="normalize.css"></style>

<style lang="scss">
$--font-path: "";
@import "~element-ui/packages/theme-chalk/src/index";

html {
  font-size: $--font-size-base; // 正文文本 14px
}
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
