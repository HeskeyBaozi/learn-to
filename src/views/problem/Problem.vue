<template>
  <div id="problem">
    <h1>题目</h1>
    <el-card class="problem-card">
      <el-row>
        <el-col :span="6"><img src="" class="problem-bg"/></el-col>
        <el-col :span="12" class="problem-info">
          <div>发布时间：2018-07-18</div>
        </el-col>
        <el-col :span="6">
          <el-button>上一题</el-button>
          <el-button type="primary">下一题</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="problem-detail-card">
      <el-menu :default-active="'description'" mode="horizontal" @select="handleSelect" class="problem-menu">
        <el-menu-item index="description">题目描述</el-menu-item>
        <el-menu-item index="solution">答题区域</el-menu-item>
        <el-menu-item index="records">提交记录</el-menu-item>
        <el-menu-item index="score">成绩报告</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'problem'
})
export default class Problem extends Vue {
  problemId: string = '';

  mounted() {
    this.problemId = this.$route.params.problemId;
  }

  handleSelect(key: any, keyPath: any) {
    this.$router.push({ name: key, params: { problemId: this.$route.params.problemId }});
  }
}
</script>

<style lang="scss" scoped>
#problem {
}

.problem-card {
  width: 100%;
}

.problem-bg {
  background: #999;
  width: 192px;
  height: 192px;
}

.problem-info {
  font-size: 16px;
}

.problem-detail-card {
  margin-top: 32px;
}

.problem-menu {
  display: flex;
  justify-content: flex-end;
}
</style>
