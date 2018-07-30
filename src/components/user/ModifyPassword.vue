<template>
<div id="modify-password">
  <el-form :model="passForm" :rules="modifyRules" ref="passForm"  class="passForm">
    <el-form-item prop="oldPass">
      <el-input placeholder="请输入原密码" type="password" v-model="passForm.oldPass" auto-complete="off">
        <template slot="prefix">
          <fa-icon class="prefix" icon="lock"></fa-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="请输入新密码" type="password" v-model="passForm.password" auto-complete="off">
        <template slot="prefix">
          <fa-icon class="prefix" icon="lock"></fa-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input placeholder="请确认新密码" type="password" v-model="passForm.checkPass" auto-complete="off">
        <template slot="prefix">
          <fa-icon class="prefix" icon="lock"></fa-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class='buttons'>
      <el-col :span="11">
        <el-button class='formButton' @click="resetForm">取消</el-button>
      </el-col>
      <el-col :offset="2" :span="11">
        <el-button class='formButton' type="primary" @click="submitForm">确认修改</el-button>
      </el-col>
    </el-form-item>
  </el-form>
</div>
</template>
<script lang="ts">

import { RuleDescription, ValidatorCallback } from '@/typings/element-ui';
import { ElForm } from 'element-ui/types/form';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ModifyPassword'
})
export default class ModifyPassword extends Vue {
  passForm = {
    oldPass: '',
    password: '',
    checkPass: ''
  };

  get modifyRules() {
    return {
      oldPass: [{ required: true, message: '请输入原密码', trigger: 'blur'}],
      password: [
        {
          trigger: 'blur',
          validator: (rule: RuleDescription<string>, value: string, callback: ValidatorCallback) => {
            if (value === '') {
              callback(new Error('请输入新密码'));
            } else {
              if (this.passForm.checkPass !== '') {
                (this.$refs.passForm as any).validateField('checkPass');
              }
              callback();
            }
          }
        }
      ],
      checkPass: [
        {
          trigger: 'blur',
          validator:  (rule: RuleDescription<string>, value: string, callback: ValidatorCallback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.passForm.password) {
              callback(new Error('两次输入密码不一致'));
            } else {
              callback();
            }
          }
        }
      ]
    };
  }

  resetForm() {
    (this.$refs.passForm as ElForm).resetFields();
    (this.$refs.passForm as ElForm).clearValidate();
  }

  async submitForm() {
    const isPassed = await (this.$refs.passForm as ElForm).validate();
  }
}
</script>
<style lang="less" scoped>
  .passForm {
    .prefix {
      width: 1.5rem;
    }
    .formButton{
      width: 100%;
    }
  }
</style>
