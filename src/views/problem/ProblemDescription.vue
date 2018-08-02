<template>
  <el-container id="problem-description">
    <div class="sub-containter">
      <h1>题目描述</h1>
      <markdown-text class="markdown" :source="description"/>
    </div>
  </el-container>
</template>

<script lang="ts">
import { httpRequest } from '@/utils/httpRequest.ts';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'problem-description'
})
export default class ProblemDescription extends Vue {
  description: string = '';

  async mounted() {
    const result = await httpRequest.get(`/libraries/0/problems/${this.$route.params.problemId}`);
    // console.log(this.$route.params.problemId);
    this.description = result.data;
  }
}
</script>

<style lang="less" scoped>
#problem-description {

}
</style>
