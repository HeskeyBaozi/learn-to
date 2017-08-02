<template>
  <div id="oj-problem" class="container page-container">
    <div class="row">
      <div class="col-9">
        <b-table show-empty
                 class="shadow problems-table"
                 :items="problems"
                 :fields="fields"
                 :current-page="currentPage"
                 :per-page="perPage"
        >
          <template slot="pass_rate" scope="data">
            {{data.item.pass_times | percentTransform(data.item.submission_times)}}
          </template>
          <template slot="status" scope="data">
            <span :class="getClass(data.value)">{{data.value | statusTransform}}</span>
          </template>
        </b-table>
        <div>
          <b-pagination size="md" :total-rows="problems.length" :per-page="perPage"
                        v-model="currentPage"></b-pagination>
        </div>
      </div>
      <div class="col-3">
        <div class="tags-card shadow">
          <div class="tag-card-title">
            <i class="fa fa-tags" aria-hidden="true"></i><span>标签</span>
          </div>
          <div class="tag-list">
            <div class="tag" pill v-for="tag in tags" :key="tag.tag_id">{{tag.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';
  import {INITIALIZE_PROBLEMS_PAGE} from '@/store/modules/problems';

  export default {
    name: 'problems',
    async created () {
      await this[INITIALIZE_PROBLEMS_PAGE]();
    },
    data () {
      return {
        currentPage: 1
      };
    },
    methods: {
      getClass (currentStatus) {
        return {
          statusFailed: currentStatus === 'unpassed',
          statusWaiting: currentStatus === 'waiting'
        };
      },
      ...mapActions('problems', [INITIALIZE_PROBLEMS_PAGE])
    },
    computed: {
      fields () {
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
      },
      perPage () {
        return 5;
      },
      ...mapState('problems', {
        problems: ({problems}) => problems,
        tags: ({tags}) => tags
      })
    },
    filters: {
      statusTransform (value) {
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
      percentTransform (value, submissionTimes) {
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

  .problems-table
    thead th
      text-align center
      font-size 14px
      color $title-color
    tbody td
      text-align center
      font-size 12px
      color $content-color
</style>

<style lang="stylus" scoped>
  $title-color = #285ea0
  $content-color = #548dcc

  .page-container
    margin-top 50px + 48px

  .shadow
    box-shadow 0 0 4px #cfcfcf

  .statusSuccess
    color #367459

  .statusWaiting
    color #989898

  .statusFailed
    color #d84643

  .tags-card
    .tag-card-title
      color $title-color
      font-weight bold
      font-size 14px
      padding 12px 21px
      border-bottom 1px solid #eeeeee
      > *
        margin-right 5px
    .tag-list
      display flex
      flex-flow row wrap
      padding 15px 25px
      font-size 12px
      font-weight bold
      .tag
        display: inline-block
        margin-right 20px
        margin-bottom 10px
        padding 3px 15px
        background-color $content-color
        color white
        border-radius 10px
        border 1px solid $content-color
        transition all 300ms
        &:hover
          background-color white
          color $content-color
          cursor pointer


</style>
