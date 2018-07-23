<template>
  <div id="problem">
    <h1>题目</h1>
    <el-card class="problem-card">
      <div>
        <div class="problem-card-item">
          <img src="" class="problem-bg"/>
        </div>
        <div class="problem-card-item">
          <div class="problem-info">发布时间：{{ problem.publish }}</div>
          <div class="problem-info">提交次数：{{ problem.submit }} </div>
          <div class="problem-info">通过人数：{{ problem.passNum }}</div>
          <div class="problem-info">空间限制：{{ problem.spaceLimit }}MB</div>
          <div class="problem-info">时间限制：{{ problem.timeLimit }}S</div>
        </div>
        <div style="float: right;">
          <el-button>上一题</el-button>
          <el-button type="primary">下一题</el-button>
        </div>
      </div>
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

interface ProblemItem {
  publish: string;
  submit: number;
  passNum: number;
  spaceLimit: number;
  timeLimit: number;
}

@Component({
  name: 'problem'
})
export default class Problem extends Vue {
  problemId: string = '';
  problem: ProblemItem = {
    publish: '',
    submit: 0,
    passNum: 0,
    spaceLimit: 0,
    timeLimit: 0
  };

  mounted() {
    this.problemId = this.$route.params.problemId;
    // 获取当前题目的详细数据
    this.problem = {
      publish: '2018-07-18',
      submit: 200,
      passNum: 100,
      spaceLimit: 32,
      timeLimit: 2
    };
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

.problem-card-item {
  display: inline-block;
  margin-right: 20px;
}

.problem-bg {
  background: #999;
  width: 192px;
  height: 192px;
}

.problem-info {
  font-size: 16px;
  margin-bottom: 24px;
}

.problem-detail-card {
  margin-top: 32px;
}

.problem-menu {
  display: flex;
  justify-content: flex-end;
}
</style>
