<template>
  <el-container id="basic-layout" :class="basicLayoutClassName">
    <el-aside :width="leftSiderWidth" class="sider">
      <left-sider></left-sider>
    </el-aside>
    <el-container class="inner-container">
      <el-header class="header">
        <top-nav></top-nav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!--<el-footer>Footer</el-footer>-->
    </el-container>
    <el-dialog custom-class="matrix-login-dialog" :visible.sync="isLoginDialogVisible" width="720px" :append-to-body="true" :show-close="false" @close="onCloseLoginFormDialog">
      <div class="login-form-left">
        <img src="http://via.placeholder.com/360x480" alt="holder">
      </div>
      <login-form :loading="isFormLoading" ref="loginForm" class="login-form" @submit="onLoginFormSubmit" @register="onRegisterFormSubmit"></login-form>
    </el-dialog>
  </el-container>
</template>

<script lang="ts">
import NavList from '@/components/NavList.vue';
import LoginForm from '@/components/user/LoginForm.vue';
import { RootStore } from '@/stores';
import {
  IS_LOGIN,
  LOG_IN,
  LOG_OUT,
  REGISTER
} from '@/stores/modules/authorization/contants';
import {
  IS_COLLAPSE,
  IS_LOGIN_DIALOG_VISIBLE,
  MODIFY_IS_LOGIN_DIALOG_VISIBLE
} from '@/stores/modules/layout/contants';
import { LoginFormFields, RegisterFormFields } from '@/typings/auth';
import LeftSider from '@/views/global/LeftSider.vue';
import TopNav from '@/views/global/TopNav.vue';
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
  get isCollapse(): boolean {
    return this.$store.getters[`layout/${IS_COLLAPSE}`];
  }

  get isLoginDialogVisible(): boolean {
    return this.$store.getters[`layout/${IS_LOGIN_DIALOG_VISIBLE}`];
  }

  set isLoginDialogVisible(val: boolean) {
    this.$store.commit(`layout/${MODIFY_IS_LOGIN_DIALOG_VISIBLE}`, {
      isLoginDialogVisible: val
    });
  }

  get leftSiderWidth() {
    return this.isCollapse ? '64px' : '240px';
  }

  get basicLayoutClassName() {
    return {
      ['is-collapse']: this.isCollapse
    };
  }

  get isFormLoading(): boolean {
    const loading = (this.$store as RootStore).state.loading;
    return Boolean(
      loading[`authorization/${LOG_IN}`] || loading[`authorization/${REGISTER}`]
    );
  }

  onCloseLoginFormDialog() {
    if (this.$refs.loginForm) {
      (this.$refs.loginForm as LoginForm).resetAll();
    }
  }

  async onLoginFormSubmit(fields: LoginFormFields) {
    const { response } = await this.$store.dispatch(`authorization/${LOG_IN}`, {
      fields
    });
    if (response.statusText === 'ok') {
      this.$notify.success(`欢迎回来, ${response.data.username}!`);
    }
  }

  async onRegisterFormSubmit(fields: RegisterFormFields) {
    await this.$store.dispatch(`authorization/${REGISTER}`, { fields });
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
    height: 100vh;
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
