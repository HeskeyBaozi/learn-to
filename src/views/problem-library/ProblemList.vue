<template>
  <el-container id="problem-list">
    <h1>这个是问题列表页面</h1>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'problem-list'
})
export default class ProblemList extends Vue {}
</script>

<style lang="scss" scoped>
#problem-list {
}
</style>

