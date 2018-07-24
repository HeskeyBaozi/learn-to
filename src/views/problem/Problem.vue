<template>
  <div id="problem">
    <h1>题目</h1>
    <el-card class="card">
      <div>
        <div class="card-item">
          <img src="" class="bg"/>
        </div>
        <div class="card-item">
          <div class="info">发布时间：{{ problem.publish }}</div>
          <div class="info">提交次数：{{ problem.submit }} </div>
          <div class="info">通过人数：{{ problem.passNum }}</div>
          <div class="info">空间限制：{{ problem.spaceLimit }}MB</div>
          <div class="info">时间限制：{{ problem.timeLimit }}S</div>
        </div>
        <div style="float: right;">
          <el-button>上一题</el-button>
          <el-button type="primary">下一题</el-button>
        </div>
      </div>
    </el-card>
    <el-card class="detail-card">
      <el-menu :default-active="'description'" mode="horizontal" @select="handleSelect" class="menu">
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
import { httpRequest } from '@/utils/httpRequest.ts';
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

  async mounted() {
    this.problemId = this.$route.params.problemId;
    const result = await httpRequest.get('/problem', {
      params: {
        id: this.problemId
      }
    });
    // 获取当前题目的详细数据
    this.problem = {
      publish: '2018-07-18',
      submit: 200,
      passNum: 100,
      spaceLimit: 32,
      timeLimit: 2
    };
  }

  handleSelect(key: string, keyPath: string[]) {
    this.$router.push({ name: key, params: { problemId: this.$route.params.problemId }});
  }
}
</script>

<style lang="scss" scoped>
#problem {
  .card {
    width: 100%;
  }

  .card-item {
    display: inline-block;
    margin-right: 1.5rem;
  }

  .bg {
    background: #999;
    width: 13.5rem;
    height: 13.5rem;
  }

  .info {
    font-size: 1.1rem;
    margin-bottom: 1.7rem;
  }

  .detail-card {
    margin-top: 2.9rem;
  }

  .menu {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
