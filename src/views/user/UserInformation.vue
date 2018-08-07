<template>
  <el-container id="user-infomation">
    <div class="header">
      <div class="background"></div>
      <div class="container">
        <el-row class="inner">
          <div class="profilePhoto">
            <img id="photo" src="@/assets/test.jpg"/>
          </div>
          <el-col span="12" class="simpleInfo">
            <span>{{student}}</span>
            <el-button type="text" class="modify-btn" @click="showModify">修改密码</el-button>
              <el-dialog :visible.sync="isDialogVisible" width="400px" :show-close="false" center>
                <modify-password></modify-password>
              </el-dialog>
            <span id="mail">{{email}}</span>
          </el-col>
        </el-row>
      </div>
    </div>

    <user-profile></user-profile>
    <user-presentation style="margin-top: 2rem;"></user-presentation>
  </el-container>
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
  isDialogVisible = false;

  showModify() {
    this.isDialogVisible = true;
  }
}
</script>

<style lang="less" scoped>
#user-infomation {
  flex-direction: column;

  .header {
    height: 25rem;
    position: relative;
    top: -60px;

    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('../../assets/u367.png');
      background-size: cover;
      transform-origin: 0%;
      transform: skewY(-9deg);
    }

    .container {
      margin-left: auto;
      margin-right: auto;
      height: 100%;
      width: 85%;

      .inner {
        height: 100%;
        display: flex;
        align-items: flex-end;
      }

      .profilePhoto {
        float: left;
        width: 200px;
        height: 200px;

        #photo{
          border-radius: 50%;
          width: 200px;
          height: 200px;
        }
      }

      .simpleInfo{
        margin-left: 1rem;

        #mail{
          display: block;
        }

        .modify-btn {
          padding-left: 0.8rem;
        }
      }
    }
  }
}
</style>
