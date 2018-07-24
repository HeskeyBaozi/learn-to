<template>
  <div>
    <div id='topInfo'>
      <div id="background"></div>
      <div class="profilePhoto">
        <img id="photo"/>
      </div>
      <div class="simpleInfo">
        <span id="student">{{student}}</span>
        <el-button type="text" id="modify">修改密码</el-button>
        <span id="mail">{{email}}</span>
      </div>
    </div>
    <el-container id="user-information">
      <el-main>
        <profile></profile>
        <div id="inline"></div>
        <presentation></presentation>
      </el-main>
    </el-container>

  </div>
</template>

<script lang="ts">
import Presentation from '@/components/user/Presentation.vue';
import Profile from '@/components/user/Profile.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'user-information',
  components: {
    Profile,
    Presentation
  }
})

export default class UserInformation extends Vue {
  student = '贾同学';
  email = 'moutongxue@matrix';
}
</script>

<style lang="scss" scoped>
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
    margin-left: 330px;
    margin-top: -80px;
  }

  #student{
    position: relative;
  }

  #modify{
    position: relative;
    padding-left: 10px;
  }

  #mail{
    position: relative;
    display: block;
  }

  #background{
    position: absolute;
    margin-top: -20px;
    margin-left: -20px;
    width: calc(100% - 202px);
    height: 220px;
  }

</style>

