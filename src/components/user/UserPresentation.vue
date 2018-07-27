<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span id="title">个人展示</span>
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
    <div class="text-item">
      <span>个人网站:</span>
      <span v-if="!editing">{{webIP}}</span>
      <el-input v-if="editing"></el-input>
    </div>
    <div class="text-item">
      <span>个人签名:</span>
      <span v-if="!editing">{{idiograph}}</span>
      <el-input v-if="editing"></el-input>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'user-presentation'
})
export default class UserPresentation extends Vue {
  webIP = '';
  idiograph = '';
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

  .box-card{
    margin-left: auto;
    margin-right: auto;
    width: 85%;
  }

  #title{
    position: relative;
    font-size: 20px;
    top: 1rem;
  }

  .el-button{
    float: right;
  }

  #cancelButton{
    margin-right: 1rem;
  }

</style>
