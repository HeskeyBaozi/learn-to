<template>
  <el-container id="recent-tests">
    <h1>最近做的题目</h1>
    <el-header>
      <el-row>
        <div class="col-item" style="display: inline-block;">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchKey" clearable></el-input>
          <el-select v-model="sortKey" placeholder="请选择排序方式" @change="sortTable">
            <el-option label="题号" value="problemId"></el-option>
            <el-option label="热度" value="submitNum"></el-option>
          </el-select>
          <el-select v-model="filterKey" placeholder="请选择评测状态" clearable  @change="filterTable">
            <el-option label="Accepted" value="Accepted"></el-option>
            <el-option label="Compile Error" value="Compile Error"></el-option>
            <el-option label="Wrong Answer" value="Wrong Answer"></el-option>
            <el-option label="Time Limit Exceeded" value="Time Limit Exceeded"></el-option>
            <el-option label="Memory Limit Exceeded" value="Memory Limit Exceeded"></el-option>
            <el-option label="Runtime Error" value="Runtime Error"></el-option>
          </el-select>
          <el-button type="primary" @click="searchProblem">搜索</el-button>
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
import { Message } from 'element-ui';
import { setTimeout } from 'timers';
import { Component, Vue } from 'vue-property-decorator';

interface IRecord {
  problemId: number;
  problemName: string;
  submit: number;
  lastSubmit: string;
  publishDate: string;
  meterState: string;
}

@Component({
  name: 'recent-tests'
})
export default class RecentTests extends Vue {
  searchKey: string = '';
  sortKey: string = '';
  pageSize: number = 100;
  currentPage: number = 1;
  problemListData: IRecord[] = [];
  problemFilterData: IRecord[] = [];
  tableData: IRecord[] = [];
  filterKey: string = '';

  handleCurrentPageChange(val: number) {
    this.tableData = this.pagination(val, this.pageSize, this.problemFilterData);
  }

  handleSizeChange(val: number) {
    this.pageSize = val;
    this.currentPage = 1;
    this.handleCurrentPageChange(1);
  }

  pagination(pageNo: number, pageSize: number, array: IRecord[]) {
    const offset: number = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length) ?
      array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
  }

  handleProblemClick(row: IRecord) {
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
          (this.$refs.recordTable as any).setCurrentRow(this.problemFilterData[i]);
          // TODO: 滚动到当前行
          setTimeout(() => {
            const targetTop = (this.$refs.recordTable as any).$el
              .querySelectorAll('.el-table__body tr')[i % this.pageSize].getBoundingClientRect().top;
            const containerTop = (this.$refs.recordTable as any).$el.querySelector('.el-table__body')
              .getBoundingClientRect().top;
            const scrollParent = (this.$refs.recordTable as any).$el.querySelector('.el-table__body-wrapper');
            (this.$refs.recordTable as any).$el
              .querySelectorAll('.el-table__body tr')[i % this.pageSize].scrollIntoView(true);
          }, 0);
          return;
        }
      }
      Message({
        message: '>.< 找不到相关题目~',
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
      this.problemFilterData.sort((problem1, problem2) => problem2.submit - problem1.submit);
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

  mounted() {
    this.problemListData = [
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'zzzz',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'dddd',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      }
    ];

    this.problemFilterData = this.problemListData;
    this.tableData = this.pagination(1, this.pageSize, this.problemFilterData);
  }
}
</script>

<style lang="less" scoped>
#recent-tests {
  .col-item {
      height: 49px;
      line-height: 49px;

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
      width: calc(100% - 200px);
      background: #fff;
    }
}
</style>

<style lang="less">
#recent-tests {
  .el-header {
    .el-input  {
      width: 180px;
      margin-right: 1rem;
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
