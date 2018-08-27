<template>
  <el-container direction="vertical">
    <h1>This is the Entry Page</h1>
    <div>
      <el-button @click="enter()">Enter</el-button>
    </div>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'entry-page'
})
export default class EntryPage extends Vue {
  enter() {
    this.$router.push({ name: 'home' });
  }
}
</script>

