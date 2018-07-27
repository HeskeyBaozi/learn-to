<template>
  <el-container id="data-statistic">
    <div class="detail">
      <el-card class="item">
        <div class="title">AC数</div>
        <div class="count">{{ statisticInfo.acNum }}</div>
      </el-card>
      <el-card class="item">
        <div class="title">AC率</div>
        <el-progress type="circle" :percentage="statisticInfo.acRate" :width="80" style="display: flex; justify-content: center; "></el-progress>
      </el-card>
    </div>
    <div class="detail">
      <el-card class="item">
        <div class="title">最高排名</div>
        <div class="count">{{ statisticInfo.topRank }}</div>
      </el-card>
      <el-card class="item">
        <div class="title">做题总数</div>
        <div class="count">{{ statisticInfo.totalProblems }}</div>
      </el-card>
    </div>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface IStatisticInfo {
  acNum: number;
  acRate: number;
  topRank: number;
  totalProblems: number;
}

@Component({
  name: 'data-statistic'
})
export default class DataStatistic extends Vue {
  @Prop(Object) statisticInfo!: IStatisticInfo;

}
</script>

<style lang="less" scoped>
#data-statistic {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  .el-card {
    height: 100%;
  }

  .detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      width: 48%;
      height: 150px;
    }
  }
}
</style>
