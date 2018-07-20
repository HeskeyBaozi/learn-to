<template>
  <el-container id="user-information">
    <h1>个人信息页</h1>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'user-information'
})
export default class UserInformation extends Vue {}
</script>

<style lang="scss" scoped>
#user-information {
}
</style>

