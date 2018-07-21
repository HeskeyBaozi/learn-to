<template>
  <div id="NavList">
      <img src="@/assets/logo.png" id="user-logo"/>
      <p>{{ role }}</p>
    <ul id="NavList-list">
      <li>
        <el-button>主页</el-button>
      </li>
      <li>
        <el-button>题库</el-button>
      </li>
      <li>
        <el-button>空间</el-button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    role: String
  }
})
</script>
<style lang="scss" scoped>
  #NavList {
    width: 30%
  }
  #user-logo {
    transform: scale(0.5);
    display: block;
    border-radius: 50% 50% 50% 50%
  }
  #NavList-list {
    display: block
  }
</style>
