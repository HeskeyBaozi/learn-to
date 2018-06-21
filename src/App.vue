<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <top-nav></top-nav>
      </el-header>
      <el-main class="main">
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
import { RootStore } from '@/stores';
import { IState, ITodo } from '@/stores/modules/example';
import { FETCH_TODO_LIST, FINISHED_LIST } from '@/stores/modules/example';
import TopNav from '@/views/global/TopNav.vue';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const moduled = namespace('todos');

@Component({
  name: 'app',
  components: {
    TopNav
  }
})
export default class App extends Vue {
  // 获取状态
  get todos() {
    return (this.$store as RootStore).state.todos.todos;
  }

  get finishedTodos(): ITodo[] {
    return (this.$store as RootStore).getters[`todos/${FINISHED_LIST}`];
  }

  // 获取状态 第二种写法
  @moduled.State((state: IState) => state.todos)
  todos2!: ITodo[];

  @moduled.Getter(FINISHED_LIST) finishedTodos2!: ITodo[]; // 感叹号代表赋值断言，此值不为空

  // 发送Action
  @moduled.Action(FETCH_TODO_LIST) fetchTodos!: (payload: any) => Promise<void>;

  async mounted() {

    // 也是发送Action的写法
    await this.$store.dispatch(
      `todos/${FETCH_TODO_LIST}`,
      { page: 1 } /* payload */
    );

    await this.fetchTodos('example_payload');
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
    box-shadow: $--box-shadow-base;
    z-index: $--index-normal;
  }

  .main {
    background-color: $--background-color-base;
  }
}
</style>

