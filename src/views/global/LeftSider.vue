<template>
  <el-container id="left-sider" :class="leftSiderClassName">
    <router-link class="logo-wrapper" :to="{ name: 'home' }">
      <img v-show="!isCollapse" src="http://via.placeholder.com/240x60" alt="matrix-logo">
      <img v-show="isCollapse" src="http://via.placeholder.com/64x60" alt="matrix-logo">
    </router-link>
    <div class="user-information">
      <div class="avatar-wrapper">
        <div @click="onClickUserAvatar">
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
    <el-menu>
      <authorized-view v-for="item of menu" :key="item.key" :authorities="item.authorities">
        <el-menu-item :key="item.key" :index="item.key" :title="item.name" @click="item.onClick">
          <fa-icon class="el-icon-" :icon="item.icon"></fa-icon>
          <transition name="el-fade-in">
            <span v-show="!isCollapse">{{ item.name }}</span>
          </transition>
        </el-menu-item>
      </authorized-view>
    </el-menu>
  </el-container>
</template>

<script lang="ts">
import store from '@/stores';
import { IS_LOGIN } from '@/stores/modules/authorization/contants';
import {
  IS_COLLAPSE,
  MODIFY_IS_LOGIN_DIALOG_VISIBLE
} from '@/stores/modules/layout/contants';
import { LayoutMenuDataItem } from '@/typings/layout';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'left-sider'
})
export default class TopNav extends Vue {
  get isCollapse(): boolean {
    return this.$store.getters[`layout/${IS_COLLAPSE}`];
  }

  get isLogin(): boolean {
    return store.getters[`authorization/${IS_LOGIN}`];
  }

  get menu(): LayoutMenuDataItem[] {
    return [
      {
        name: '首页',
        icon: 'home',
        key: 'home',
        onClick: () => {
          this.$router.push({ name: 'home' });
        }
      },
      {
        name: '题库',
        icon: 'clipboard-list',
        key: 'problems',
        onClick: () => {
          this.$router.push({ name: 'problems' });
        }
      },
      {
        name: '统计',
        icon: 'chart-bar',
        key: 'statistic',
        authorities: ['user', 'admin'],
        onClick: () => {
          this.$router.push({ name: 'statistic' });
        }
      }
    ];
  }

  get leftSiderClassName() {
    return {
      ['is-collapse']: this.isCollapse
    };
  }

  onClickUserAvatar() {
    if (!this.isLogin) {
      this.$store.commit(`layout/${MODIFY_IS_LOGIN_DIALOG_VISIBLE}`, {
        isLoginDialogVisible: true
      });
    } else {
      this.$router.push({ name: 'information' });
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
      padding: 0.5rem 0;
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

