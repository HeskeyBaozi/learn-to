<template>
  <el-container id="solution-area">
    <keep-alive>
      <code-editor :codeTemplate="{ lang: 'c', code: code}" style="margin-top: 1rem;"></code-editor>
    </keep-alive>
  </el-container>
</template>

<script lang="ts">
import CodeEditor from '@/components/problem/CodeEditor.vue';
import store from '@/stores';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'solution-area',
  components: {
    CodeEditor
  }
})
export default class SolutionArea extends Vue {
  get code(): string {
    return store.state.problem.submitRecord ? store.state.problem.submitRecord : 'int main () { return 0; }';
  }
}
</script>

<style lang="less" scoped>
#solution-area {
}
</style>
