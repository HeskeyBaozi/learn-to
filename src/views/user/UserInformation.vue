<template>
  <div>
    <div id='topInfo'>
      <div id="background">
        <img id="backgroundImg" src="https://github.com/EmilyBlues/Unity-learning/blob/master/Images/z3327.jpg">
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
    position: relative;
    margin-left: 22rem;
    top: -5.1rem;
  }

  #user-information{
    margin-top: -2.5rem;
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
    width: calc(100% - 17.2rem);
    height: 14rem;
    position: absolute;
    margin-top: -1.5rem;
    margin-left: -1.5rem;
    border: solid 1px black;
    clip-path: polygon(100% 0%, 100% 20%, 0% 100%, 0% 0%);
  }
</style>

