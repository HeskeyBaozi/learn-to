<template>
  <div>
    <div id='topInfo'>
      <div id="background">
        <img id="backgroundImg" src="https://img-blog.csdn.net/20180725194648700?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0VtaWx5Qmx1c2U=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70">
      </div>
      <div class="profilePhoto">
        <img id="photo"/>
      </div>
      <div class="simpleInfo">
        <span id="student">{{student}}</span>
        <el-button type="text" id="modify" @click="showModify">修改密码</el-button>
        <ModifyPassword :dialogVisible="dialogVisible" @hideDialog="hideDialog"></ModifyPassword>
        <span id="mail">{{email}}</span>
      </div>
    </div>
    <el-container id="user-information">
      <el-main>
        <user-profile></user-profile>
        <div id="inline"></div>
        <user-presentation></user-presentation>
      </el-main>
    </el-container>

  </div>
</template>

<script lang="ts">
import ModifyPassword from '@/components/user/ModifyPassword.vue';
import UserPresentation from '@/components/user/UserPresentation.vue';
import UserProfile from '@/components/user/UserProfile.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'user-information',
  components: {
    ModifyPassword,
    UserProfile,
    UserPresentation
  }
})

export default class UserInformation extends Vue {
  student = '贾同学';
  email = 'moutongxue@matrix';
  dialogVisible = false;
  showModify() {
    this.dialogVisible = true;
  }
  hideDialog() {
    this.dialogVisible = false;
  }
}
</script>

<style lang="less" scoped>
@import url("//unpkg.com/element-ui@2.4.4/lib/theme-chalk/index.css");

  #inline{
    position: relative;
    height: 32px;
  }

  .profilePhoto{
    position: relative;
    width: 200px;
    height: 200px;
    border: solid 1px #333;
    border-radius: 50%;
    margin-left: 10%;
    background-color: aliceblue;
  }

  .simpleInfo{
    position: absolute;
    margin-left: 23.6rem;
    margin-top: -5.1rem;
  }

  #student{
    position: relative;
  }

  #modify{
    position: relative;
    padding-left: 0.8rem;
  }

  #mail{
    position: relative;
    display: block;
  }

  #background{
    width: 84%;
    height: 14rem;
    position: absolute;
    margin-top: -1.5rem;
    margin-left: -1.5rem;
    clip-path: polygon(100% 0%, 50% 50%, 0% 100%, 0% 0%);
  }
</style>

