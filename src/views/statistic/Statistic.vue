<template>
  <div id="statistic">
    <el-container>
      <div class="row">
        <div class="ac-chart">
          <el-card>
            <div class="title">近8周AC数</div>
            <div id="chart-1"></div>
          </el-card>
        </div>
        <div class="info">
          <div class="detail">
            <el-card class="item">
              <div class="title">AC数</div>
            </el-card>
            <el-card class="item">
              <div class="title">AC率</div>
            </el-card>
          </div>
          <div class="detail">
            <el-card class="item">
              <div class="title">最高排名</div>
            </el-card>
            <el-card class="item">
              <div class="title">做题总数</div>
            </el-card>
          </div>
        </div>
      </div>
    </el-container>
    <el-container style="margin-top: 2rem;">
      <div class="row">
        <div class="pyramid-chart">
          <el-card>
            <div class="title">金字塔图</div>
            <div id="chart-2"></div>
          </el-card>
        </div>
        <div class="info">
          <el-card>
            <div class="title">排名</div>
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

  get chart1() {
    const data = [{
      week: '1991',
      AC: 15468
    }, {
      week: '1992',
      AC: 16100
    }, {
      week: '1993',
      AC: 15900
    }, {
      week: '1994',
      AC: 17409
    }, {
      week: '1995',
      AC: 17000
    }, {
      week: '1996',
      AC: 31056
    }, {
      week: '1997',
      AC: 31982
    }, {
      week: '1998',
      AC: 32040
    }, {
      week: '1999',
      AC: 33233
    }];

    const chart = new this.$G2.Chart({
      container: 'chart-1',
      forceFit: true,
      height: 250
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
      height: 300
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
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .ac-chart, .pyramid-chart {
    width: 50%;
  }

  .info {
    width: 50%;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

