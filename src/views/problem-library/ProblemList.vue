<template>
  <div>
    <el-container id="problem-list">
      <h1>这个是问题列表页面</h1>
    </el-container>
    <code-editor :codeTemplate="{lang: 'c', code: 'public void main () {}'}"></code-editor>
  </div>
</template>

<script lang="ts">
import CodeEditor from '@/components/problem/CodeEditor.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'problem-list',
  components: {
    CodeEditor
  }
})
export default class ProblemList extends Vue {
}
</script>

<style lang="scss" scoped>
  #problem-list {
  }
</style>

