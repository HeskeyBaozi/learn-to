<template>
<div id="modify-password">
  <el-dialog :visible.sync="showModify" :show-close="true"  @close="$emit('hideDialog');" center>
      <el-form :model="form" status-icon :rules="rules" ref="form">
        <el-form-item>
          <el-input :model="form.oldpass" placeholder="请输入原密码" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :model="form.password" placeholder="请输入新密码" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :model="form.checkpass" placeholder="请确认新密码" type="password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('passForm')">取消</el-button>
        <el-button type="primary" @click="submitForm('passForm')">确认修改</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    dialogVisible: Boolean
  },
  data: () => {
    const checkOld = (rule: any, value: any, callback: any) => {
      if (!value) {
        return callback(new Error('未输入原密码'));
      } else {
        callback();
      }
    };
    const validatePass = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('未输入新密码'));
      } else if (value !== '') {
        callback();
        }
    };
    const validatePass2 = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else {
        callback();
      }
    };
    return {
      form: {
        oldpass: '',
        password: '',
        checkpass: ''
      },
      formLabelWidth: '120px',
      rules: {
        oldPass: [
          { validator: checkOld, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  computed: {
    showModify: {
      get(): boolean {
        return this.dialogVisible;
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

</style>
<style lang="less">

</style>
