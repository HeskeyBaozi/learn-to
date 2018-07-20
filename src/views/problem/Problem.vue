<template>
  <div id="problem">
    <h1>题目</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'problem'
})
export default class Problem extends Vue {}
</script>

<style lang="scss" scoped>
#problem {
}
</style>
