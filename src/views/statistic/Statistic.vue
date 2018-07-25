<template>
  <el-container id="statistic">
    <div class="ac-chart">
      <el-card>
        <div class="title">近8周AC数</div>
        <div id="chart-1"></div>
      </el-card>
    </div>
    <div class="detail-info">
      <div class="up">
        <h1>ss</h1>
      </div>
      <div class="down">
        <h1>cc</h1>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </el-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'statistic'
})
export default class Statistic extends Vue {

  get chart1() {
    const data = [{
      year: '1991',
      value: 15468
    }, {
      year: '1992',
      value: 16100
    }, {
      year: '1993',
      value: 15900
    }, {
      year: '1994',
      value: 17409
    }, {
      year: '1995',
      value: 17000
    }, {
      year: '1996',
      value: 31056
    }, {
      year: '1997',
      value: 31982
    }, {
      year: '1998',
      value: 32040
    }, {
      year: '1999',
      value: 33233
    }];

    const chart = new this.$G2.Chart({
      container: 'chart-1',
      height: 300,
      width: 400
    });

    chart.source(data);
    chart.scale({
      value: {
        min: 10000
      },
      year: {
        range: [0, 1]
      }
    });
    chart.axis('value', {
      label: {
        formatter: function formatter(val: any) {
          return (val / 10000).toFixed(1) + 'k';
        }
      }
    });
    chart.tooltip(true);
    chart.line().position('year*value').size(2);
    // chart.area().position('year*value').color('#f80');
    return chart;
  }

  mounted() {
    this.chart1.render();
  }
}
</script>

<style lang="less" scoped>
#statistic {
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .ac-chart {
    width: 50%;
  }

  .detail-info {
    width: 40%;
    margin-left: 24px;
    display: flex;
    flex-direction: column;
  }
}
</style>

