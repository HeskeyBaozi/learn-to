<template>
  <el-container id="home">
    <el-main>
      <h1>这是主页</h1>
      <!-- <div class="placeholder"></div> -->
    </el-main>
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
  .placeholder {
    background-color: lightcoral;
    width: 5rem;
    height: 100rem;
  }
}
</style>

