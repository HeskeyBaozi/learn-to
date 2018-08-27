<template>
  <el-container>
    <el-main>
      <div class="settings">
        Language:
        <el-select v-model="mode" placeholder="请选择编程语言">
          <el-option v-for="item in modeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <codemirror v-model="code" :options="editorOptions" class="code-mirror"></codemirror>
      <el-button-group style="float: right;">
        <el-button type="primary" size="medium" class="submitBtn" @click="onSubmit()">提交</el-button>
        <el-button type="default" size="medium" class="submitBtn" @click="onRestoreTemplate()">还原</el-button>
      </el-button-group>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldgutter.js';
// import 'codemirror/keymap/sublime.js';
import 'codemirror/mode/clike/clike';
import 'codemirror/theme/idea.css';
import { codemirror } from 'vue-codemirror-lite';
import { Component, Prop, Vue } from 'vue-property-decorator';

interface ICodeTemplate {
  lang: string;
  code: string;
}

@Component({
  name: 'code-editor',
  components: {
    codemirror
  }
})
export default class CodeEditor extends Vue {
  code: string = '';
  mode: string = '';
  @Prop(Object) codeTemplate!: ICodeTemplate;

  public get editorOptions(): object {
    let lang: string = '';
    if (this.mode === 'c' || this.mode === 'c++') {
      lang = 'text/x-c';
    }
    // else if (this.mode === 'javascript') {
    //   lang = 'javascript';
    // } else if (this.mode === 'python') {
    //   lang = 'python';
    // }
    return {
      mode: lang,
      matchBrackets: true,
      lineNumbers: true,
      indentUnit: 2,
      tabSize: 2,
      keyMap: 'sublime',
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      theme: 'idea'
    };
  }

  public get modeOptions(): object[] {
    return [
      {
        value: 'c',
        label: 'c'
      },
      {
        value: 'c++',
        label: 'c++'
      }
      // {
      //   value: 'javascript',
      //   label: 'javascript'
      // },
      // {
      //   value: 'python',
      //   label: 'python'
      // }
    ];
  }

  mounted() {
    this.mode = this.codeTemplate.lang;
    this.code = this.codeTemplate.code;
  }

  onRestoreTemplate() {
    this.mode = this.codeTemplate.lang;
    if (this.codeTemplate.code) {
      this.code = this.codeTemplate.code;
    }
  }

  // 暴露自定义事件接口
  onSubmit() {
    this.$emit('submitCode', { lang: this.mode, code: this.code });
  }
}
</script>

<style lang="less" scoped>
.settings {
  margin-bottom: 1rem;
}
.submitBtn {
  float: right;
  margin-top: 1rem;
  margin-left: 1rem;
}
button:hover {
  box-shadow: @box-shadow-dark;
}

.code-mirror {
  border: 1px solid #eeeeee;
  border-radius: 5px;
}
</style>

