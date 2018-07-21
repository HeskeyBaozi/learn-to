<template>
  <div class="editorArea">
    <div class="settings">
      Language:
      <el-select v-model="mode" placeholder="请选择编程语言" class="lang-select">
        <el-option v-for="item in modeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <codemirror v-model="code" :options="editorOptions" ref="myEditor"></codemirror>
    <div class="btn-group">
      <el-button type="primary" size="medium" class="submitBtn" @click="onSubmit()">提交</el-button>
      <el-button type="default" size="medium" class="submitBtn" @click="onRestoreTemplate()">还原</el-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { codemirror } from 'vue-codemirror-lite';
  import { Component, Prop, Vue } from 'vue-property-decorator';

  require('codemirror/mode/clike/clike');
  require('codemirror/theme/mdn-like.css');
  require('codemirror/keymap/sublime.js');
  require('codemirror/addon/fold/foldgutter.css');
  require('codemirror/addon/fold/foldcode.js');
  require('codemirror/addon/fold/brace-fold.js');
  require('codemirror/addon/fold/foldgutter.js');

  @Component({
    name: 'code-editor',
    components: {
      codemirror
    }
  })
  export default class CodeEditor extends Vue {
    code: string = '';
    editorOptions: any = {
      mode: 'text/x-c',
      matchBrackets: true,
      lineNumbers: true,
      indentUnit: 4,
      keyMap: 'sublime',
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      theme: 'mdn-like'
    };
    modeOptions: any[] = [{
      value: 'C',
      label: 'C'
    }, {
      value: 'C++',
      label: 'C++'
    }];
    mode: string = '';
    @Prop(String) codeTemplate!: string;

    mounted() {
      if (this.codeTemplate) {
        this.code = this.codeTemplate;
      }
    }

    onRestoreTemplate() {
      if (this.codeTemplate) {
        this.code = this.codeTemplate;
      }
    }

    // 暴露自定义事件接口
    onSubmit() {
      this.$emit('submitCode', this.code);
    }
  }

</script>

<style lang="scss" scoped>
  .editorArea {
    width:100%;
  }
  .lang-select {
    margin-bottom: 20px;
  }
  .submitBtn {
    float: right;
    margin-top: 20px;
    margin-left: 20px;
  }
  button:hover {
    box-shadow: 0px 2px 8px #888;
  }
  .btn-group:after{
    content: "";
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
  }
</style>

