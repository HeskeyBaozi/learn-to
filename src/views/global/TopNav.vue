<template>
  <el-container id="top-nav" :class="topNavClassName">
    <div class="collapse-button" @click="toggleCollapse">
      <fa-icon :icon="['fas', 'indent']"></fa-icon>
    </div>
    <div class="nav">
      <div v-if="isLogin" class="nav-item" @click="selectItem('message')">
        <icon-text icon="envelope" text="消息" />
      </div>
      <div v-if="isLogin" class="nav-item" @click="selectItem('logout')">
        <icon-text icon="sign-out-alt" text="登出" />
      </div>
      <div v-if="!isLogin" class="nav-item" @click="selectItem('login')">
        <icon-text icon="user-circle" text="登录" />
      </div>
    </div>
  </el-container>
</template>

<script lang="ts">
import store from '@/stores';
import { IS_LOGIN } from '@/stores/modules/authorization/contants';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

export type ItemNameType = 'login' | 'logout' | 'message';

@Component({
  name: 'top-nav'
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

  get topNavClassName() {
    return {
      ['is-collapse']: this.isCollapse
    };
  }

  @Emit('toggle-collapse')
  toggleCollapse() {
    // noop
  }

  @Emit('select')
  selectItem(itemName: ItemNameType) {
    // noop
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
  font-size: @font-size-small-title;

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

