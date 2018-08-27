<template>
  <div id="login-form">
    <el-tabs v-model="status">
      <!-- 登录 -->
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
              <el-checkbox v-show="false" v-model="loginForm.rememberMe">记住我</el-checkbox>
            </el-col>
            <el-col class="forget-password-wrapper" :span="12" :offset="12">
              <a href="#">忘记密码</a>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="11">
              <el-button :loading="loading" class="form-button" @click="reset('login')">
                <icon-text :hideIcon="loading" icon="undo" text="清空"></icon-text>
              </el-button>
            </el-col>
            <el-col :offset="2" :span="11">
              <el-button :loading="loading" class="form-button" type="primary" @click="submit('login')">
                <icon-text :hideIcon="loading" icon="check" text="登录"></icon-text>
              </el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <!-- 注册 -->
      <el-tab-pane label="注册" name="register">
        <el-form class="login-form" :model="registerForm" ref="registerForm" :rules="registerFormRules">
          <el-form-item prop="username">
            <el-input type="text" auto-complete="off" v-model="registerForm.username" placeholder="用户名">
              <template slot="prefix">
                <fa-icon class="prefix" icon="user-circle"></fa-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" auto-complete="off" v-model="registerForm.password" placeholder="密码">
              <template slot="prefix">
                <fa-icon class="prefix" icon="lock"></fa-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="repassword">
            <el-input type="password" auto-complete="off" v-model="registerForm.repassword" placeholder="重复密码">
              <template slot="prefix">
                <fa-icon class="prefix" icon="lock"></fa-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="text" auto-complete="off" v-model="registerForm.email" placeholder="邮箱">
              <template slot="prefix">
                <fa-icon class="prefix" icon="envelope"></fa-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-col :span="11">
              <el-button :loading="loading" class="form-button" @click="reset('register')">
                <icon-text :hideIcon="loading" icon="undo" text="清空"></icon-text>
              </el-button>
            </el-col>
            <el-col :offset="2" :span="11">
              <el-button :loading="loading" class="form-button" type="primary" @click="submit('register')">
                <icon-text :hideIcon="loading" icon="check" text="注册"></icon-text>
              </el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { LoginFormFields, RegisterFormFields } from '@/typings/auth';
import { RuleDescription, ValidatorCallback } from '@/typings/element-ui';
import { ElForm } from 'element-ui/types/form';
import { Component, Prop, Vue } from 'vue-property-decorator';

type LoginFormStatus = 'login' | 'register';

@Component({
  name: 'LoginForm'
})
export default class LoginForm extends Vue {
  @Prop({
    type: Boolean
  })
  loading!: boolean;
  status: LoginFormStatus = 'login';

  loginForm: LoginFormFields = {
    username: '',
    password: '',
    captcha: '',
    rememberMe: false
  };

  get loginFormRules() {
    return {
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
    };
  }

  registerForm: RegisterFormFields = {
    username: '',
    password: '',
    repassword: '',
    email: ''
  };

  get registerFormRules() {
    return {
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [
        {
          trigger: 'blur',
          validator: (
            rule: RuleDescription<string>,
            value: string,
            callback: ValidatorCallback
          ) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.registerForm.repassword !== '') {
                (this.$refs.registerForm as any).validateField('repassword');
              }
              callback();
            }
          }
        }
      ],
      repassword: [
        {
          trigger: 'blur',
          validator: (
            rule: RuleDescription<string>,
            value: string,
            callback: ValidatorCallback
          ) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.registerForm.password) {
              callback(new Error('两次输入密码不一致'));
            } else {
              callback();
            }
          }
        }
      ],
      email: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        {
          type: 'email',
          message: '请输入正确格式的邮箱地址',
          trigger: ['blur']
        }
      ]
    };
  }

  mounted() {
    this.resetAll();
  }

  resetAll() {
    this.reset('login');
    this.reset('register');
  }

  reset(status: LoginFormStatus) {
    if (status === 'login') {
      (this.$refs.loginForm as ElForm).resetFields();
      (this.$refs.loginForm as ElForm).clearValidate();
    } else if (status === 'register') {
      (this.$refs.registerForm as ElForm).resetFields();
      (this.$refs.registerForm as ElForm).clearValidate();
    }
  }

  async submit(status: LoginFormStatus) {
    if (status === 'login') {
      const isPassed = await (this.$refs.loginForm as ElForm).validate();
      if (isPassed) {
        this.$emit('submit', Object.freeze({ ...this.loginForm }));
      }
    } else if (status === 'register') {
      const isPassed = await (this.$refs.registerForm as ElForm).validate();
      if (isPassed) {
        this.$emit('register', Object.freeze({ ...this.loginForm }));
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
