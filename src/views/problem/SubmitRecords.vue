<template>
  <el-container id="submit-records">
    <div class="sub-containter">
      <el-table :data="tableData" stripe>
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
import { Component, Vue } from 'vue-property-decorator';

interface IRecord {
  submissionTime: string;
  state: string;
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

  handleSizeChange(val: number) {
    this.pageSize = val;
    this.handleCurrentPageChange(1);
  }

  mounted() {
    // 获取提交记录数据
    this.recordData = [{
      submissionTime: '2018-07-18-18：59',
      state: 'Accepted'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Accepted'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Wrong Answer'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Time Limit Exceeded'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Memory Limit Exceeded'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Runtime Error'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Runtime Error'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Compile Error'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Compile Error'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Compile Error'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Accepted'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Wrong Answer'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Time Limit Exceeded'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Memory Limit Exceeded'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Runtime Error'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Runtime Error'
    }];

    this.handleCurrentPageChange(1);
  }
}
</script>

<style lang="scss" scoped>
#submit-records {
  .paging {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
