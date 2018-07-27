<template>
  <div id="basic-layout">
    <el-container>
      <el-header class="header">
        <top-nav @showDialog="showDialog"></top-nav>
      </el-header>
      <el-container>
        <el-aside width="240px" class="aside">
          <NavList></NavList>
        </el-aside>
          <el-container style="height: 100vh">
            <LoginForm :dialogFormVisible="dialogFormVisible" @hideDialog="hideDialog"></LoginForm>
            <el-main class="main">
              <router-view></router-view>
            </el-main>
             <!--<el-footer>
              <div>
                <p>现在是 {{ Date.now() | format }}</p>
                <p>2017年10月1日距离现在 {{ Date.now() | formatDistance(new Date(2017, 10, 1)) }}</p>
              </div>
            </el-footer>-->
           </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import NavList from '@/components/NavList.vue';
import LoginForm from '@/components/user/LoginForm.vue';
import TopNav from '@/views/global/TopNav.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'basic-layout',
  components: {
    LoginForm,
    TopNav,
    NavList
  }
})
export default class BasicLayout extends Vue {
  dialogFormVisible = false;
  showDialog() {
    this.dialogFormVisible = true;
  }
  hideDialog() {
    this.dialogFormVisible = false;
  }
}
</script>

<style lang="less" scoped>
#basic-layout {
  .header {
    background-color: @color-primary;
    box-shadow: @box-shadow-base;
    z-index: 1;
    position: fixed;
    width: 100%;
    padding: 0px;
  }

  .main {
    background-color: @background-color-base;
    z-index: 0;
    margin-top: 60px;
  }
  .aside {
    padding-top: 60px;
    z-index: 0;
  }
}
</style>

