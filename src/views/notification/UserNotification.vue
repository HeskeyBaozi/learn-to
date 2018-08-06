<template>
  <el-container>
    <el-header>
      <div id="buttons">
        <el-button type="primary">标记为已读</el-button>
        <el-button>删除</el-button>
      </div>
      <div id="checkBox">
        <el-checkbox label="全选" @change="handleCheckAllChange"></el-checkbox>
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
                <el-checkbox v-model="item.isChecked" @change="handleCheckedItemsChange(index)"></el-checkbox>
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
  isChecked: boolean;
}

@Component({
  name: 'user-notification'
})
export default class UserNotification extends Vue {
  notification: NotificationItem = {
    name: '',
    date: '',
    information: '',
    isChecked: false
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

  handleCheckAllChange(val: boolean) {
    if (val) {
      let index = 0;
      for (index = 0; index < this.tableData.length; index ++) {
        this.tableData[index].isChecked = true;
      }
    } else {
      let index = 0;
      for (index = 0; index < this.tableData.length; index ++) {
        this.tableData[index].isChecked = false;
      }
    }
  }

  handleCheckedItemsChange(index: number, val: boolean) {
    this.tableData[index].isChecked = val;
  }

  async mounted() {
    this.notatificationData = [
      {
        name: '这是第一页',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: '这是第二页',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: '这是第三页',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: '这是第四页',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
      }, {
        name: 'AB tree',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: '管理员',
        date: '2018-07-18',
        information: '这道题已过期！',
        isChecked: false
      }, {
        name: 'Hello World',
        date: '2018-07-26',
        information: '这道题已经被TA批改惹！',
        isChecked: false
      }, {
        name: '老师',
        date: '2018-07-27',
        information: '您的作业延期至2018-09-01',
        isChecked: false
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
    right: 5rem;
  }
  .el-card{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.3rem;
  }
  .background {
    order: 1;
    flex-shrink: 1;
    width: 150px;
    height: 150px;
    background: #ddd;
    padding: 1rem;
    font-weight: bold;
    display: inline-block;
    .name {
      font-size: 1.5rem;
      margin-top: 3.7rem;
      text-align: center;
    }
  }
  .simpleInfo {
    order: 2;
    flex-shrink: 1;
    margin-left: 14.8rem;
    margin-top: -12rem;
    //display: inline-block;
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
    order: 4;
    flex-shrink: 1;
    margin-left: 50rem;
    margin-top: -1rem;
  }
  .isChecked{
    order: 3;
    flex-shrink: 1;
    float: right;
    margin-top: -11rem;
  }
  .fixed-footer {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 64px;
    width: 100%;
    background: #fff;
  }
</style>

