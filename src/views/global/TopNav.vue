<template>
  <el-container id="top-nav" :class="topNavClassName">
    <div class="collapse-button" @click="toggleCollapse">
      <fa-icon :icon="['fas', 'indent']"></fa-icon>
    </div>
    <div class="nav">
      <div class="nav-item">
        <icon-text icon="user-circle" text="登录" />
      </div>
    </div>
  </el-container>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'top-nav'
})
export default class TopNav extends Vue {
  @Prop({
    type: Boolean,
    required: true
  })
  isCollapse!: boolean;

  get topNavClassName() {
    return {
      ['is-collapse']: this.isCollapse
    };
  }

  @Emit('toggle-collapse')
  toggleCollapse() {
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

