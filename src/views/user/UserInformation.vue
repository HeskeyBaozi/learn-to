<template>
  <el-container id="user-infomation">
    <div class="header">
      <div class="background"></div>
      <div class="container">
        <el-row class="inner">
          <div class="profilePhoto">
            <img id="photo" src="@/assets/test.jpg"/>
          </div>
          <el-col :span="12" class="simpleInfo">
            <span>{{ user.username }}</span>
            <el-button type="text" class="modify-btn" @click="showModify">修改密码</el-button>
              <el-dialog :visible.sync="isDialogVisible" width="400px" :show-close="false" center>
                <modify-password></modify-password>
              </el-dialog>
            <span id="mail">{{ user.email }}</span>
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
import { IUserProfile } from '@/typings/user.ts';
import { httpRequest } from '@/utils/httpRequest';
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
  user: IUserProfile = {
    user_Id: 0,
    username: '贾同学',
    realname: null,
    description: null,
    email: 'moutongxue@matrix',
    phone_number: null,
    major: null,
    website: null
  };
  isDialogVisible = false;

  async mounted() {
    try {
      const res = await httpRequest.get('users/profile');
      // mock data
      this.user = res.data;
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log(err.data);
    }
  }

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
