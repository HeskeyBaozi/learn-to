<template>
  <div id="matrix-markdown-text">
    <vue-markdown class="markdown" :source="source" />
  </div>
</template>

<script lang="ts">
import { highlightAll } from 'prismjs';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-clike.js';
import 'prismjs/components/prism-cpp.js';
import 'prismjs/themes/prism.css';
import VueMarkdown from 'vue-markdown';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'markdown-text',
  components: {
    VueMarkdown
  }
})
export default class IconText extends Vue {
  @Prop({
    type: String,
    required: true
  })
  source!: string;

  mounted() {
    this.$nextTick(() => {
      highlightAll();
    });
  }
}
</script>

<style lang="less" scoped>
@import url('~prismjs/themes/prism.css');
#matrix-markdown-text {
  width: 100%;
}
</style>

<style lang="less">
#matrix-markdown-text {
  .markdown {
    a {
      color: @link-color;
      text-decoration: none;
    }
    a:hover,
    a:focus {
      color: @link-hover-color;
      text-decoration: underline;
    }
    a:focus {
      outline: thin dotted;
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: -2px;
    }
    figure {
      margin: 0;
    }
    img {
      max-width: 100%;
      vertical-align: middle;
    }
    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 0;
      border-top: 1px solid #eee;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;
      color: inherit;
    }
    h1 small,
    h2 small,
    h3 small,
    h4 small,
    h5 small,
    h6 small {
      font-weight: normal;
      line-height: 1;
      color: #777;
    }
    h1,
    .h1,
    h2,
    .h2,
    h3,
    .h3 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    h1 small,
    .h1 small,
    h2 small,
    .h2 small,
    h3 small,
    .h3 small,
    h1 .small,
    .h1 .small,
    h2 .small,
    .h2 .small,
    h3 .small,
    .h3 .small {
      font-size: 65%;
    }
    h4,
    .h4,
    h5,
    .h5,
    h6,
    .h6 {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    h4 small,
    .h4 small,
    h5 small,
    .h5 small,
    h6 small,
    .h6 small,
    h4 .small,
    .h4 .small,
    h5 .small,
    .h5 .small,
    h6 .small,
    .h6 .small {
      font-size: 75%;
    }
    h1,
    .h1 {
      font-size: 36px;
    }
    h2,
    .h2 {
      font-size: 30px;
    }
    h3,
    .h3 {
      font-size: 24px;
    }
    h4,
    .h4 {
      font-size: 18px;
    }
    h5,
    .h5 {
      font-size: 14px;
    }
    h6,
    .h6 {
      font-size: 12px;
    }
    p {
      margin: 0 0 10px;
    }
    small,
    .small {
      font-size: 85%;
    }
    cite {
      font-style: normal;
    }
    mark,
    .mark {
      padding: 0.2em;
      background-color: #fcf8e3;
    }

    ul,
    ol {
      margin-top: 0;
      margin-bottom: 10px;
    }
    ul ul,
    ol ul,
    ul ol,
    ol ol {
      margin-bottom: 0;
    }
    .list-unstyled {
      padding-left: 0;
      list-style: none;
    }
    .list-inline {
      padding-left: 0;
      margin-left: -5px;
      list-style: none;
    }
    .list-inline > li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
    }
    dl {
      margin-top: 0;
      margin-bottom: 20px;
    }
    dt,
    dd {
      line-height: 1.42857143;
    }
    dt {
      font-weight: bold;
    }
    dd {
      margin-left: 0;
    }
    @media (min-width: 768px) {
      .dl-horizontal dt {
        float: left;
        width: 160px;
        overflow: hidden;
        clear: left;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .dl-horizontal dd {
        margin-left: 180px;
      }
    }
    abbr[title],
    abbr[data-original-title] {
      cursor: help;
      border-bottom: 1px dotted #777;
    }
    .initialism {
      font-size: 90%;
      text-transform: uppercase;
    }
    blockquote {
      padding: 10px 20px;
      margin: 0 0 20px;
      font-size: 17.5px;
      border-left: 5px solid #eee;
    }
    blockquote p:last-child,
    blockquote ul:last-child,
    blockquote ol:last-child {
      margin-bottom: 0;
    }
    blockquote footer,
    blockquote small,
    blockquote .small {
      display: block;
      font-size: 80%;
      line-height: 1.42857143;
      color: #777;
    }
    blockquote footer:before,
    blockquote small:before,
    blockquote .small:before {
      content: "\2014 \00A0";
    }
    .blockquote-reverse,
    blockquote.pull-right {
      padding-right: 15px;
      padding-left: 0;
      text-align: right;
      border-right: 5px solid #eee;
      border-left: 0;
    }
    .blockquote-reverse footer:before,
    blockquote.pull-right footer:before,
    .blockquote-reverse small:before,
    blockquote.pull-right small:before,
    .blockquote-reverse .small:before,
    blockquote.pull-right .small:before {
      content: "";
    }
    .blockquote-reverse footer:after,
    blockquote.pull-right footer:after,
    .blockquote-reverse small:after,
    blockquote.pull-right small:after,
    .blockquote-reverse .small:after,
    blockquote.pull-right .small:after {
      content: "\00A0 \2014";
    }
    blockquote:before,
    blockquote:after {
      content: "";
    }
    address {
      margin-bottom: 20px;
      font-style: normal;
      line-height: 1.42857143;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    }
    code {
      padding: 2px 4px;
      font-size: 90%;
      color: #c7254e;
      background-color: #f9f2f4;
      border-radius: 4px;
    }
    kbd {
      padding: 2px 4px;
      font-size: 90%;
      color: #fff;
      background-color: #333;
      border-radius: 3px;
      -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
    }
    kbd kbd {
      padding: 0;
      font-size: 100%;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    pre {
      display: block;
      padding: 9.5px;
      margin: 0 0 10px;
      font-size: 13px;
      line-height: 1.42857143;
      color: #333;
      word-break: break-all;
      word-wrap: break-word;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    pre code {
      padding: 0;
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      border-radius: 0;
    }

    table {
      background-color: transparent;
    }
    th {
      text-align: left;
    }
    .table {
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
    }
    .table > thead > tr > th,
    .table > tbody > tr > th,
    .table > tfoot > tr > th,
    .table > thead > tr > td,
    .table > tbody > tr > td,
    .table > tfoot > tr > td {
      padding: 8px;
      line-height: 1.42857143;
      vertical-align: top;
      border-top: 1px solid #ddd;
    }
    .table > thead > tr > th {
      vertical-align: bottom;
      border-bottom: 2px solid #ddd;
    }
    .table > caption + thead > tr:first-child > th,
    .table > colgroup + thead > tr:first-child > th,
    .table > thead:first-child > tr:first-child > th,
    .table > caption + thead > tr:first-child > td,
    .table > colgroup + thead > tr:first-child > td,
    .table > thead:first-child > tr:first-child > td {
      border-top: 0;
    }
    .table > tbody + tbody {
      border-top: 2px solid #ddd;
    }
    .table .table {
      background-color: #fff;
    }
    .table-condensed > thead > tr > th,
    .table-condensed > tbody > tr > th,
    .table-condensed > tfoot > tr > th,
    .table-condensed > thead > tr > td,
    .table-condensed > tbody > tr > td,
    .table-condensed > tfoot > tr > td {
      padding: 5px;
    }
    .table-bordered {
      border: 1px solid #ddd;
    }
    .table-bordered > thead > tr > th,
    .table-bordered > tbody > tr > th,
    .table-bordered > tfoot > tr > th,
    .table-bordered > thead > tr > td,
    .table-bordered > tbody > tr > td,
    .table-bordered > tfoot > tr > td {
      border: 1px solid #ddd;
    }
    .table-bordered > thead > tr > th,
    .table-bordered > thead > tr > td {
      border-bottom-width: 2px;
    }
    .table-striped > tbody > tr:nth-child(odd) > td,
    .table-striped > tbody > tr:nth-child(odd) > th {
      background-color: #f9f9f9;
    }
    .table-hover > tbody > tr:hover > td,
    .table-hover > tbody > tr:hover > th {
      background-color: #f5f5f5;
    }
    table col[class*="col-"] {
      position: static;
      display: table-column;
      float: none;
    }
    table td[class*="col-"],
    table th[class*="col-"] {
      position: static;
      display: table-cell;
      float: none;
    }
    .table > thead > tr > td.active,
    .table > tbody > tr > td.active,
    .table > tfoot > tr > td.active,
    .table > thead > tr > th.active,
    .table > tbody > tr > th.active,
    .table > tfoot > tr > th.active,
    .table > thead > tr.active > td,
    .table > tbody > tr.active > td,
    .table > tfoot > tr.active > td,
    .table > thead > tr.active > th,
    .table > tbody > tr.active > th,
    .table > tfoot > tr.active > th {
      background-color: #f5f5f5;
    }
    .table-hover > tbody > tr > td.active:hover,
    .table-hover > tbody > tr > th.active:hover,
    .table-hover > tbody > tr.active:hover > td,
    .table-hover > tbody > tr:hover > .active,
    .table-hover > tbody > tr.active:hover > th {
      background-color: #e8e8e8;
    }
    .table > thead > tr > td.success,
    .table > tbody > tr > td.success,
    .table > tfoot > tr > td.success,
    .table > thead > tr > th.success,
    .table > tbody > tr > th.success,
    .table > tfoot > tr > th.success,
    .table > thead > tr.success > td,
    .table > tbody > tr.success > td,
    .table > tfoot > tr.success > td,
    .table > thead > tr.success > th,
    .table > tbody > tr.success > th,
    .table > tfoot > tr.success > th {
      background-color: #dff0d8;
    }
    .table-hover > tbody > tr > td.success:hover,
    .table-hover > tbody > tr > th.success:hover,
    .table-hover > tbody > tr.success:hover > td,
    .table-hover > tbody > tr:hover > .success,
    .table-hover > tbody > tr.success:hover > th {
      background-color: #d0e9c6;
    }
    .table > thead > tr > td.info,
    .table > tbody > tr > td.info,
    .table > tfoot > tr > td.info,
    .table > thead > tr > th.info,
    .table > tbody > tr > th.info,
    .table > tfoot > tr > th.info,
    .table > thead > tr.info > td,
    .table > tbody > tr.info > td,
    .table > tfoot > tr.info > td,
    .table > thead > tr.info > th,
    .table > tbody > tr.info > th,
    .table > tfoot > tr.info > th {
      background-color: #d9edf7;
    }
    .table-hover > tbody > tr > td.info:hover,
    .table-hover > tbody > tr > th.info:hover,
    .table-hover > tbody > tr.info:hover > td,
    .table-hover > tbody > tr:hover > .info,
    .table-hover > tbody > tr.info:hover > th {
      background-color: #c4e3f3;
    }
    .table > thead > tr > td.warning,
    .table > tbody > tr > td.warning,
    .table > tfoot > tr > td.warning,
    .table > thead > tr > th.warning,
    .table > tbody > tr > th.warning,
    .table > tfoot > tr > th.warning,
    .table > thead > tr.warning > td,
    .table > tbody > tr.warning > td,
    .table > tfoot > tr.warning > td,
    .table > thead > tr.warning > th,
    .table > tbody > tr.warning > th,
    .table > tfoot > tr.warning > th {
      background-color: #fcf8e3;
    }
    .table-hover > tbody > tr > td.warning:hover,
    .table-hover > tbody > tr > th.warning:hover,
    .table-hover > tbody > tr.warning:hover > td,
    .table-hover > tbody > tr:hover > .warning,
    .table-hover > tbody > tr.warning:hover > th {
      background-color: #faf2cc;
    }
    .table > thead > tr > td.danger,
    .table > tbody > tr > td.danger,
    .table > tfoot > tr > td.danger,
    .table > thead > tr > th.danger,
    .table > tbody > tr > th.danger,
    .table > tfoot > tr > th.danger,
    .table > thead > tr.danger > td,
    .table > tbody > tr.danger > td,
    .table > tfoot > tr.danger > td,
    .table > thead > tr.danger > th,
    .table > tbody > tr.danger > th,
    .table > tfoot > tr.danger > th {
      background-color: #f2dede;
    }
    .table-hover > tbody > tr > td.danger:hover,
    .table-hover > tbody > tr > th.danger:hover,
    .table-hover > tbody > tr.danger:hover > td,
    .table-hover > tbody > tr:hover > .danger,
    .table-hover > tbody > tr.danger:hover > th {
      background-color: #ebcccc;
    }
    @media screen and (max-width: 767px) {
      .table-responsive {
        width: 100%;
        margin-bottom: 15px;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        border: 1px solid #ddd;
      }
      .table-responsive > .table {
        margin-bottom: 0;
      }
      .table-responsive > .table > thead > tr > th,
      .table-responsive > .table > tbody > tr > th,
      .table-responsive > .table > tfoot > tr > th,
      .table-responsive > .table > thead > tr > td,
      .table-responsive > .table > tbody > tr > td,
      .table-responsive > .table > tfoot > tr > td {
        white-space: nowrap;
      }
      .table-responsive > .table-bordered {
        border: 0;
      }
      .table-responsive > .table-bordered > thead > tr > th:first-child,
      .table-responsive > .table-bordered > tbody > tr > th:first-child,
      .table-responsive > .table-bordered > tfoot > tr > th:first-child,
      .table-responsive > .table-bordered > thead > tr > td:first-child,
      .table-responsive > .table-bordered > tbody > tr > td:first-child,
      .table-responsive > .table-bordered > tfoot > tr > td:first-child {
        border-left: 0;
      }
      .table-responsive > .table-bordered > thead > tr > th:last-child,
      .table-responsive > .table-bordered > tbody > tr > th:last-child,
      .table-responsive > .table-bordered > tfoot > tr > th:last-child,
      .table-responsive > .table-bordered > thead > tr > td:last-child,
      .table-responsive > .table-bordered > tbody > tr > td:last-child,
      .table-responsive > .table-bordered > tfoot > tr > td:last-child {
        border-right: 0;
      }
      .table-responsive > .table-bordered > tbody > tr:last-child > th,
      .table-responsive > .table-bordered > tfoot > tr:last-child > th,
      .table-responsive > .table-bordered > tbody > tr:last-child > td,
      .table-responsive > .table-bordered > tfoot > tr:last-child > td {
        border-bottom: 0;
      }
    }
    fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }
    legend {
      display: block;
      width: 100%;
      padding: 0;
      margin-bottom: 20px;
      font-size: 21px;
      line-height: inherit;
      color: #333;
      border: 0;
      border-bottom: 1px solid #e5e5e5;
    }
    label {
      display: inline-block;
      max-width: 100%;
      margin-bottom: 5px;
      font-weight: bold;
    }
    input[type="search"] {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    input[type="radio"],
    input[type="checkbox"] {
      margin: 4px 0 0;
      margin-top: 1px \9;
      line-height: normal;
    }
    input[type="file"] {
      display: block;
    }
    input[type="range"] {
      display: block;
      width: 100%;
    }
    select[multiple],
    select[size] {
      height: auto;
    }
    input[type="file"]:focus,
    input[type="radio"]:focus,
    input[type="checkbox"]:focus {
      outline: thin dotted;
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: -2px;
    }
    output {
      display: block;
      padding-top: 7px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
    }

    .normal-elements {
      margin-top: 0;
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
      }
    }

    .list(@style) {
      padding-left: 2rem;
      list-style: @style;
      > * {
        .normal-elements;
      }
    }

    li {
      line-height: 1.6;
    }

    ul {
      .list(circle);
    }

    ol {
      .list(decimal);
    }

    dl {
      .list(none);
    }
  }
}
</style>
