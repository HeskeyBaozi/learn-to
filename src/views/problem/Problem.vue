<template>
  <div id="problem">
    <el-card class="card">
      <div class="group">
        <div class="background">
          <div>{{ problemId }}</div>
          <div class="name">{{ problem.name }}</div>
        </div>
        <div class="information">
          <div class="info-item">发布时间：{{ problem.publish }}</div>
          <div class="info-item">提交次数：{{ problem.submit }} </div>
          <div class="info-item">通过人数：{{ problem.passNum }}</div>
          <div class="info-item">空间限制：{{ problem.spaceLimit }}MB</div>
          <div>时间限制：{{ problem.timeLimit }}s</div>
        </div>
      </div>
      <div>
        <el-button>上一题</el-button>
        <el-button type="primary">下一题</el-button>
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
  name: string;
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
    name: '',
    publish: '',
    submit: 0,
    passNum: 0,
    spaceLimit: 0,
    timeLimit: 0
  };

  async mounted() {
    this.problemId = this.$route.params.problemId;
    // const result = await httpRequest.get('/problem/201');
    // 获取当前题目的详细数据
    this.problem = {
      name: 'Hello World',
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
    font-size: 16px;
    margin-top: 2rem;

    .group {
      display: inline-flex;
      flex-direction:row;
    }

    .background {
      width: 164px;
      height: 164px;
      background: #ddd;
      padding: 1rem;
      font-weight: bold;
      display: inline-block;

      .name {
        font-size: 1.5rem;
        margin-top: 3.7rem;
        text-align: center;
      }
    }

    .information {
      margin-left: 2rem;
      display: inline-block;

      .info-item {
        margin-bottom: 1.8rem;
      }
    }
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

<style lang="scss">
#problem {
  .card {
    .el-card__body {
      align-items: flex-start;
      justify-items: flex-start;
      display: flex;
      justify-content: space-between;
    }
  }

  .sub-containter {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
