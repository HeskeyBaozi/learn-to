<template>
  <div id="oj-one-problem-submissions">
    <b-card class="submission-card"
            :header="detail.submission_result | submissionResultPipe"
            :header-class="getClass">
      {{detail.compiler_messages}}
    </b-card>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'one-problem-submissions',
    computed: {
      ...mapState('problem-detail', {
        detail: ({currentProblem}) => currentProblem
      }),
      getClass () {
        return [
          'submission-card-header',
          this.$options.filters.submissionResultClassPipe(this.detail.submission_result)
        ];
      }
    },
    filters: {
      submissionResultPipe (value) {
        if (!value) return '';
        else {
          return ({
            accepted: 'Accepted',
            wrong_answer: 'Wrong Answer',
            compile_error: 'Compile Error',
            runtime_error: 'Runtime Error'
          })[value];
        }
      },
      submissionResultClassPipe (value) {
        return {
          'statusSuccess': value === 'accepted',
          'statusFailed': value !== 'accepted'
        };
      }
    }
  }
</script>

<style lang="stylus">
  .submission-card {
    .submission-card-header {
      font-weight bold
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
  }
</style>
