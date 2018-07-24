<template>
  <el-container id="solution-area">
    <keep-alive>
      <code-editor :codeTemplate="{ lang: 'c', code: 'int main () { return 0; }'}"></code-editor>
    </keep-alive>
  </el-container>
</template>

<script lang="ts">
import CodeEditor from '@/components/problem/CodeEditor.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'solution-area',
  components: {
    CodeEditor
  }
})
export default class SolutionArea extends Vue {

}
</script>

<style lang="scss" scoped>
#solution-area {
}
</style>
