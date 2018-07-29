<template>
  <div id="login-form">
    <el-tabs v-model="status">
      <el-tab-pane label="登录" name="login">
        <div class="avatar-wrapper">
          <img class="avatar" src="http://via.placeholder.com/120x120" alt="avatar">
        </div>
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
            <el-col :span="12">
              <el-checkbox>记住我</el-checkbox>
            </el-col>
            <el-col class="forget-password-wrapper" :span="12">
              <a href="#">忘记密码</a>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="11">
              <el-button class="form-button">
                <icon-text icon="undo" text="清空"></icon-text>
              </el-button>
            </el-col>
            <el-col :offset="2" :span="11">
              <el-button class="form-button" type="primary">
                <icon-text icon="check" text="登录"></icon-text>
              </el-button>
            </el-col>
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

  loginForm = {
    name: '',
    password: ''
  };
}
</script>
<style lang="less" scoped>
#login-form {
  .avatar-wrapper {
    margin: 1rem 0 2rem 0;
    text-align: center;
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      box-shadow: @box-shadow-base;
    }
  }
  .login-form {
    .prefix {
      width: 1.5rem;
    }
    .forget-password-wrapper {
      text-align: right;
    }

    .form-button {
      width: 100%;
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
