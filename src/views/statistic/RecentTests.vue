<template>
  <el-container id="recent-tests">
    <h1>最近做过的题目</h1>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'recent-tests'
})
export default class RecentTests extends Vue {}
</script>

<style lang="less" scoped>
#recent-tests {
}
</style>

