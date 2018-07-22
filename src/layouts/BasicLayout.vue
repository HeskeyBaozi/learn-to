<template>
  <div id="basic-layout">
    <el-container>
      <el-header class="header">
        <top-nav></top-nav>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main class="main">
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
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'basic-layout',
  components: {
    TopNav
  }
})
export default class BasicLayout extends Vue {}
</script>

<style lang="scss" scoped>
#basic-layout {
  .header {
    box-shadow: $--box-shadow-base;
    z-index: $--index-normal;
  }

  .main {
    background-color: $--background-color-base;
  }
}
</style>

