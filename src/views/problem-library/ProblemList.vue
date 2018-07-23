<template>
  <el-container id="problem-list">
    <el-header>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="4"><el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchKey" clearable class="col-item"></el-input></el-col>
        <el-col :span="6">
          <el-radio-group v-model="sortKey" class="col-item">
            <el-radio label="1">按题号排序</el-radio>
            <el-radio label="2">按热度排序</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-table :data="tableData" stripe style="width: 100%; margin-bottom: 60px;" @row-click="handleProblemClick">
        <el-table-column prop="problemId" label="题号" min-width="100"></el-table-column>
        <el-table-column prop="problemName" label="题目名称" min-width="100"></el-table-column>
        <el-table-column prop="submissionNumber" label="提交数" min-width="100"></el-table-column>
        <el-table-column prop="passRate" label="通过率" min-width="100"></el-table-column>
        <el-table-column prop="publishDate" label="发布时间" min-width="100"></el-table-column>
        <el-table-column label="AC状态" width="100">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.ACState === 1" size="medium" type="success">编译通过</el-tag>
            <el-tag v-else-if="scope.row.ACState === 2" size="medium" type="warning">编译错误</el-tag>
            <el-tag v-else size="medium" type="danger">运行错误</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer class="fixed-footer">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="problemListData.length"
        :page-size="pageSize"
        @current-change="handleCurrentPageChange"
        :current-page.sync="currentPage"
        style="text-align: center; height: 100%; display: flex;align-items:center; justify-content:center;">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface ProblemItem {
  problemId: number;
  problemName: string;
  submissionNumber: number;
  passRate: string;
  publishDate: string;
  ACState: number;
}

@Component({
  name: 'problem-list',
  components: {
  }
})
export default class ProblemList extends Vue {
  searchKey: string = '';
  sortKey: string = '';
  pageSize: number = 50;
  currentPage: number = 1;
  problemListData: ProblemItem[] = [];
  tableData: ProblemItem[] = [];

  handleCurrentPageChange(val: number) {
    this.tableData = this.pagination(val, this.pageSize, this.problemListData);
  }

  pagination(pageNo: number, pageSize: number, array: ProblemItem[]) {
    const offset: number = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length) ?
      array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
  }

  mounted() {
    this.problemListData = [
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      },
      {
        problemId: 201,
        problemName: 'HelloWorld',
        submissionNumber: 200,
        passRate: '50%',
        publishDate: '2018-7-7',
        ACState: 1
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submissionNumber: 220,
        passRate: '90%',
        publishDate: '2018-7-7',
        ACState: 2
      },
      {
        problemId: 203,
        problemName: '简单乘法',
        submissionNumber: 200,
        passRate: '56%',
        publishDate: '2018-7-7',
        ACState: 3
      }
    ];
    this.tableData = this.pagination(1, this.pageSize, this.problemListData);
  }

  handleProblemClick(row: ProblemItem) {
    this.$router.push({ path: `/problem/${row.problemId}`});
  }
}
</script>

<style lang="scss" scoped>
  #problem-list {
  }

  .col-item {
    height: 49px;
    line-height: 49px;
  }

  .fixed-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 64px;
    width: 100%;
    background: #fff;
  }
</style>

