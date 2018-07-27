<template>
  <el-container id="pyramid-chart">
    <el-card style="width: 100%;">
      <div class="title">金字塔图</div>
      <el-tooltip effect="dark" content="点击查看完整排行榜" placement="top">
        <div id="chart-2" @click="handleClick"></div>
      </el-tooltip>
    </el-card>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  name: 'pyramid-chart'
})
export default class PyramidChart extends Vue {
  @Prop(Array) chartData: any;

  get chart2() {
    const chart = new this.$G2.Chart({
      container: 'chart-2',
      forceFit: true,
      height: 300,
      padding: 70
    });

    chart.source(this.chartData);

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

  // 暴露点击事件接口
  handleClick() {
    this.$emit('jump');
  }

  mounted() {
    this.chart2.render();
  }
}
</script>

<style lang="less" scoped>
#pyramid-chart {
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
