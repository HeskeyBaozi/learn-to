<template>
  <el-container id="submit-records">
    <div class="sub-containter">
      <el-table :data="tableData" stripe @row-click="handleClick">
        <el-table-column prop="submissionTime" label="提交时间" min-width="180"></el-table-column>
        <el-table-column label="评测状态" width="180">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.state === 'Accepted'" size="medium" type="success">{{scope.row.state}}</el-tag>
            <el-tag v-else-if="scope.row.state === 'Compile Error'" size="medium" type="warning">{{scope.row.state}}</el-tag>
            <el-tag v-else size="medium" type="danger">{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :total="recordData.length"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        @current-change="handleCurrentPageChange"
        @size-change="handleSizeChange"
        class="paging">
      </el-pagination>
    </div>
  </el-container>
</template>

<script lang="ts">
import store from '@/stores';
import { GET_SUBMIT_RECORD, SET_ACTIVE_TAB, SET_RECORD } from '@/stores/modules/problem/contants';
import { ISubmitRecord } from '@/typings/problem.ts';
import { httpRequest } from '@/utils/httpRequest.ts';
import { MessageBox } from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';


@Component({
  name: 'submit-records'
})
export default class SubmitRecords extends Vue {
  tableData: ISubmitRecord[] = [];
  pageSize: number = 10;

  get recordData(): ISubmitRecord[] {
    return store.state.problem.problemSubmitRecord;
  }

  handleCurrentPageChange(val: number) {
    this.tableData = this.pagination(val, this.pageSize, this.recordData);
  }

  pagination(pageNo: number, pageSize: number, array: ISubmitRecord[]) {
    const offset: number = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length) ?
      array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
  }

  handleSizeChange(val: number) {
    this.pageSize = val;
    this.handleCurrentPageChange(1);
  }

  handleClick(row: ISubmitRecord) {
    MessageBox.confirm('是否前往查看该次提交？当前代码不予保存', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      store.commit(`problem/${SET_RECORD}`, row.code);
      store.commit(`problem/${SET_ACTIVE_TAB}`, 'solution');
      this.$router.push({ name: 'solution'});
    }).catch(() => {
      // noop
    });
  }

  async mounted() {
    // 获取提交记录数据
    await store.dispatch(`problem/${GET_SUBMIT_RECORD}`);
    this.handleCurrentPageChange(1);
  }
}
</script>

<style lang="less" scoped>
#submit-records {
  .paging {
    margin-top: 20px;
    text-align: center;
  }
}
</style>

<style lang="less">
#submit-records {
  .el-table__row:hover {
    cursor: pointer;
  }
}
</style>
