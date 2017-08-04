<template>
  <div id="oj-problems-list">
    <b-table hover :show-empty="true" class="shadow problems-table"
             :items="problems"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :empty-text="'暂无题目显示'"
             @row-clicked="handleRowClick">
      <template slot="pass_rate" scope="data">
        {{data.item.pass_times | percentPipe(data.item.submission_times)}}
      </template>
      <template slot="status" scope="data">
        <span :class="data.value | statusClassPipe">{{data.value | statusTranslationPipe}}</span>
      </template>
    </b-table>
    <div class="pagination-container">
      <b-pagination class="pagination" size="md" :total-rows="problems.length" :per-page="perPage"
                    v-model="currentPage"></b-pagination>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'problems-list',
    props: {
      perPage: {
        type: Number,
        required: true,
        validator: value => value > 0
      },
      problems: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentPage: 1
      };
    },
    computed: {
      fields() {
        return {
          problem_id: {
            label: '序号'
          },
          title: {
            label: '名称'
          },
          pass_rate: {
            label: '通过率'
          },
          difficulty: {
            label: '难度'
          },
          status: {
            label: '状态'
          }
        };
      }
    },
    methods: {
      handleRowClick(item, index) {
        console.log(item, index);
        this.$router.push({name: 'OneProblemHome', params: {problem_id: item.problem_id}});
      }
    },
    filters: {
      statusTranslationPipe(value) {
        if (!value) {
          return '';
        } else {
          return ({
            passed: '已通过',
            waiting: '等待中',
            unpassed: '未通过'
          })[value];
        }
      },
      statusClassPipe(value) {
        return {
          statusFailed: value === 'unpassed',
          statusWaiting: value === 'waiting'
        };
      },
      percentPipe(value, submissionTimes) {
        if (!value) {
          return '0%';
        } else {
          return ((value / submissionTimes) * 100).toPrecision(2) + '%';
        }
      }
    }
  }
</script>

<style lang="stylus">

  $title-color = #285ea0
  $content-color = #548dcc

  .problems-table {

    thead th {
      text-align center
      font-size 14px
      color $title-color
    }

    tbody {
      td {
        text-align center
        font-size 12px
        color $content-color
      }

      tr {
        &:hover {
          cursor pointer
        }
      }
    }
  }
</style>

<style lang="stylus" scoped>

  .shadow {
    box-shadow 0 0 4px #cfcfcf
  }

  .statusSuccess {
    color #367459
  }

  .statusWaiting {
    color #989898
  }

  .statusFailed {
    color #d84643
  }

  .pagination-container {

    .pagination {
      width min-content
      margin 30px auto
    }
  }
</style>

