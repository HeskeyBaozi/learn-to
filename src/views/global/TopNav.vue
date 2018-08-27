<template>
  <el-container id="top-nav" :class="topNavClassName">
    <div class="collapse-button" @click="toggleCollapse">
      <fa-icon :icon="['fas', 'indent']"></fa-icon>
    </div>
    <div class="nav">
      <authorized-view v-for="item of menu" :key="item.key" :authorities="item.authorities">
        <div :key="item.key" class="nav-item" @click="item.onClick">
          <icon-text :icon="item.icon" :text="item.name" />
        </div>
      </authorized-view>
    </div>
  </el-container>
</template>

<script lang="ts">
import { LOG_OUT } from '@/stores/modules/authorization/contants';
import {
  IS_COLLAPSE,
  MODIFY_IS_LOGIN_DIALOG_VISIBLE,
  TOGGLE_COLLAPSE
} from '@/stores/modules/layout/contants';
import { LayoutMenuDataItem } from '@/typings/layout';
import { Component, Prop, Vue } from 'vue-property-decorator';

export type ItemNameType = 'login' | 'logout' | 'message';
@Component({
  name: 'top-nav'
})
export default class TopNav extends Vue {
  get menu(): LayoutMenuDataItem[] {
    return [
      {
        name: '消息',
        key: 'message',
        icon: 'envelope',
        authorities: ['user', 'admin'],
        onClick: () => this.$router.push({ name: 'notification' })
      },
      {
        name: '登出',
        key: 'logout',
        icon: 'sign-out-alt',
        authorities: ['user', 'admin'],
        onClick: async () => {
          await this.$store.dispatch(`authorization/${LOG_OUT}`);
        }
      },
      {
        name: '登录',
        key: 'login',
        icon: 'user-circle',
        authorities: ['guest'],
        onClick: () => {
          this.$store.commit(`layout/${MODIFY_IS_LOGIN_DIALOG_VISIBLE}`, {
            isLoginDialogVisible: true
          });
        }
      }
    ];
  }

  get isCollapse(): boolean {
    return this.$store.getters[`layout/${IS_COLLAPSE}`];
  }

  get topNavClassName() {
    return {
      ['is-collapse']: this.isCollapse
    };
  }

  toggleCollapse() {
    this.$store.commit(`layout/${TOGGLE_COLLAPSE}`);
  }
}
</script>

<style lang="less" scoped>
// General style fro navigation block.
// For example: login block, sider block...
.nav-block {
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    background-color: @color-primary-light-2;
  }
}
#top-nav {
  height: 100%;
  justify-content: space-between;
  padding-right: 1rem;

  .collapse-button {
    .nav-block;
    transition: all 0.3s;
    padding: 0 2rem;
    svg {
      transform: rotate(180deg);
    }
  }

  .nav {
    display: flex;
    flex-flow: row nowrap;

    .nav-item {
      .nav-block;
    }
  }
}

.is-collapse {
  .collapse-button {
    svg {
      transform: rotate(0deg) !important;
    }
  }
}
</style>

