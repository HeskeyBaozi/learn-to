<template>
  <div id="statistic">
     统计数字 自行设置子路由
     <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'statistic'
})
export default class Statistic extends Vue {}
</script>

<style lang="scss" scoped>
#statistic {
}
</style>

