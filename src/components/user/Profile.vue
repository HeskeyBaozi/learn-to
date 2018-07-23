<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>个人信息</span>
    <el-button style="float: right; padding: 3px 0" type="primary">编辑</el-button>
  </div>
  <div v-for="o in 3" :key="o" class="text-item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'profile'
})
export default class Profile extends Vue {}
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
  }

  .box-card{
    width: 480px;
  }

</style>
