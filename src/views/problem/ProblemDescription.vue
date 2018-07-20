<template>
  <el-container id="problem-description">
    <h1>题目描述</h1>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'problem-description'
})
export default class ProblemDescription extends Vue {}
</script>

<style lang="scss" scoped>
#problem-description {
}
</style>
