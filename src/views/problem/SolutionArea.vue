<template>
  <el-container id="solution-area">
    <h1>答题区域</h1>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'solution-area'
})
export default class SolutionArea extends Vue {}
</script>

<style lang="scss" scoped>
#solution-area {
}
</style>
