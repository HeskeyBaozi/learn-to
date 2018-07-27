<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span id="title">个人信息</span>
      <el-button v-if="!editing" type="primary" @click="handleEditClick">
        <icon-text icon="pencil-alt" text="编辑"/>
      </el-button>
      <el-button v-if="editing" type="primary" @click="handleSubmitClick">
        <icon-text icon="check" text="提交"/>
      </el-button>
      <el-button id="cancelButton" v-if="editing" @click="handleCancelClick">
        <icon-text icon="reply" text="取消"/>
      </el-button>
    </div>
    <div class="text-item" id="phone">
      <span>手机:</span>
      <span v-if="!editing">{{mobile}}</span>
      <el-input v-if="editing"></el-input>
    </div>
    <div class="text-item">
      <span>专业:</span>
      <span v-if="!editing">{{major}}</span>
      <el-input v-if="editing"></el-input>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'user-profile'
})
export default class UserProfile extends Vue {
  mobile = '1777777';
  major = '软件工程';
  editing = false;

  handleEditClick() {
    this.editing = true;
  }
  handleCancelClick() {
    this.editing = false;
  }
  handleSubmitClick() {
    this.editing = false;
  }
}
</script>

<style lang="less" scoped>
  .text-item{
    font-size: 14px;
    margin-bottom: 1rem;
    margin-left: 3rem;
  }
  span{
    padding-bottom: 2rem;
  }

  .box-card{
    margin-left: auto;
    margin-right: auto;
    width: 85%;
  }

  #cancelButton{
    margin-right: 1rem;
  }

  #title{
    position: relative;
    font-size: 20px;
    top: 1rem;
  }

  .el-button{
    float: right;
  }


</style>
