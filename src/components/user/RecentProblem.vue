<template>
  <el-container id="recent-problem">
    <el-card style="width: 100%;">
      <div class="title">近期题目</div>
      <el-table :data="personalProblemData" class="table" stripe
        ref="personalProblemTable" highlight-current-row @row-click="handleProblemClick">
        <el-table-column prop="problemId" label="题号" min-width="50"></el-table-column>
        <el-table-column prop="name" label="题目名称" width="120"></el-table-column>
      </el-table>
    </el-card>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface IRecentProblemItem {
  problemId: number;
  name: string;
}

@Component({
  name: 'recent-problem'
})
export default class RecentProblem extends Vue {
  @Prop(Array) personalProblemData: any; // IRecentProblemItem[]

  handleProblemClick(row: IRecentProblemItem) {
    this.$emit('jump', row.problemId);
  }
}
</script>

<style lang="less" scoped>
#recent-problem {
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .table {
    width: 100%;
    margin-top: 2rem;
    min-height: 240px;
  }
}
</style>

<style lang="less">
#recent-problem {
  .el-table__row:hover {
    cursor: pointer;
  }
}
</style>
