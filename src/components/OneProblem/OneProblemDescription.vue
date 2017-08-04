<template>
  <div id="oj-one-problem-description">
    <h2>Description</h2>
    <p>{{detail.description}}</p>
    <h2>Hint</h2>
    <p>{{detail.hint}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'one-problem-description',
    computed: {
      ...mapState('problem-detail', {
        detail: ({currentProblem}) => currentProblem
      })
    }
  };
</script>
