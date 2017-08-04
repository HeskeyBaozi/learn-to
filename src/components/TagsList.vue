<template>
  <div class="tags-card">
    <div class="tag-card-title">
      <i class="fa fa-tags" aria-hidden="true"></i>
      <span>标签</span>
    </div>
    <div class="tag-list">
      <div class="tag" v-for="tag in tags" :key="tag.tag_id">{{tag.title}}</div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'tags-list',
    props: {
      tags: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>

  $title-color = #285ea0
  $content-color = #548dcc

  .tags-card {

    .tag-card-title {
      color $title-color
      font-weight bold
      font-size 14px
      padding 12px 21px
      border-bottom 1px solid #eeeeee

      > * {
        margin-right 5px
      }
    }

    .tag-list {
      display flex
      flex-flow row wrap
      padding 15px 25px
      font-size 12px
      font-weight bold

      .tag {
        display: inline-block
        margin-right 20px
        margin-bottom 10px
        padding 3px 15px
        background-color $content-color
        color white
        border-radius 20px
        border 1px solid $content-color
        transition all 300ms

        &:hover {
          background-color white
          color $content-color
          cursor pointer
        }
      }
    }
  }

</style>

