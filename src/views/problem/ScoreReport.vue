<template>
  <el-container id="score-report">
    <div class="sub-containter">
      <h1>成绩报告</h1>
    </div>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'score-report'
})
export default class ScoreReport extends Vue {}
</script>

<style lang="less" scoped>
#score-report {
}
</style>
