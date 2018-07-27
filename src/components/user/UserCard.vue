<template>
  <el-container id="user-card">
    <el-card>
      <div class="part">
        <div class="user-avatar">
          <img :src="userProfile.avatar" alt="用户头像">
        </div>
        <div class="title">{{ userProfile.username }}</div>
      </div>
      <div class="part">
        <p class="field">邮箱: {{ userProfile.email }}</p>
        <p class="field">个人网站: {{ userProfile.website }}</p>
        <p class="field">个性签名: {{ userProfile.signature }}</p>
      </div>
    </el-card>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface IProfile {
  avatar: string;
  username: string;
  email: string;
  website: string;
  signature: string;
}

@Component({
  name: 'user-card'
})
export default class UserCard extends Vue {
  @Prop(Object) userProfile!: IProfile;
}
</script>

<style lang="less" scoped>
#user-card {
  .part {
    width: 50%;

    .field {
      font-size: 1.1rem;
      margin: 2rem auto;
    }
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
  }

  .user-avatar {
    margin: 10px auto;
    text-align: center;

    img {
      border-radius: 50%;
      width: 180px;
      height: 180px;
    }
  }
}
</style>

<style lang="less">
#user-card {
  .el-card, .el-card__body{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
}
</style>
