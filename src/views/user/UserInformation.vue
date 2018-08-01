<template>
  <div>
    <div id='topInfo'>
      <div id="background"></div>
      <div class="profilePhoto">
        <img id="photo" src="@/assets/test.jpg"/>
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
  #inline{
    position: relative;
    height: 32px;
  }

  .profilePhoto{
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-left: 10%;
  }

  #photo{
    border-radius: 50% 50% 50% 50%;
    width: 200px;
    height: 200px;
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
    width: calc(100% - 17rem);
    height: 14rem;
    position: absolute;
    margin-top: -1.5rem;
    margin-left: -1.5rem;
    clip-path: polygon(100% 0%, 100% 20%, 0% 100%, 0% 0%);
    background-image: url('../../assets/u367.png');
    background-size: cover;
  }
</style>

