<template>
  <el-container id="rank-table">
    <el-card style="width: 100%;">
      <div class="title">排名</div>
      <el-table :data="personalRankData" class="table" stripe
        ref="personalRankTable" highlight-current-row>
        <el-table-column prop="rank" label="排名" width="50"></el-table-column>
        <el-table-column prop="username" label="用户名" min-width="100"></el-table-column>
        <el-table-column prop="acNumber" label="AC数" width="50"></el-table-column>
      </el-table>
    </el-card>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface RankItem {
  rank: number;
  username: string;
  acNumber: number;
}

@Component({
  name: 'rank-table'
})
export default class RankTable extends Vue {
  @Prop(Array) personalRankData: any; // RankItem[]
  @Prop(Number) curRank!: number;

  mounted() {
    // 高亮当前所在行
    (this.$refs.personalRankTable as any).setCurrentRow(this.personalRankData[this.curRank - 1]);
  }
}
</script>

<style lang="less" scoped>
#rank-table {
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .table {
    width: 100%;
    margin-top: 2rem;
  }
}
</style>
