<template>
  <el-container id="home">
    <h1>这是主页</h1>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'home'
})
export default class Ranks extends Vue {}
</script>

<style lang="scss" scoped>
#home {
}
</style>

