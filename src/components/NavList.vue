<template>
<div id="NavList">
  <el-container>
    <el-header height="180px">
      <img src="@/assets/test.jpg" id="nav-logo"/>
      <p style="text-align: center;font-size: 16px;">好同学</p>
      <p style="text-align: center;font-size: 14px;">学生</p>
    </el-header>
    <el-main>
      <el-menu mode="vertical" :router="true">
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/problems">题库</el-menu-item>
        <el-menu-item index="/statistic">统计</el-menu-item>
      </el-menu>
    </el-main>
  </el-container>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'NavList'
})
export default class NavList extends Vue {}
</script>
<style lang="less" scoped>
  #NavList {
    position: fixed;
    width: 240px;
  }
  #nav-logo {
    border-radius: 50% 50% 50% 50%;
    width: 100px; 
    display: block;
    margin: 0 auto;
  }
</style>
<style lang="less">
  #NavList .el-main {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 32px;
  }
  #NavList .el-header {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 40px;
  }
</style>
