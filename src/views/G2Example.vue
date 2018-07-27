<template>
  <el-container id="g2-example">
    <el-main>
      <h1>G2 示例</h1>
      <h2>chart 1</h2>
      <div id="chart-1"></div>
      <h2>chart 2</h2>
      <div id="chart-2"></div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'g2-example'
})
export default class G2Example extends Vue {
  get chart1() {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 1150 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ];

    const chart = new this.$G2.Chart({
      container: 'chart-1',
      width: 500,
      height: 500
    });

    chart.source(data);
    chart
      .interval()
      .position('genre*sold')
      .color('genre');
    return chart;
  }

  get chart2() {
    const data = [{
      month: 'Jan',
      Tokyo: 7.0,
      London: 3.9
    }, {
      month: 'Feb',
      Tokyo: 6.9,
      London: 4.2
    }, {
      month: 'Mar',
      Tokyo: 9.5,
      London: 5.7
    }, {
      month: 'Apr',
      Tokyo: 14.5,
      London: 8.5
    }, {
      month: 'May',
      Tokyo: 18.4,
      London: 11.9
    }, {
      month: 'Jun',
      Tokyo: 21.5,
      London: 15.2
    }, {
      month: 'Jul',
      Tokyo: 25.2,
      London: 17.0
    }, {
      month: 'Aug',
      Tokyo: 26.5,
      London: 16.6
    }, {
      month: 'Sep',
      Tokyo: 23.3,
      London: 14.2
    }, {
      month: 'Oct',
      Tokyo: 18.3,
      London: 10.3
    }, {
      month: 'Nov',
      Tokyo: 13.9,
      London: 6.6
    }, {
      month: 'Dec',
      Tokyo: 9.6,
      London: 4.8
    }];

    const ds = new this.$DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['Tokyo', 'London'], // 展开字段集
      key: 'city', // key字段
      value: 'temperature' // value字段
    });
    const chart = new this.$G2.Chart({
      container: 'chart-2',
      forceFit: true,
      height: window.innerHeight
    });
    chart.source(dv, {
      month: {
        range: [0, 1]
      }
    });
    chart.tooltip({
      crosshairs: {
        type: 'y'
      }
    });
    chart.axis('temperature', {
      label: {
        formatter: function formatter(val) {
          return val + '°C';
        }
      }
    });
    chart.line().position('month*temperature').color('city');
    chart.point().position('month*temperature').color('city').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
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
#g2-example {
}
</style>

