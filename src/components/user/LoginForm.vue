<template>
  <div id="login-form">
    <el-tabs v-model="status">
      <el-tab-pane label="登录" name="login">
        <div class="avatar-wrapper">
          <img class="avatar" src="http://via.placeholder.com/120x120" alt="avatar">
        </div>
        <el-form class="login-form" :model="loginForm" ref="loginForm" :rules="loginFormRules">
          <el-form-item prop="username">
            <el-input type="text" auto-complete="off" v-model="loginForm.username" placeholder="用户名">
              <template slot="prefix">
                <fa-icon class="prefix" icon="user-circle"></fa-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" auto-complete="off" v-model="loginForm.password" placeholder="密码">
              <template slot="prefix">
                <fa-icon class="prefix" icon="lock"></fa-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="captcha">
            <el-col :span="14">
              <el-input type="text" auto-complete="off" v-model="loginForm.captcha" placeholder="验证码">
                <template slot="prefix">
                  <fa-icon class="prefix" icon="keyboard"></fa-icon>
                </template>
              </el-input>
            </el-col>
            <el-col :offset="1" :span="9">
              <img class="captcha" src="http://via.placeholder.com/100x32" alt="captcha">
            </el-col>
          </el-form-item>
          <el-form-item prop="rememberMe">
            <el-col :span="12">
              <el-checkbox v-model="loginForm.rememberMe">记住我</el-checkbox>
            </el-col>
            <el-col class="forget-password-wrapper" :span="12">
              <a href="#">忘记密码</a>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="11">
              <el-button class="form-button" @click="reset('login')">
                <icon-text icon="undo" text="清空"></icon-text>
              </el-button>
            </el-col>
            <el-col :offset="2" :span="11">
              <el-button class="form-button" type="primary" @click="submit('login')">
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
import { ElForm } from 'element-ui/types/form';
import { Component, Prop, Vue } from 'vue-property-decorator';

type LoginFormStatus = 'login' | 'register';

@Component({
  name: 'LoginForm'
})
export default class LoginForm extends Vue {
  status: LoginFormStatus = 'login';

  loginForm = {
    username: '',
    password: '',
    captcha: '',
    rememberMe: false
  };

  get loginFormRules() {
    return {
      username: [
        {
          trigger: 'blur',
          validator: (
            rule: any,
            value: string,
            callback: (error?: Error) => void
          ) => {
            if (value === '') {
              callback(new Error('请输入用户名'));
            }
            callback();
          }
        }
      ],
      password: [
        {
          trigger: 'blur',
          validator: (
            rule: any,
            value: string,
            callback: (error?: Error) => void
          ) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            }
            callback();
          }
        }
      ],
      captcha: [
        {
          trigger: 'blur',
          validator: (
            rule: any,
            value: string,
            callback: (error?: Error) => void
          ) => {
            if (value === '') {
              callback(new Error('请输入验证码'));
            }
            callback();
          }
        }
      ]
    };
  }

  reset(status: LoginFormStatus) {
    if (status === 'login') {
      (this.$refs.loginForm as ElForm).resetFields();
    }
  }

  async submit(status: LoginFormStatus) {
    if (status === 'login') {
      const isPassed = await (this.$refs.loginForm as ElForm).validate();
      if (isPassed) {
        // tslint:disable-next-line:no-console
        console.log(Object.freeze({ ...this.loginForm }));
      }
    }
  }
}
</script>
<style lang="less" scoped>
#login-form {
  .avatar-wrapper {
    margin-bottom: 1rem;
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

    .captcha {
      display: block;
      height: 32px; // specific the height
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
