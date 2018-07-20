<template>
  <el-container id="user-statistic">
    <h1>个人数据统计页</h1>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'user-statistic'
})
export default class UserStatistic extends Vue {}
</script>

<style lang="scss" scoped>
#user-statistic {
}
</style>

