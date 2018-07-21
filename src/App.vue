<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <top-nav></top-nav>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main class="main">
              <NavList style="float: left" role="管理员"></NavList>
              <router-view></router-view>
            </el-main>
            <el-footer>
              <div>
                <p>现在是 {{ Date.now() | format }}</p>
                <p>2017年10月1日距离现在 {{ Date.now() | formatDistance(new Date(2017, 10, 1)) }}</p>
              </div>
            </el-footer>
           </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import TopNav from '@/views/global/TopNav.vue';
import NavList from '@/components/NavList.vue'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'app',
  components: {
    TopNav,
    NavList
  }
})
export default class App extends Vue {}
</script>

<style src="normalize.css"></style>

<style lang="scss">
// 全局引入ElementUI样式 请勿删除
$--font-path: "~element-ui/lib/theme-chalk/fonts";
@import "~element-ui/packages/theme-chalk/src/index";
</style>

<style lang="scss">
// 其他全局样式设定写在这里
html {
  font-size: $--font-size-base;
}
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>

<style lang="scss" scoped>
#app {
  .header {
    box-shadow: $--box-shadow-base;
    z-index: $--index-normal;
  }

  .main {
    background-color: $--background-color-base;
  }
}
</style>

