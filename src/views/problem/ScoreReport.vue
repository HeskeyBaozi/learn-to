<template>
  <el-container id="score-report">
    <h1>成绩报告</h1>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'score-report'
})
export default class ScoreReport extends Vue {}
</script>

<style lang="scss" scoped>
#score-report {
}
</style>
