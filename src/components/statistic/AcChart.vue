<template>
  <el-container id="ac-chart">
    <el-card style="width: 100%;">
      <div class="title">近60天AC题数</div>
      <div id="chart-1" @click="handleClick"></div>
    </el-card>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  name: 'ac-chart'
})
export default class AcChart extends Vue {
  @Prop(Array) chartData: any;

  get chart1() {
    const chart = new this.$G2.Chart({
      container: 'chart-1',
      forceFit: true,
      height: 250,
      padding: 40
    });

    chart.source(this.chartData);

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

  // 暴露点击事件接口
  handleClick() {
    this.$emit('jump');
  }

  mounted() {
    this.chart1.render();
  }
}
</script>

<style lang="less" scoped>
#ac-chart {
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
