<template>
  <div id="user">
     <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'user'
})
export default class User extends Vue {}
</script>

<style lang="less" scoped>
#user {
  width: 100%;
}
</style>

