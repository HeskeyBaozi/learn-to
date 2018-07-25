<template>
  <el-container id="markdown-example">
    <el-main>
      <h1>markdown-example</h1>
      <textarea width="100%" :value="input" @input="update"></textarea>
      <markdown-text class="markdown" :source="input"/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'markdown-example'
})
export default class MarkdownExample extends Vue {
  input = '```cpp\n#include<iostream>\nusing namespace std;\n  cout << "Hello, World" << endl;\n  return 0;\n}\n```' +
  `\n**Inline Math**: $\\sqrt{3x-1}+(1+x)^2$`;

  update(e: any) {
    this.input = e.target.value;
  }
}
</script>

<style lang="scss" scoped>
#markdown-example {
  .markdown {
    border: 1px solid lightcoral;
  }
}
</style>

