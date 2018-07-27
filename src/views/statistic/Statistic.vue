<template>
  <div id="statistic">
    <el-container>
      <div class="row">
        <div class="info">
          <el-tooltip effect="dark" content="点击查看最近做的题目" placement="top">
            <ac-chart :chartData="AcChartData" v-on:jump="jumpToRecentTests"></ac-chart>
          </el-tooltip>
        </div>
        <div class="info">
          <data-statistic :statisticInfo="statisticInfo"></data-statistic>
        </div>
      </div>
    </el-container>
    <el-container style="margin-top: 2rem;">
      <div class="row">
        <div class="info">
          <pyramid-chart :chartData="pyramidChartData" v-on:jump="jumpToRanks"></pyramid-chart>
        </div>
        <div class="info">
          <rank-table :curRank="curRank" :personalRankData="personalRankData"></rank-table>
        </div>
      </div>
    </el-container>
    <!-- <router-view></router-view> -->
  </div>
</template>


<script lang="ts">
import AcChart from '@/components/statistic/AcChart.vue';
import DataStatistic from '@/components/statistic/DataStatistic.vue';
import PyramidChart from '@/components/statistic/PyramidChart.vue';
import RankTable from '@/components/statistic/RankTable.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'statistic',
  components: {
    AcChart,
    DataStatistic,
    RankTable,
    PyramidChart
  }
})
export default class Statistic extends Vue {

  curRank: number = 3;

  // 个人做题信息统计: AC数/AC率/最高排名/做题总数
  get statisticInfo() {
    return {
      acNum: 12,
      acRate: 80,
      topRank: 6,
      totalProblems: 120
    };
  }

  // 获取个人排名数据，以及前后五个人的信息
  get personalRankData() {
    return [{
      rank: 1,
      username: 'username1',
      acNumber: 50
    }, {
      rank: 2,
      username: 'username2',
      acNumber: 45
    }, {
      rank: 3,
      username: 'username3',
      acNumber: 40
    }, {
      rank: 4,
      username: 'username4',
      acNumber: 38
    }, {
      rank: 5,
      username: 'username5',
      acNumber: 30
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

  get pyramidChartData() {
    return [{
      action: '浏览网站',
      pv: 50000
    }, {
      action: '放入购物车',
      pv: 35000
    }, {
      action: '生成订单',
      pv: 25000
    }, {
      action: '支付订单',
      pv: 15000
    }, {
      action: '完成交易',
      pv: 8000
    }];
  }

  jumpToRanks() {
    this.$router.push({ name: 'ranks'});
  }

  jumpToRecentTests() {
    this.$router.push({ name: 'recent'});
  }
}
</script>

<style lang="less" scoped>
#statistic {
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .info {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>

