<template>
  <el-container id="top-nav">
    <div class="logo-wrapper" @click="backToHome">
      MOJ Logo
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

