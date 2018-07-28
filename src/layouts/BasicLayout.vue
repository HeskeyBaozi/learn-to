<template>
  <el-container id="basic-layout" :class="basicLayoutClassName">
    <el-aside :width="leftSiderWidth" class="sider">
      <left-sider :isCollapse="isCollapse"></left-sider>
    </el-aside>
    <el-container class="inner-container">
      <el-header class="header">
        <top-nav :isCollapse="isCollapse" @toggle-collapse="toggleCollapse"></top-nav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import NavList from '@/components/NavList.vue';
import LoginForm from '@/components/user/LoginForm.vue';
import LeftSider from '@/views/global/LeftSider.vue';
import TopNav from '@/views/global/TopNav.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'basic-layout',
  components: {
    LeftSider,
    TopNav
  }
})
export default class BasicLayout extends Vue {
  isCollapse = true;

  get leftSiderWidth() {
    return this.isCollapse ? '64px' : '240px';
  }

  get basicLayoutClassName() {
    return {
      ['is-collapse']: this.isCollapse
    };
  }

  toggleCollapse() {
    // tslint:disable-next-line:no-console
    console.log('hello');
    this.isCollapse = !this.isCollapse;
  }
}
</script>

<style lang="less" scoped>
#basic-layout {
  .sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: @index-top + 1;
    box-shadow: @box-shadow-base;
    transition: all 0.3s;
    min-height: 100vh;
    background-color: @color-white;
  }

  .inner-container {
    padding-top: @header-height;
    padding-left: @aside-width;
    transition: all 0.3s;
    .header {
      position: fixed;
      top: 0;
      right: 0;
      left: @aside-width;
      padding: 0; // override element-ui default padding.
      z-index: @index-top;
      box-shadow: @box-shadow-base;
      transition: all 0.3s;
      overflow: hidden;
      background-color: @color-primary;
      color: @color-white;
    }
  }
}

.is-collapse {
  .inner-container {
    padding-left: @aside-collapse-width !important;
    .header {
      left: @aside-collapse-width !important;
    }
  }
}
</style>

