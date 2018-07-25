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

<style lang="scss" scoped>
#user {
}
</style>

