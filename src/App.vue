<template>
  <div id="app">
    <el-container>
      <el-header height="60px">
        <div>
          Top Nav
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div>
          Footer
        </div>
      </el-footer>
    </el-container>
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

<style src="normalize.css"></style>

<style lang="scss">
  // 全局引入ElementUI样式 请勿删除
  $--font-path: "~element-ui/lib/theme-chalk/fonts";
  @import "~element-ui/packages/theme-chalk/src/index";
</style>

<style lang="scss">
  // 其他全局样式设定写在这里
  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>
