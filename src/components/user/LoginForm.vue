<template>
<div id="login-form">
  <el-dialog :visible.sync="show" :show-close="true" width="720px"
  @close="show=false;">
    <el-container style="float: left; width: 720px;">
      <el-aside width="360px">
        <img src="@/assets/logo.png"/>
      </el-aside>
    <el-main width="360px">
      <transition name="el-zoom-in-center">
      <el-form v-show="showLogin">
        <el-form-item style="text-align: center;" v-show="showLogin" key="1">
          <img src="@/assets/test.jpg" id="login-userlogo"/>
        </el-form-item>
        <el-form-item  v-show="showLogin" key="2">
          <el-input v-model="loginform.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item  v-show="showLogin" key="3">
          <el-input v-model="loginform.password" placeholder="请输入密码"></el-input>
        </el-form-item> 
        <el-form-item  v-show="showLogin" key="4">
          <p id="forget-password">忘记密码</p>
        </el-form-item>
      </el-form>
      </transition>
      <transition name="el-zoom-in-center">
        <el-form v-show="!showLogin" class="register-form">
          <el-form-item  v-show="!showLogin" key="5" style="padding-top: 60px;">
            <el-input v-model="registerform.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item  v-show="!showLogin" key="6">
            <el-input v-model="registerform.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item  v-show="!showLogin" key="7">
            <el-input v-model="registerform.repeatPassword" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item  v-show="!showLogin" key="8">
            <el-input v-model="registerform.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
        </el-form>
      </transition>
      <el-button class="regOrLogin" v-show="showLogin" @click="showLogin=!showLogin"
        key="register">快速注册</el-button>
      <el-button v-show="showLogin"
        key="login" class="enter">进入MOJ</el-button>
      <el-button class="regOrLogin" v-show="!showLogin" @click="showLogin=!showLogin"
        key="return">返回登陆</el-button>
      <el-button v-show="!showLogin"
        key="registered" class="enter">注册</el-button>
    </el-main>
    </el-container>
  </el-dialog>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'LoginForm'
})
export default class LoginForm extends Vue {
  @Prop(Boolean) dialogFormVisible!: boolean;
  loginform = {
    name: '',
    password: ''
  };
  registerform = {
    name : '',
    password: '',
    repeatPassword: '',
    email: ''
  };
  showLogin = true;
  get show(): boolean {
    return this.dialogFormVisible;
  }
  set show(newValue) {
    this.$emit('hideDialog');
  }
}
</script>
<style lang="less" scoped>
  .el-dialog {
    position:fixed;
    margin: 0 auto;
    height: 480px;
  }
  #login-userlogo {
    width: 120px;
    border-radius: 50% 50% 50% 50%;
  }
  #forget-password {
    margin-top: -10px;
    margin-bottom: 0px;
    text-align: right;
    color: rgb(64, 158, 255);
  }
</style>
<style lang="less">
 #login-form {
    .el-dialog__body {
      padding: 0px;
    }
    .el-dialog__header {
      padding: 20px;
    }
    .el-form-item {
      margin-bottom: 24px;
    }
    .el-dialog__footer {
      padding-top: 0px;
      padding-left: 24px;
      padding-right: 24px;
      text-align: left;
    }
    .el-dialog {
      height: 480px;
    }
    .el-main {
      padding-left: 32px;
      padding-right: 32px;
    }
    .el-button {
      box-sizing: border-box;
      height: 40px;
      width: 100px;
      margin-left: 0px;
    }
  }
  .regOrLogin.el-button {
    margin-right: 95px;
  }
  .el-button.enter {
    background-color: rgb(64, 158, 255);
    color: white;
  }
  .el-button.enter:hover {
    background-color: rgb(102, 177, 255);
    color: white;
  }
</style>