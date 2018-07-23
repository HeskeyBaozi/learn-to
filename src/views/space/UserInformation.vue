<template>
  <div>
    <el-container id="user-information">
      <h1>个人信息页</h1>
    </el-container>
    <profile></profile>
  </div>
</template>

<script lang="ts">
import Profile from '@/components/user/Profile.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'user-information',
  components: {
    Profile
  }
})

export default class UserInformation extends Vue {}
</script>

<style lang="scss" scoped>
#user-information {
}
</style>

