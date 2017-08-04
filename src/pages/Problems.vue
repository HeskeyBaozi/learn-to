<template>
  <div id="oj-problem" class="container page-container">
    <div class="row">
      <div class="col-9">
        <problems-list :perPage="20" :problems="problems"></problems-list>
      </div>
      <div class="col-3">
        <tags-list class="shadow" :tags="tags"></tags-list>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {mapActions, mapState} from 'vuex';
  import {INITIALIZE_PROBLEMS_PAGE} from '@/store/modules/problems';
  import ProblemsList from '@/components/ProblemsList';
  import TagsList from '@/components/TagsList';

  export default {
    name: 'problems',
    components: {
      ProblemsList,
      TagsList
    },
    async created() {
      await this[INITIALIZE_PROBLEMS_PAGE]();
    },
    methods: {
      ...mapActions('problems', [INITIALIZE_PROBLEMS_PAGE])
    },
    computed: {
      ...mapState('problems', {
        problems: ({problems}) => problems,
        tags: ({tags}) => tags
      })
    }
  }
</script>

<style lang="stylus" scoped>
  $title-color = #285ea0
  $content-color = #548dcc

  .page-container {
    margin-top 50px + 48px
  }

  .shadow {
    box-shadow 0 0 4px #cfcfcf
  }
</style>
