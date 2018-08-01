<template>
<div id="modify-password">
  <el-dialog :visible.sync="showModify" :show-close="true" width="30rem" @close="$emit('hideDialog');" center>
    <el-form :model="passForm" status-icon :rules="rules" ref="passForm"  class="demo-ruleForm">
      <el-form-item prop="oldPass">
        <el-input placeholder="请输入原密码" type="password" v-model="passForm.oldPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入新密码" type="password" v-model="passForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input placeholder="请确认新密码" type="password" v-model="passForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetForm">取消</el-button>
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
  data() {
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
      passForm: {
        oldPass: '',
        password: '',
        checkPass: ''
      },
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
  },
  methods: {
    resetForm() {
      this.$data.passForm.oldPass = '';
      this.$data.passForm.password = '';
      this.$data.passForm.checkPass = '';
    }
  }
});
</script>
<style lang="less" scoped>
</style>
