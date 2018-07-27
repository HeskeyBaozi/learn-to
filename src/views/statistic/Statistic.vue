<template>
  <div id="statistic">
    <el-container>
      <div class="row">
        <div class="info">
          <el-card>
            <div class="title">近8周AC数</div>
            <el-tooltip effect="dark" content="点击查看最近做的题目" placement="top">
              <div id="chart-1" @click="jumpToRecentTests"></div>
            </el-tooltip>
          </el-card>
        </div>
        <div class="info">
          <div class="detail">
            <el-card class="item">
              <div class="title">AC数</div>
              <div class="count">12</div>
            </el-card>
            <el-card class="item">
              <div class="title">AC率</div>
              <el-progress type="circle" :percentage="25" :width="80" style="display: flex; justify-content: center; "></el-progress>
            </el-card>
          </div>
          <div class="detail">
            <el-card class="item">
              <div class="title">最高排名</div>
              <div class="count">12</div>
            </el-card>
            <el-card class="item">
              <div class="title">做题总数</div>
              <div class="count">12</div>
            </el-card>
          </div>
        </div>
      </div>
    </el-container>
    <el-container style="margin-top: 2rem;">
      <div class="row">
        <div class="info">
          <el-card>
            <div class="title">金字塔图</div>
            <el-tooltip effect="dark" content="点击查看完整排行榜" placement="top">
              <div id="chart-2" @click="jumpToRanks"></div>
            </el-tooltip>
          </el-card>
        </div>
        <div class="info">
          <el-card >
            <div class="title">排名</div>
            <el-table :data="personalRankData" style="width: 100%; margin-top: 2rem;" stripe
              ref="rankTable" highlight-current-row>
              <el-table-column prop="rank" label="排名" width="50"></el-table-column>
              <el-table-column prop="username" label="用户名" min-width="100"></el-table-column>
              <el-table-column prop="acNumber" label="AC数" width="50"></el-table-column>
            </el-table>
          </el-card>
        </div>
      </div>
    </el-container>
    <!-- <router-view></router-view> -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'statistic'
})
export default class Statistic extends Vue {

  curRank: number = 3;

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

  get chart1() {
    const data = [{
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

    const chart = new this.$G2.Chart({
      container: 'chart-1',
      forceFit: true,
      height: 250,
      padding: 40
    });

    chart.source(data);

    chart.axis('AC', {
      label: {
        formatter: function formatter(val: any) {
          return (val / 10000).toFixed(1) + 'k';
        }
      }
    });

    chart.tooltip(true);
    chart.line().position('week*AC').size(2);
    chart.area().position('week*AC');
    return chart;
  }

  get chart2() {
    const data = [{
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

    const chart = new this.$G2.Chart({
      container: 'chart-2',
      forceFit: true,
      height: 300,
      padding: 70
    });

    chart.source(data);

    chart.axis(false);
    chart.coord('rect').transpose().scale(1, 1);
    chart.tooltip(true);
    chart.intervalSymmetric().position('action*pv').shape('pyramid')
      .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
      .label('action*pv', (action: any, pv: any) => {
      return action + ' ' + pv;
    });
    return chart;
  }

  mounted() {
    this.chart1.render();
    this.chart2.render();
    // 高亮当前所在行
    (this.$refs.rankTable as any).setCurrentRow(this.personalRankData[this.curRank - 1]);
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

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .count {
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    color: @color-primary;
  }

  .ac-chart, .pyramid-chart {
    width: 50%;
  }

  .info {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .el-card {
      height: 100%;
    }

    .detail {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .item {
        width: 48%;
        height: 145px;
      }
    }
  }
}
</style>

