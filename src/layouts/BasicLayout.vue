<template>
  <el-container id="basic-layout" :class="basicLayoutClassName">
    <el-aside :width="leftSiderWidth" class="sider">
      <left-sider :isCollapse="isCollapse"></left-sider>
    </el-aside>
    <el-container class="inner-container" style="height: 100vh;">
      <el-header class="header">
        <top-nav :isCollapse="isCollapse" @toggle-collapse="toggleCollapse" @select="handleSelect"></top-nav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!--<el-footer>Footer</el-footer>-->
    </el-container>
    <el-dialog custom-class="matrix-login-dialog" :visible.sync="isLoginDialogVisible" width="720px" :append-to-body="true" :show-close="false">
      <div class="login-form-left">
        <img src="http://via.placeholder.com/360x480" alt="holder">
      </div>
      <login-form class="login-form"></login-form>
    </el-dialog>
  </el-container>
</template>

<script lang="ts">
import NavList from '@/components/NavList.vue';
import LoginForm from '@/components/user/LoginForm.vue';
import LeftSider from '@/views/global/LeftSider.vue';
import TopNav, { ItemNameType } from '@/views/global/TopNav.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'basic-layout',
  components: {
    LeftSider,
    TopNav,
    LoginForm
  }
})
export default class BasicLayout extends Vue {
  isCollapse = true;
  isLoginDialogVisible = false;

  get leftSiderWidth() {
    return this.isCollapse ? '64px' : '240px';
  }

  get basicLayoutClassName() {
    return {
      ['is-collapse']: this.isCollapse
    };
  }

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }

  handleSelect(name: ItemNameType) {
    switch (name) {
      case 'login':
        // tslint:disable-next-line:no-console
        this.isLoginDialogVisible = true;
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="less" scoped>
#basic-layout {
  .sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: @index-top + 1;
    box-shadow: @box-shadow-base;
    transition: all 0.3s;
    min-height: 100vh;
    background-color: @color-white;
  }

  .inner-container {
    padding-top: @header-height;
    padding-left: @aside-width;
    transition: all 0.3s;
    .header {
      position: fixed;
      top: 0;
      right: 0;
      left: @aside-width;
      padding: 0; // override element-ui default padding.
      z-index: @index-top;
      box-shadow: @box-shadow-base;
      transition: all 0.3s;
      overflow: hidden;
      background-color: @color-primary;
      color: @color-white;
    }
  }
}

.is-collapse {
  .inner-container {
    padding-left: @aside-collapse-width !important;
    .header {
      left: @aside-collapse-width !important;
    }
  }
}

.matrix-login-dialog {
  .login-form-left {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 360px; // default to 360px
  }
  .login-form {
    padding-left: calc(50% + 1.5rem);
  }
}
</style>

<style lang="less">
.matrix-login-dialog {
  .el-dialog__header {
    padding: 0; // override element-ui default style
  }
  .el-dialog__body {
    box-sizing: border-box;
    padding: 1.5rem;
    height: 480px;
  }
}
</style>
