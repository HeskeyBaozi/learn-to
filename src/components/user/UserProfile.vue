<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span id="title">个人信息</span>
      <el-button type="primary">
        <icon-text icon="pencil-alt" text="编辑"/>
      </el-button>
    </div>
    <div class="text-item">
      <span>手机:</span>{{mobile}}
    </div>
    <div class="text-item">
      <span>专业:</span>{{major}}
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


</style>
