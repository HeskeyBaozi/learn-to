<template>
  <div id="app">
    <el-container>
      <el-header class="header" height="60px">
        <top-nav></top-nav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div>
          Footer
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { RootStore } from '@/store';
import { ITodo } from '@/stores/example';
import { FETCH_TODO_LIST, FINISHED_LIST } from '@/stores/example';
import TopNav from '@/views/global/TopNav.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'app',
  components: {
    TopNav
  }
})
export default class App extends Vue {
  get todos() {
    return (this.$store as RootStore).state.todos.todos;
  }

  get finishedTodos(): ITodo[] {
    return (this.$store as RootStore).getters[`todos/${FINISHED_LIST}`];
  }

  async mounted() {
    await this.$store.dispatch(
      `todos/${FETCH_TODO_LIST}`,
      { page: 1 } /* payload */
    );
    // tslint:disable-next-line:no-console
    console.log(this.todos);
  }
}
</script>

<style src="normalize.css"></style>

<style lang="scss">
// 全局引入ElementUI样式 请勿删除
$--font-path: "~element-ui/lib/theme-chalk/fonts";
@import "~element-ui/packages/theme-chalk/src/index";
</style>

<style lang="scss">
// 其他全局样式设定写在这里
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>

<style lang="scss" scoped>
#app {
  .header {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }
}
</style>

