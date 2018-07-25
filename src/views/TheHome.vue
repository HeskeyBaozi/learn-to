<template>
  <el-container id="home">
    <el-main>
      <el-carousel height="200px" width="1000px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <el-container class="home-module-1">
          <el-aside>
            <img src="@/assets/u361.svg" style="width: 100%;"/>
            <p style="text-align: center;font-size: 16px;">新题</p>
          </el-aside>
          <el-main>
            <el-table :data="newProblems" stripe>
              <el-table-column prop="problemId" label="题目id"></el-table-column>
              <el-table-column prop="problemName" label="标题"></el-table-column>
              <el-table-column prop="releaseTime" label="发布时间"></el-table-column>
            </el-table>
          </el-main>
      </el-container>
      <el-container class="home-module-2">
        <el-aside>
          <img src="@/assets/u363.svg" style="width: 100%"/>
          <p style="text-align: center; font-size: 16px">热题</p>
        </el-aside>
        <el-main>
          <el-table :data="hotProblems" stripe>
            <el-table-column prop="problemId" label="题目id"></el-table-column>
            <el-table-column prop="problemName" label="标题"></el-table-column>
            <el-table-column prop="acRate" label="AC率"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
      <el-container class="home-module-3">
        <el-aside>
          <img src="@/assets/u351.svg" style="width: 100%"/>
          <p style="text-align: center; font-size: 16px">前十排名</p>
        </el-aside>
        <el-main>
          <el-table :data="ranks" stripe>
            <el-table-column prop="rank" label="名次"></el-table-column>
            <el-table-column prop="username" label="用户名"></el-table-column>
            <el-table-column prop="acNum" label="AC数"></el-table-column>
          </el-table>
        </el-main>
      </el-container>

    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'home'
})
export default class Ranks extends Vue {
  newProblems = [
  {
    problemId: 10000,
    problemName: '第一题',
    releaseTime: '2018-07-28'
  },
  {
    problemId: 10001,
    problemName: '第二题',
    releaseTime: '2018-07-28'
  },
  {
    problemId: 10003,
    problemName: '第三题',
    releaseTime: '2018-07-28'
  },
  {
    problemId: 10004,
    problemName: '第四题',
    releaseTime: '2018-07-28'
  },
  {
    problemId: 10005,
    problemName: '第五题',
    releaseTime: '2018-07-28'
  },
  {
    problemId: 10003,
    problemName: '第三题',
    releaseTime: '2018-07-28'
  },
  {
    problemId: 10004,
    problemName: '第四题',
    releaseTime: '2018-07-28'
  },
  {
    problemId: 10005,
    problemName: '第五题',
    releaseTime: '2018-07-28'
  },
  {
    problemId: 10006,
    problemName: '第六题',
    releaseTime: '2018-07-28'
  }
  ];
  hotProblems = [
    {
      problemId: 10001,
      problemName: '第一题',
      acRate: '10%'
    },
    {
      problemId: 10002,
      problemName: '第二题',
      acRate: '11%'
    },
    {
      problemId: 10003,
      problemName: '第三题',
      acRate: '12%'
    },
    {
      problemId: 10001,
      problemName: '第一题',
      acRate: '10%'
    },
    {
      problemId: 10002,
      problemName: '第二题',
      acRate: '11%'
    },
    {
      problemId: 10003,
      problemName: '第三题',
      acRate: '12%'
    },
    {
      problemId: 10001,
      problemName: '第一题',
      acRate: '10%'
    },
    {
      problemId: 10002,
      problemName: '第二题',
      acRate: '11%'
    },
    {
      problemId: 10003,
      problemName: '第三题',
      acRate: '12%'
    },
    {
      problemId: 10003,
      problemName: '第三题',
      acRate: '12%'
    }
  ];
  ranks = [
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    },
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    },
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    },
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    },
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    },
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    },
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    },
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    },
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    },
    {
      rank: 1,
      username: 'ljh',
      acNum: 100
    }
  ];
}
</script>

<style lang="less" scoped>
#home {
  .placeholder {
    background-color: lightcoral;
    width: 5rem;
    height: 100rem;
  }
  .home-module-1, .home-module-2, .home-module-3 {
    margin-top: 48px;
  }
}
</style>
<style lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    text-align: center;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .home-module-1 .el-main {
    padding: 0px;
    padding-left: 10px;
  }
  .home-module-2 .el-main {
    padding: 0px;
    padding-left: 10px;
  }
  .home-module-3 .el-main {
    padding: 0px;
    padding-left: 10px;
  }
  .home-module-1 .el-aside {
    padding-top: 16px;
  }
  .home-module-2 .el-aside {
    padding-top: 16px;
  }
  .home-module-3 .el-aside {
    padding-top: 16px;
  }
</style>

