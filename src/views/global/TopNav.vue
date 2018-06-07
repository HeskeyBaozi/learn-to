<template>
  <el-container id="top-nav">
    <div class="logo-wrapper" @click="backToHome">
      MOJ Logo
    </div>
    <el-menu id="menu" mode="horizontal" :default-active="$route.path" :router="true">
      <el-menu-item index="/problems">
        <fa-icon :icon="['far', 'list-alt']"></fa-icon>
        <span class="menu-item-text">题库</span>
      </el-menu-item>
      <el-menu-item index="/ranks">
        <fa-icon icon="signal"></fa-icon>
        <span class="menu-item-text">排名</span>
      </el-menu-item>
    </el-menu>
  </el-container>
</template>

<script lang="ts">
import { format } from '@/utils/format';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'top-nav'
})
export default class TopNav extends Vue {
  @Prop() private msg!: string;

  backToHome() {
    this.$router.push('/');
  }
}
</script>

<style lang="scss" scoped>
#top-nav {
  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    cursor: pointer;
  }

  #menu {
    .menu-item-text {
      margin-left: 0.5rem;
    }
  }
}
</style>

