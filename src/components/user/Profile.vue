<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span id="title">个人信息</span>
      <el-button style="float: right" type="primary" icon="el-icon-edit">编辑</el-button>
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
  name: 'profile'
})
export default class Profile extends Vue {
  mobile = '1777777';
  major = '软件工程';
}
</script>

<style lang="scss" scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .text-item{
    font-size: 14px;
    margin-bottom: 18px;
    margin-left: 50px;
  }

  .box-card{
    margin-left: auto;
    margin-right: auto;
    width: 85%;
  }

  #title{
    position: relative;
    font-size: 20px;
    top: 15px;
  }

</style>
