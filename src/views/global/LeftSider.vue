<template>
  <el-container id="left-sider" :class="leftSiderClassName">
    <router-link class="logo-wrapper" :to="{ name: 'home' }">
      <img v-show="!isCollapse" src="http://via.placeholder.com/240x60" alt="matrix-logo">
      <img v-show="isCollapse" src="http://via.placeholder.com/64x60" alt="matrix-logo">
    </router-link>
    <div class="user-information">
      <div class="avatar-wrapper">
        <div @click="jumpToUser">
          <img class="avatar" src="http://via.placeholder.com/80x80" alt="avatar">
        </div>
      </div>
      <transition name="el-fade-in">
        <div v-show="!isCollapse" class="user-meta">
          <div class="user-name">游小客</div>
          <div class="user-role">游客</div>
        </div>
      </transition>
    </div>
    <el-menu :router="true" @select="handleMenuClick">

      <el-menu-item index="/" title="首页">
        <fa-icon class="el-icon-" icon="home"></fa-icon>
        <transition name="el-fade-in">
          <span v-show="!isCollapse">首页</span>
        </transition>
      </el-menu-item>

      <el-menu-item index="/problems" title="题库">
        <fa-icon class="el-icon-" icon="clipboard-list"></fa-icon>
        <transition name="el-fade-in">
          <span v-show="!isCollapse">题库</span>
        </transition>
      </el-menu-item>

      <el-menu-item index="/statistic" title="统计">
        <fa-icon class="el-icon-" icon="chart-bar"></fa-icon>
        <transition name="el-fade-in">
          <span v-show="!isCollapse">统计</span>
        </transition>
      </el-menu-item>

    </el-menu>
  </el-container>
</template>

<script lang="ts">
import store from '@/stores';
import { IS_LOGIN } from '@/stores/modules/authorization/contants';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'left-sider'
})
export default class TopNav extends Vue {
  @Prop({
    type: Boolean,
    required: true
  })
  isCollapse!: boolean;

  get isLogin(): boolean {
    return store.getters[`authorization/${IS_LOGIN}`];
  }

  get leftSiderClassName() {
    return {
      ['is-collapse']: this.isCollapse
    };
  }

  handleMenuClick(index: string) {
    if (index === '/statistic' && !this.isLogin) {
      this.$emit('select', 'login');
    }
  }

  jumpToUser() {
    if (!this.isLogin) {
      this.$emit('select', 'login');
    } else {
      this.$router.push({ path: '/user'});
    }
  }
}
</script>

<style lang="less" scoped>
#left-sider {
  flex-flow: column nowrap;

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: @header-height;
    background-color: @color-primary;
  }

  .user-information {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 15rem;
    transition: all 0.3s;

    .avatar-wrapper {
      .avatar {
        transition: all 0.3s;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        box-shadow: @box-shadow-base;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .user-meta {
      position: absolute;
      bottom: 0;
      text-align: center;
      padding: .5rem 0;
      .user-name {
        font-size: @font-size-small-title;
        margin-bottom: 0.5rem;
      }

      .user-role {
        color: @color-text-secondary;
      }
    }
  }

  .el-menu {
    border-right: none; // override element-ui default style.
  }

  .el-menu-item {
    font-size: @font-size-small-title;
    color: @color-text-secondary;
  }
}

.is-collapse {
  .user-information {
    height: 6rem !important;
    .avatar-wrapper {
      .avatar {
        width: 40px !important;
        height: 40px !important;
      }
    }
  }
}
</style>

