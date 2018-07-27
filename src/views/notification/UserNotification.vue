<template>
  <el-container>
    <el-header>
      <div id="buttons">
        <el-button type="primary">标记为已读</el-button>
        <el-button>删除</el-button>
      </div>
      <div id="checkBox">
        <el-checkbox label="全选"></el-checkbox>
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col v-for="(item, index) in tableData" :key="index">
          <el-card>
            <div class="background">
              <div class="name">{{ item.name }}</div>
            </div>
            <div class="simpleInfo">
              <div class="title">{{ item.name }}</div>
              <div class="date">{{ item.date }}</div>
              <div class="information">{{ item.information }}</div>
            </div>
            <div class="isChecked">
                <el-checkbox></el-checkbox>
            </div>
            <div class="moreInfo">
              <el-button type="primary" round>查看详情</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="fixed-footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurPageChange"
        :current-page.sync="curPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size.sync="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="notatificationData.length"
        style="text-align: center; height: 100%; display: flex;align-items:center; justify-content:center;">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface NotificationItem {
  name: string;
  date: string;
  information: string;
}

@Component({
  name: 'user-notification'
})
export default class UserNotification extends Vue {
  notification: NotificationItem = {
    name: '',
    date: '',
    information: ''
  };
  notatificationData: NotificationItem[] = [];
  tableData: NotificationItem[] = [];
  curPage: number = 1;
  pageSize: number = 100;

  pagination(pageNo: number, pageSize: number, array: NotificationItem[]) {
    const offset: number = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length) ?
      array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
  }

  handleSizeChange(val: number) {
    this.pageSize = val;
    this.tableData = this.pagination(this.curPage, val, this.notatificationData);
  }

  handleCurPageChange(val: number) {
    this.tableData = this.pagination(val, this.pageSize, this.notatificationData);
  }

  async mounted() {
    this.notatificationData = [
      {
      name: '这是第一页',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: '这是第二页',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: '这是第三页',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: '这是第四页',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！'
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！'
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01'
      }
    ];
    this.tableData = this.pagination(1, this.pageSize, this.notatificationData);
  }

}
</script>

<style lang="less" scoped>
  #buttons{
    margin-top: 3.5rem;
    margin-left: 5%;
  }
  #checkBox{
    float: right;
    position: relative;
    top: -1.3rem;
    right: 2.2rem;
  }
  .el-card{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.3rem;
  }
  .background {
    width: 150px;
    height: 150px;
    background: #ddd;
    padding: 1rem;
    font-weight: bold;
    display: inline-block;
  }
  .name {
    font-size: 1.5rem;
    margin-top: 3.7rem;
    text-align: center;
  }
  .simpleInfo {
    margin-left: 1.8rem;
    display: inline-block;
    .title{
      font-size: 15pt;
      padding-bottom: 0.3rem;
    }
    .date{
      padding-bottom: 1.5rem;
    }
    .information{
      width: 35.5rem;
      height: 6rem;
    }
  }
  .moreInfo {
    float: right;
    margin-top: 9rem;
  }
  .isChecked{
    float: right;
  }
  .fixed-footer {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 64px;
    width: calc(100% - 200px);
    background: #fff;
  }
</style>

