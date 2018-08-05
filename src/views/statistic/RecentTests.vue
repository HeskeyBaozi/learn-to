<template>
  <el-container id="recent-tests">
    <el-header>
      <el-row>
        <div class="col-item">
          <div>
              <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchKey" clearable @change="handleInputChange"></el-input>
              <el-button type="primary" @click="searchProblem">搜索</el-button>
          </div>
          <div>
            <el-select v-model="sortKey" placeholder="按题号排序" clearable @change="sortTable">
              <el-option label="按发布时间排序" value="publish"></el-option>
              <el-option label="按热度排序" value="submitNum"></el-option>
            </el-select>
            <el-select v-model="filterKey" placeholder="All" clearable  @change="filterTable"  style="margin-left: 1rem;">
              <el-option label="Accepted" value="Accepted"></el-option>
              <el-option label="Compile Error" value="Compile Error"></el-option>
              <el-option label="Wrong Answer" value="Wrong Answer"></el-option>
              <el-option label="Time Limit Exceeded" value="Time Limit Exceeded"></el-option>
              <el-option label="Memory Limit Exceeded" value="Memory Limit Exceeded"></el-option>
              <el-option label="Runtime Error" value="Runtime Error"></el-option>
            </el-select>
          </div>
        </div>
      </el-row>
    </el-header>
    <el-main>
      <el-table :data="tableData" stripe style="margin-bottom: 60px;" @row-click="handleProblemClick"
        highlight-current-row ref="recordTable">
        <el-table-column prop="problemId" label="题号" min-width="100"></el-table-column>
        <el-table-column prop="problemName" label="题目名称" min-width="100"></el-table-column>
        <el-table-column prop="submit" label="提交次数" min-width="100"></el-table-column>
        <el-table-column prop="lastSubmit" label="上次提交时间" min-width="100"></el-table-column>
        <el-table-column prop="publishDate" label="发布时间" min-width="100"></el-table-column>
        <el-table-column label="评测状态" width="180">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.meterState === 'Accepted'" size="medium" type="success">{{ scope.row.meterState }}</el-tag>
            <el-tag v-else-if="scope.row.meterState === 'Compile Error'" size="medium" type="warning">{{ scope.row.meterState }}</el-tag>
            <el-tag v-else size="medium" type="danger">{{ scope.row.meterState }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer class="fixed-footer">
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :total="problemFilterData.length"
        :page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        @current-change="handleCurrentPageChange"
        @size-change="handleSizeChange"
        :current-page.sync="currentPage">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import store from '@/stores';
import { IRecentProblem } from '@/typings/statistic.ts';
import { httpRequest } from '@/utils/httpRequest';
import { Message } from 'element-ui';
import { setTimeout } from 'timers';
import { Component, Vue } from 'vue-property-decorator';


@Component({
  name: 'recent-tests'
})
export default class RecentTests extends Vue {
  searchKey: string = '';
  sortKey: string = '';
  pageSize: number = 100;
  currentPage: number = 1;
  problemListData: IRecentProblem[] = [];
  problemFilterData: IRecentProblem[] = [];
  tableData: IRecentProblem[] = [];
  filterKey: string = '';

  handleCurrentPageChange(val: number) {
    this.tableData = this.pagination(val, this.pageSize, this.problemFilterData);
  }

  handleSizeChange(val: number) {
    this.pageSize = val;
    this.resetPage();
  }

  pagination(pageNo: number, pageSize: number, array: IRecentProblem[]) {
    const offset: number = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length) ?
      array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
  }

  handleProblemClick(row: IRecentProblem) {
    // const index = store.state.problem.problemList.findIndex((item) => item.problemId === row.problemId);
    // store.commit(`problem/${SET_PROBLEM_INDEX}`, index);
    this.$router.push({ path: `/problem/${row.problemId}`});
  }

  handleInputChange(value: string | number) {
    if (value === '') {
      [ ...this.problemFilterData ] = this.problemListData;
      this.sortKey = '';
      this.filterKey = '';
      this.resetPage();
    }
  }

  searchProblem() {
    if (!!this.searchKey) {
      for (let i = 0; i < this.problemFilterData.length; i++) {
        if (this.problemFilterData[i].problemName.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1
          || this.problemFilterData[i].problemId.toString() === this.searchKey) {
          // noop
        } else {
          // 删除不满足搜索条件的项
          this.problemFilterData.splice(i, 1);
          --i;
        }
      }
      this.resetPage();
      if (this.problemFilterData.length === 0) {
        Message({
          message: '找不到相关题目~',
          type: 'warning'
        });
      }
    } else {
      Message({
        message: '请输入查找信息:)'
      });
    }
  }

  sortTable(method: string) {
    if (method === 'publish') {
      this.problemFilterData.sort((problem1, problem2) => {
        if (problem1.publishDate < problem2.publishDate) {
          return 1;
        } else if (problem1.publishDate > problem2.publishDate) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (method === 'submitNum') {
      this.problemFilterData.sort((problem1, problem2) => problem2.submit - problem1.submit);
    } else {
      this.problemFilterData.sort((problem1, problem2) => problem1.problemId - problem2.problemId);
    }
    this.resetPage();
  }

  filterTable(key: string) {
    this.searchKey = '';
    this.problemFilterData = this.problemListData.filter((item) => {
      if (!!this.filterKey) {
        return item.meterState === this.filterKey;
      } else {
        return item;
      }
    });
    this.sortTable(this.sortKey);
    this.resetPage();
  }

  async mounted() {
    // 获取最近题目列表
    const result =  await httpRequest.get('statistic/recent');
    this.problemListData = result.data;
    [ ...this.problemFilterData ] = this.problemListData;
    this.tableData = this.pagination(1, this.pageSize, this.problemFilterData);
  }

  resetPage() {
    this.currentPage = 1;
    this.handleCurrentPageChange(1);
  }
}
</script>

<style lang="less" scoped>
#recent-tests {
  .col-item {
      height: 49px;
      line-height: 49px;
      display: flex;
      justify-content: space-between;

      label {
        vertical-align: middle;
        display: inline-block;
      }
    }

    .fixed-footer {
      position: fixed;
      bottom: 0;
      right: 0;
      height: 64px;
      width: calc(100% - 64px);
      background: #fff;
    }
}
</style>

<style lang="less">
#recent-tests {
  .el-header {
    .el-input  {
      width: 180px;
    }

    .el-button  {
      margin-left: 1rem;
    }
  }

  .el-table__row:hover {
    cursor: pointer;
  }

  .el-pagination {
    text-align: center;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
  }
}
</style>
