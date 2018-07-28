<template>
  <div id="login-form">
    <el-tabs v-model="status">
      <el-tab-pane label="登录" name="login">
        <el-form class="login-form" :model="loginForm" ref="loginForm">
          <el-form-item prop="pass">
            <el-input type="text" auto-complete="off" placeholder="请输入用户名">
              <template slot="prefix">
                <fa-icon class="prefix" icon="user-circle"></fa-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" auto-complete="off" placeholder="请输入密码">
              <template slot="prefix">
                <fa-icon class="prefix" icon="lock"></fa-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="age">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>重置</el-button>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">配置管理</el-tab-pane>
    </el-tabs>

  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type LoginFormStatus = 'login' | 'register';

@Component({
  name: 'LoginForm'
})
export default class LoginForm extends Vue {
  status: LoginFormStatus = 'login';

  loginform = {
    name: '',
    password: ''
  };
}
</script>
<style lang="less" scoped>
#login-form {
  .login-form {
    .prefix {
      width: 1.5rem;
    }
  }
}
</style>
<style lang="less">
#login-form {
  .el-tabs__header {
    width: min-content;
    margin: 0 auto 1rem;
    .el-tabs__nav-wrap::after {
      background-color: initial;
    }
  }
}
</style>
