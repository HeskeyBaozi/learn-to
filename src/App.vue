<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import NavList from '@/components/NavList.vue';
import TopNav from '@/views/global/TopNav.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'app'
})
export default class App extends Vue {}
</script>

<style src="normalize.css"></style>
<style src="element-ui/lib/theme-chalk/index.css"></style>

<style lang="less">
html {
  font-size: @font-size-base; // 正文文本 14px
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: @color-text-primary;
}

body {
  background-color: @background-color-base;
}

a {
  color: @link-color;
  &:hover {
    color: @link-hover-color;
  }
}
</style>
