<template>
  <div id="user-profile">
    <el-container class="row">
      <div class="info">
        <user-card :userProfile="profile"></user-card>
      </div>
      <div class="info">
        <ac-chart :chartData="AcChartData"></ac-chart>
      </div>
    </el-container>
    <el-container style="margin-top: 2rem;" class="row">
      <div class="info">
        <data-statistic :statisticInfo="statisticInfo"></data-statistic>
      </div>
      <div class="info">
        <recent-problem :personalProblemData="personalProblemData" v-on:jump="jumpToProblem"></recent-problem>
      </div>
    </el-container>
  </div>
</template>

<script lang="ts">
import AcChart from '@/components/statistic/AcChart.vue';
import DataStatistic from '@/components/statistic/DataStatistic.vue';
import RecentProblem from '@/components/user/RecentProblem.vue';
import UserCard from '@/components/user/UserCard.vue';
import store from '@/stores';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'user-profile',
  components: {
    AcChart,
    DataStatistic,
    RecentProblem,
    UserCard
  }
})
export default class UserProfile extends Vue {
  // 个人做题信息统计: AC数/AC率/最高排名/做题总数
  get statisticInfo() {
    return {
      acNum: 12,
      acRate: 80,
      topRank: 6,
      totalProblems: 120
    };
  }

  get profile() {
    return {
      avatar: '/img/test.155d4d32.jpg',
      username: '加同学',
      email: '905965287@qq.com',
      website: 'vmatrix.org.cn',
      signature: 'vvvmatrix'
    };
  }

  // 获取指定用户近期做题记录
  get personalProblemData() {
    return [{
      problemId: 201,
      name: 'Hello World'
    }, {
      problemId: 202,
      name: 'A+B'
    }, {
      problemId: 203,
      name: '简单乘法'
    }, {
      problemId: 201,
      name: 'Hello World'
    }, {
      problemId: 202,
      name: 'A+B'
    }];
  }

   get AcChartData() {
    return [{
      week: '2018/05/28',
      AC: 15468
    }, {
      week: '2018/06/04',
      AC: 16100
    }, {
      week: '2018/06/11',
      AC: 15900
    }, {
      week: '2018/06/18',
      AC: 17409
    }, {
      week: '2018/06/25',
      AC: 17000
    }, {
      week: '2018/07/02',
      AC: 31056
    }, {
      week: '2018/07/09',
      AC: 31982
    }, {
      week: '2018/07/16',
      AC: 32040
    }, {
      week: '2018/07/23',
      AC: 33233
    }];
  }

  jumpToProblem(problemId: number) {
    // const index = store.state.problem.problemList.findIndex((item) => item.problemId === row.problemId);
    // store.commit(`problem/${SET_PROBLEM_INDEX}`, index);
    this.$router.push({ path: '/problem/' + problemId});
  }
}
</script>

<style lang="less" scoped>
#user-profile {
  display: flex;
  flex-direction: column;

  .row {
    width: 100%;
    justify-content: space-around;
  }

  .info {
    width: 48%;
    display: flex;
  }
}
</style>

