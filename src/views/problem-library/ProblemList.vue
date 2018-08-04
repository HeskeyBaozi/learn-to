<template>
  <el-container id="problem-list">
    <el-header>
      <el-row>
        <div class="col-item" style="">
          <div>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchKey" clearable></el-input>
            <el-button type="primary" @click="searchProblem">搜索</el-button>
          </div>
          <div>
            <el-select v-model="sortKey" placeholder="请选择排序方式" @change="sortTable">
              <el-option label="题号" value="problemId"></el-option>
              <el-option label="热度" value="submitNum"></el-option>
            </el-select>
            <el-select v-model="filterKey" placeholder="请选择评测状态" clearable  @change="filterTable" style="margin-left: 1rem;">
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
      <el-table :data="tableData" stripe style="width: 100%; margin-bottom: 60px;" @row-click="handleProblemClick"
        highlight-current-row ref="problemTable">
        <el-table-column prop="problemId" label="题号" min-width="100"></el-table-column>
        <el-table-column prop="problemName" label="题目名称" min-width="100"></el-table-column>
        <el-table-column prop="submissionNumber" label="提交数" min-width="100"></el-table-column>
        <el-table-column prop="passRate" label="通过率" min-width="100"></el-table-column>
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
        :current-page.sync="currentPage"
        style="text-align: center; height: 100%; display: flex;align-items:center; justify-content:center;">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import store from '@/stores';
import { GET_PROBLEM_LIST, SET_PROBLEM_INDEX } from '@/stores/modules/problem/contants';
import { IProblemListItem } from '@/typings/problem.ts';
import { httpRequest } from '@/utils/httpRequest.ts';
import { Message } from 'element-ui';
import { setTimeout } from 'timers';
import { Component, Vue } from 'vue-property-decorator';


@Component({
  name: 'problem-list',
  components: {
  }
})
export default class ProblemList extends Vue {
  searchKey: string = '';
  sortKey: string = '';
  pageSize: number = 100;
  currentPage: number = 1;
  problemFilterData: IProblemListItem[] = [];
  tableData: IProblemListItem[] = [];
  filterKey: string = '';

  get problemListData(): IProblemListItem[] {
    return store.state.problem.problemList;
  }

  handleCurrentPageChange(val: number) {
    this.tableData = this.pagination(val, this.pageSize, this.problemFilterData);
  }

  handleSizeChange(val: number) {
    this.pageSize = val;
    this.currentPage = 1;
    this.handleCurrentPageChange(1);
  }

  pagination(pageNo: number, pageSize: number, array: IProblemListItem[]) {
    const offset: number = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length) ?
      array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
  }

  async mounted() {
    // 获取题库题目列表
    await store.dispatch(`problem/${GET_PROBLEM_LIST}`);
    this.problemFilterData = this.problemListData;
    this.tableData = this.pagination(1, this.pageSize, this.problemFilterData);
  }

  handleProblemClick(row: IProblemListItem) {
    const index = store.state.problem.problemList.findIndex((item) => item.problemId === row.problemId);
    store.commit(`problem/${SET_PROBLEM_INDEX}`, index);
    this.$router.push({ path: `/problem/${row.problemId}`});
  }

  searchProblem() {
    if (!!this.searchKey) {
      for (let i = 0; i < this.problemFilterData.length; i++) {
        // 这里的problemId为int 进行了转换
        if (this.problemFilterData[i].problemName.indexOf(this.searchKey) !== -1
          || this.problemFilterData[i].problemId.toString() === this.searchKey) {
          // 获取题目所在页数
          this.currentPage = Math.floor(i / this.pageSize + 1);
          this.handleCurrentPageChange(this.currentPage);
          // 高亮当前行
          (this.$refs.problemTable as any).setCurrentRow(this.problemFilterData[i]);

          // 确保页面tableData渲染完才进行滚动
          setTimeout(() => {
            // TODO: 滚动到当前行
            const targetTop = (this.$refs.problemTable as any).$el
              .querySelectorAll('.el-table__body tr')[i % this.pageSize].getBoundingClientRect().top;
            const containerTop = (this.$refs.problemTable as any).$el.querySelector('.el-table__body')
              .getBoundingClientRect().top;
            const scrollParent = (this.$refs.problemTable as any).$el.querySelector('.el-table__body-wrapper');
            // 不知道为什么不会滚动
            // 60为顶部topnav的高度
            window.scrollBy(0, targetTop - containerTop - 60);
            // (this.$refs.problemTable as any).$el
            //   .querySelectorAll('.el-table__body tr')[i % this.pageSize].scrollIntoView(true);
          }, 0);
          return;
        }
      }
      Message({
        message: '找不到相关题目~',
        type: 'warning'
      });
    } else {
      Message({
        message: '请输入查找信息:)'
      });
    }
  }

  sortTable(method: string) {
    if (method === 'problemId') {
      this.problemFilterData.sort((problem1, problem2) => problem1.problemId - problem2.problemId);
    } else {
      this.problemFilterData.sort((problem1, problem2) => problem2.submissionNumber - problem1.submissionNumber);
    }
    this.currentPage = 1;
    this.handleCurrentPageChange(1);
  }

  filterTable(key: string) {
    this.problemFilterData = this.problemListData.filter((item) => {
      if (!!this.filterKey) {
        return item.meterState === this.filterKey;
      } else {
        return item;
      }
    });
    this.currentPage = 1;
    this.handleCurrentPageChange(1);
  }
}
</script>

<style lang="less" scoped>
  #problem-list {
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
#problem-list {
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
}
</style>
