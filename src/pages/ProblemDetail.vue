<template>
  <div id="oj-problem-detail" class="container page-container">
    <div class="shadow problem-detail">
      <h1>{{detail.problem_id || $route.params.problem_id}}. {{detail.title}}</h1>
      <hr/>
      <b-nav tabs>
        <b-nav-item :active="$route.name === 'OneProblemDescription'"
                    :to="{name:'OneProblemDescription'}">
          <i class="fa fa-list-alt" aria-hidden="true"></i>Description
        </b-nav-item>
        <b-nav-item :active="$route.name === 'OneProblemSubmissions'"
                    :to="{name:'OneProblemSubmissions'}">
          <i class="fa fa-file-code-o" aria-hidden="true"></i>Submissions
        </b-nav-item>
        <b-nav-item :active="$route.name === 'OneProblemDiscuss'"
                    :to="{name:'OneProblemDiscuss'}">
          <i class="fa fa-comments" aria-hidden="true"></i>Discuss
        </b-nav-item>
      </b-nav>
      <div class="child-container">
        <router-view></router-view>
      </div>
      <hr/>
      <div id="oj-problem-detail-code" v-show="shouldShowCodeEditor">
        <div class="code-meta form-group">
          <label for="code-language" class="hidden"></label>
          <select name="codeLanguage" id="code-language" class="form-control" v-model="codeLanguage">
            <option value="cpp">C++</option>
            <option value="c">C</option>
          </select>
        </div>
        <div class="code-editor form-group">
          <h1>Code Editor Here</h1>
        </div>
        <div class="code-panel form-group">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {mapActions, mapState} from 'vuex';
  import {INITIALIZE_PROBLEM_DETAIL_PAGE} from '@/store/modules/problem-detail';

  export default {
    name: 'problem-detail',
    async created() {
      await this[INITIALIZE_PROBLEM_DETAIL_PAGE]({
        problem_id: this.$route.params.problem_id
      });
    },
    data() {
      return {
        codeLanguage: 'c'
      };
    },
    computed: {
      shouldShowCodeEditor() {
        return this.$route.name === 'OneProblemDescription' || this.$route.name === 'OneProblemHint';
      },
      ...mapState('problem-detail', {
        detail: ({currentProblem}) => currentProblem
      })
    },
    methods: {
      ...mapActions('problem-detail', [INITIALIZE_PROBLEM_DETAIL_PAGE])
    }
  }
</script>

<style lang="stylus" scoped>
  .page-container {
    margin-top 50px + 48px
  }

  .shadow {
    box-shadow 0 0 4px #cfcfcf
  }

  .problem-detail {
    padding 20px

    .nav .nav-item {
      .nav-link {
        > * {
          margin-right 5px
        }
      }
    }

    .child-container {
      padding 20px 0
    }

    select.form-control {
      display inline
      width 230px
    }

    .code-editor {
      height 400px
      background-color lightblue
      display flex
      justify-content center
      align-items center
      color #ffffff
    }

    .code-panel {
      display flex
      flex-flow row nowrap
      justify-content flex-end

      .btn {
        width 10%
      }
    }
  }
</style>
