<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span id="title">个人展示</span>
      <el-button style="float: right" type="primary" icon="el-icon-edit">编辑</el-button>
    </div>
    <div class="text-item">
      <span>个人网站:</span>{{webIP}}
    </div>
    <div class="text-item">
      <span>个人签名:</span>{{idiograph}}
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'presentation'
})
export default class Presentation extends Vue {
  webIP = '';
  idiograph = '';
}
</script>

<style lang="less" scoped>
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
