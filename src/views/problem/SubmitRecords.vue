<template>
  <el-container id="submit-records">
    <div style="width: 100%">
      <el-table :data="tableData" stripe>
        <el-table-column prop="submissionTime" label="提交时间" min-width="180"></el-table-column>
        <el-table-column label="通过状态" width="100">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.state === 1" size="medium" type="success">编译通过</el-tag>
            <el-tag v-else-if="scope.row.state === 2" size="medium" type="warning">编译错误</el-tag>
            <el-tag v-else size="medium" type="danger">运行错误</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="recordData.length"
        :page-size="pageSize"
        @current-change="handleCurrentPageChange"
        class="paging">
      </el-pagination>
    </div>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface IRecord {
  submissionTime: string;
  state: number;
}

@Component({
  name: 'submit-records'
})
export default class SubmitRecords extends Vue {
  recordData: IRecord[] = [];
  tableData: IRecord[] = [];
  pageSize: number = 10;

  handleCurrentPageChange(val: number) {
    this.tableData = this.pagination(val, this.pageSize, this.recordData);
  }

  pagination(pageNo: number, pageSize: number, array: IRecord[]) {
    const offset: number = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length) ?
      array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
  }

  mounted() {
    // 获取提交记录数据
    this.recordData = [{
      submissionTime: '2018-07-18-18：59',
      state: 1
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 1
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 2
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 2
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 3
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 3
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 2
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 2
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 3
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 3
    }];

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
