<template>
  <el-container id="problem-description">
    <div class="sub-containter">
      <h1>题目描述</h1>
      <markdown-text class="markdown" :source="description"/>
    </div>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'problem-description'
})
export default class ProblemDescription extends Vue {
  description = '# Description\n+7 dalao would like to reverse a number, and +C dalao would like to see \
  the remainder (modulus) after the division of the reversed number by a second number. For simplicity \
  **just tell +C the remainder.**\n# Details\nIn the first line of the input is a number ``n`` (1 <= n <= 10) \
  representing the number of the test cases.\nEach of the following n lines consists of two blank-separated \
  integers ``divisor`` and ``num`` (1 <= divisor <= 1000; num >= 0), where ``divisor`` is the divisor to be \
  used to get the remainder, and ``num`` is the integer to be reversed.\nOutput the remainder for each case and end it \
  with a \'\\n\'.\n```\n5\n10 12345\n32 2345\n98 43245\n231 83929\n2 1\n```\nIn this input:\n- There are ``five`` \
  test cases.\n- In the first test case, since the reversed number of ``12345`` would be ``54321``, you should \
  output the remainder of ``54321 / 10``, namely ``1``.\n- In the second test case, since the reversed number \
  of ``2345`` would be ``5432``, you should output the remainder of ``5432 / 32``, namely ``24``.\n- ...\nAnd \
  the corresponding output would be:\n```\n1\n24\n40\n76\n1\n```\n';
}
</script>

<style lang="scss" scoped>
#problem-description {

}
</style>
