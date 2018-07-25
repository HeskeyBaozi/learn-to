<template>
  <el-container id="top-nav">
    <div class="logo-wrapper" @click="backToHome">
      MOJ Logo
    </div>
    <div class="menu">
      <el-menu
        mode="horizontal"
        background-color="#409EFF"
        text-color="white"
        active-text-color="white"
        @select="showLogin"
      >
        <el-menu-item index="login" >
          <icon-text icon="user-circle" text="登录/注册"/>
        </el-menu-item>
      </el-menu>
    </div>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'top-nav'
})
export default class TopNav extends Vue {
  backToHome() {
    this.$router.push('/');
  }
  showLogin() {
    this.$emit('showDialog');
  }
}
</script>

<style lang="less" scoped>
#top-nav {
  height: 100%;
  justify-content: space-between;

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    cursor: pointer;
  }
}
</style>

