<template>
  <el-container id="ranks">
    <el-main>
      <el-header>
        <el-input placeholder="搜索排名/用户名" prefix-icon="el-icon-search" v-model="searchKey" clearable></el-input>
        <el-button type="primary" @click="searchUser">搜索</el-button>
      </el-header>
      <el-table :data="rankTable" stripe style="margin-bottom: 60px;"
        ref="rankTable" highlight-current-row @row-click="jumpToUser">
        <el-table-column prop="rank" label="名次" min-width="100"></el-table-column>
        <el-table-column prop="nickname" label="昵称" min-width="100"></el-table-column>
        <el-table-column prop="acNum" label="AC数" min-width="100"></el-table-column>
        <el-table-column prop="acRate" label="AC率" min-width="100"></el-table-column>
        <el-table-column prop="registerDate" label="注册时间" min-width="100"></el-table-column>
      </el-table>
    </el-main>
    <el-footer class="fixed-footer">
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :total="rankData.length"
        :page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        @size-change="handleSizeChange"
        :current-page.sync="currentPage"
        @current-change="handleCurrentPageChange">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Message } from 'element-ui';
import { setTimeout } from 'timers';
import { Component, Vue } from 'vue-property-decorator';

interface IRankItem {
  rank: number;
  userId: number;
  nickname: string;
  acNum: string;
  acRate: string;
  registerDate: string;
}


@Component({
  name: 'ranks'
})
export default class Ranks extends Vue {
  pageSize: number = 20;
  searchKey: string = '';
  currentPage: number = 1;
  rankData: IRankItem[] = [];
  rankTable: IRankItem[] = [];

  handleCurrentPageChange(val: number) {
    this.rankTable = this.pagination(val, this.pageSize, this.rankData);
  }

  handleSizeChange(val: number) {
    this.pageSize = val;
    this.currentPage = 1;
    this.handleCurrentPageChange(1);
  }

  pagination(pageNo: number, pageSize: number, array: IRankItem[]) {
    const offset: number = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length) ?
      array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
  }

  searchUser() {
    if (!!this.searchKey) {
      for (let i = 0; i < this.rankData.length; i++) {
        // 这里的rank为number 进行了转换
        if (this.rankData[i].nickname.indexOf(this.searchKey) !== -1
          || this.rankData[i].rank.toString() === this.searchKey) {
          // 获取题目所在页数
          this.currentPage = Math.floor(i / this.pageSize + 1);
          this.handleCurrentPageChange(this.currentPage);
          // 高亮当前行
          (this.$refs.rankTable as any).setCurrentRow(this.rankData[i]);
          // 滚动到当前行
          setTimeout(() => {
            const targetTop = (this.$refs.rankTable as any).$el
              .querySelectorAll('.el-table__body tr')[i % this.pageSize].getBoundingClientRect().top;
            const containerTop = (this.$refs.rankTable as any).$el.querySelector('.el-table__body')
              .getBoundingClientRect().top;
            const scrollParent = (this.$refs.rankTable as any).$el.querySelector('.el-table__body-wrapper');
            // window.scrollBy(0, targetTop - containerTop);
            (this.$refs.rankTable as any).$el
              .querySelectorAll('.el-table__body tr')[i % this.pageSize].scrollIntoView(true);
          }, 0);
          return;
        }
      }
      Message({
        message: '找不到相关信息~',
        type: 'warning'
      });
    } else {
      Message({
        message: '请输入查找信息:)'
      });
    }
  }

  jumpToUser(row: IRankItem) {
    this.$router.push({ path: '/user/' + row.userId});
  }

  mounted() {
    // 获取完整排行榜数据
    this.rankData = [{
      rank: 1,
      userId: 1,
      nickname: '假同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 2,
      userId: 2,
      nickname: '好同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 3,
      userId: 1,
      nickname: '坏同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 4,
      userId: 1,
      nickname: '假同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 5,
      userId: 1,
      nickname: '好同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 6,
      userId: 1,
      nickname: '坏同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 7,
      userId: 1,
      nickname: '假同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 8,
      userId: 1,
      nickname: '好同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 9,
      userId: 1,
      nickname: '坏同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 10,
      userId: 1,
      nickname: '假同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 11,
      userId: 1,
      nickname: '好同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 12,
      userId: 1,
      nickname: '坏同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 13,
      userId: 1,
      nickname: '假同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 14,
      userId: 1,
      nickname: '好同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 15,
      userId: 1,
      nickname: '坏同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 16,
      userId: 1,
      nickname: '假同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 17,
      userId: 1,
      nickname: '好同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 18,
      userId: 1,
      nickname: '坏同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 19,
      userId: 1,
      nickname: '假同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 20,
      userId: 1,
      nickname: '好同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 21,
      userId: 1,
      nickname: '坏同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 22,
      userId: 1,
      nickname: '假同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 23,
      userId: 1,
      nickname: '好同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }, {
      rank: 24,
      userId: 1,
      nickname: 'ss同学',
      acNum: '200',
      acRate: '99.7%',
      registerDate: '2018-07-18'
    }];

    this.rankTable = this.pagination(1, this.pageSize, this.rankData);
  }
}
</script>

<style lang="less" scoped>
#ranks {
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
#ranks {
  .el-header {
    padding: 0;

    .el-input {
      clear: both;
      width: auto;
    }
  }

  .el-button {
    margin-left: 1.2rem;
  }

  .el-pagination {
    text-align: center;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
  }

  .el-table__row:hover {
    cursor: pointer;
  }
}
</style>
