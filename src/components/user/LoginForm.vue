<template>
<div id="login-form">
  <el-dialog :visible.sync="show" :show-close="true" width="720px" 
  @close="$emit('hideDialog');">
    <el-container style="float: left; width: 720px; height: 480px">
      <el-aside width="360px">
        <img src="@/assets/logo.png"/>
      </el-aside>
    <el-main width="360px">
      <el-form :model="form">
        <el-form-item style="text-align: center;">
          <img src="@/assets/test.jpg" id="login-userlogo"/>
        </el-form-item>
        <el-form-item>
          <el-input :model="form.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item> 
        <el-form-item>
          <p id="forget-password">忘记密码</p>
        </el-form-item>
      </el-form>
      <el-button id="register">快速注册</el-button>
      <el-button>进入MOJ</el-button>
      </el-main>
    </el-container>
  </el-dialog>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    dialogFormVisible: Boolean
  },
  data: () => {
    return {
      form: {
        name: '',
        password: ''
      },
      formLabelWidth: '120px'
    };
  },
  computed: {
    show: {
      get(): boolean {
        return this.dialogFormVisible;
      },
      set(newValue: boolean): void {
        this.$emit('closeOrOpen');
      }
    }
  }
});
</script>
<style lang="less" scoped>
  .el-dialog {
    position:fixed;
    margin: 0 auto;
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
 #login-form .el-dialog__body {
    // padding: 32px;
    //padding-bottom: 0px;
    padding: 0px;
  }
  #login-form .el-dialog__header {
    padding: 0px;
  }
  #login-form .el-form-item {
    margin-bottom: 24px;
  }
  #login-form .el-dialog__footer {
    padding-top: 0px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: left;
  }
  #login-form .el-dialog {
    height: 480px;
  }
  #login-form .el-main {
    padding-left: 32px;
    padding-right: 32px;
  }
  #login-form .el-button {
    box-sizing: border-box;
    height: 40px;
    width: 100px;
    margin-left: 0px;
  }
  #register {
    margin-right: 90px;
  }
</style>