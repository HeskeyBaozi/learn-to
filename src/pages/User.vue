<template lang="pug">
.matrix-oj-user
  .container-fluid
    .row
      .col-md-2.user-info
        .user-photo
          img(src='../assets/logo.png')
        p.user-name {{ name }}
        p.user-college {{ college }}
        .user-intro
          i.fa.fa-pencil-square-o
          span {{ intro }}
    .row
      .col-md-4.user-nav
        b-nav.row.user-nav-content
          b-nav-item(:class = '{ activeBottom: selectItem[0]}' @click = "selectTab($event)") 动态
          b-nav-item(:class = '{ activeBottom: selectItem[1]}' @click = "selectTab($event)") 统计
          b-nav-item(:class = '{ activeBottom: selectItem[2]}' @click = "selectTab($event)") 资料
          b-nav-item(:class = '{ activeBottom: selectItem[3]}' @click = "selectTab($event)") 收藏
    .row
      .col-md-10.info-content(v-if = 'selectItem[0]')
        .row
          .finishing.general-box
            .trend-title
              span.left-item ● 最近完成的题目
              span.right-item more >
            hr
            .trend-list
              .list-item(v-for = 'item in problemList')
                span.left-item-content {{ item.name }}
                span.right-item-content {{ item.time }}
          .competiton.general-box
            .trend-title
              span.left-item ● 最近参加的比赛
              span.right-item more >
            hr
            .trend-list
              .list-item(v-for = 'item in competitonList')
                span.left-item-content {{ item.name }}
                span.right-item-content {{ item.time }}
      .col-md-10.info-content(v-if = 'selectItem[1]') 2
      .col-md-10.info-content(v-if = 'selectItem[2]')
        .data-content
          span 用户资料
          button.btn.btn-primary.button-style(@click = 'isEdit = !isEdit' v-if = '!isEdit') 编辑个人资料
          button.btn.btn-primary.button-style(@click = 'isEdit = !isEdit' v-if = 'isEdit') 保存个人资料
          hr
        .row(v-if = '!isEdit')
          .col-md-5.one-data-item
            .row
              .col-md-2.data-info-left.data-info-left-show 昵称
              .col-md-7.data-info-right {{ userDetailInfo.nickname }}
            .row
              .col-md-2.data-info-left.data-info-left-show 性别
              .col-md-7.data-info-right {{ userDetailInfo.gender }}
            .row
              .col-md-2.data-info-left.data-info-left-show 个人邮箱
              .col-md-7.data-info-right {{ userDetailInfo.email }}
            .row
              .col-md-2.data-info-left.data-info-left-show 个人简介
              .col-md-7.data-info-right {{ userDetailInfo.intro }}

          .col-md-5.another-data-item
            .row
              .col-md-2.data-info-left.data-info-left-show 教育经历
              .col-md-7.data-info-right {{ userDetailInfo.education }}
            .row
              .col-md-2.data-info-left.data-info-left-show 所属队伍
              .col-md-7.data-info-right {{ userDetailInfo.team }}
            .row
              .col-md-2.data-info-left.data-info-left-show 个人网站
              .col-md-7.data-info-right {{ userDetailInfo.site }}
            .row
              .col-md-2.data-info-left.data-info-left-show 注册时间
              .col-md-7.data-info-right {{ userDetailInfo.registTime }}
        .row(v-if = 'isEdit')
          .col-md-5.one-data-item
            .row
              .col-md-2.data-info-left 昵称
              .col-md-7.data-info-right
                .form-group
                  input.form-control(:class = '{errorInput: nicknameValid}', @blur = 'isNicknameValid()', v-model = 'nickname', placeholder = '不超过6个汉字或12个字符')
                //- b-form-input.has-warning(v-model = 'nickname', placeholder = '不超过6个汉字或12个字符')
            .row
              .col-md-2.data-info-left 性别
              .col-md-7.data-info-right
                b-form-radio.radio-style(v-model = 'selected', :options = 'options')
            .row
              .col-md-2.data-info-left 个人邮箱
              .col-md-7.data-info-right
                .form-group
                  input.form-control(:class = '{errorInput: emailValid}', @blur = 'isEmailValid()', v-model = 'email', placeholder = '不超过32个字符')
            .row
              .col-md-2.data-info-left 个人简介
              .col-md-7.data-info-right
                textarea.textarea-style.form-control(:class = '{errorInput: introValid}', @blur = 'isIntroValid()', v-model = 'introduction', row = 5, placeholder = '不超过40个汉字或80个字符')

          .col-md-5.another-data-item
            .row
              .col-md-2.data-info-left 教育经历
              .col-md-7.data-info-right
                input.form-control.input-school(v-model = 'school', placeholder = '学校名')
                input.form-control.input-major(v-model = 'major', placeholder = '专业方向')
            .row
              .col-md-2.data-info-left 所属队伍
              .col-md-7.data-info-right 呼啦啦
            .row
              .col-md-2.data-info-left 个人网站
              .col-md-7.data-info-right 无
            .row
              .col-md-2.data-info-left 注册时间
              .col-md-7.data-info-right 2017年7月20日
      .col-md-10.info-content(v-if = 'selectItem[3]') 4

</template>
<script>
export default {
  data: function () {
    return {
      name: '',
      college: '',
      intro: '',

      problemList: [],
      competitonList: [],

      userDetailInfo: {},

      selectItem: [true, false, false, false],
      isEdit: false,
      // 修改用户信息
      nickname: '',
      nicknameValid: false,
      email: '',
      emailValid: false,
      introduction: '',
      introValid: false,
      school: '',
      major: '',
      // radio
      selected: 'first',
      options: [{
        text: '男',
        value: 'first'
      }, {
        text: '女',
        value: 'second'
      }]
    }
  },
  methods: {
    selectTab: function (event) {
      this.selectItem = this.selectItem.map(() => {
        return false;
      })
      switch (event.target.text) {
        case '动态':
          this.selectItem[0] = true;
          break;
        case '统计':
          this.selectItem[1] = true;
          break;
        case '资料':
          this.selectItem[2] = true;
          break;
        case '收藏':
          this.selectItem[3] = true;
          break;
      }
    },
    isNicknameValid: function () {
      if (/^[\u4e00-\u9fa5]{1,6}$|^[\dA-Za-z_]{1,12}$/.test(this.nickname)) {
        this.nicknameValid = false;
      } else {
        this.nicknameValid = true;
      }
    },
    isEmailValid: function () {
      if (/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,32}$/.test(this.email)) {
        this.emailValid = false;
      } else {
        this.emailValid = true;
      }
    },
    isIntroValid: function () {
      if (/^[\u4e00-\u9fa5]{1,40}$|^[\dA-Za-z_]{1,80}$/.test(this.introduction)) {
        this.introValid = false;
      } else {
        this.introValid = true;
      }
    },
    getUserInfo: function () {
      let item = {
        name: '林七月',
        college: '中山大学,传播与设计学院',
        intro: '暂无介绍'
      };
      return new Promise(function (resolve, reject) {
        resolve(item);
      });
    },
    getFinishedProblem: function () {
      let list = [{
        name: '一个比赛的名称',
        time: '23：54 ， 2017/07/25'
      }, {
        name: '一个比赛的名称',
        time: '23：54 ， 2017/07/25'
      }];
      return new Promise(function (resolve, reject) {
        resolve(list);
      });
    },
    getCompetition: function () {
      let list = [{
        name: '一个比赛的名称',
        time: '23：54 ， 2017/07/25'
      }, {
        name: '一个比赛的名称',
        time: '23：54 ， 2017/07/25'
      }];
      return new Promise(function (resolve, reject) {
        resolve(list);
      });
    },
    getUserInfoDetail: function () {
      let item = {
        nickname: '实例实例',
        gender: 'Male',
        email: '123456789@qq.com',
        intro: '一二三四五六七一二三四五六七一二三四五六七',
        education: '中山大学（SYSU） 软件工程',
        team: '呼啦啦',
        site: '无',
        registTime: '2017年7月20日'
      };
      return new Promise(function (resolve, reject) {
        resolve(item);
      });
    },
    initialData: function () {
      this.getUserInfo().then((item) => {
        this.name = item.name;
        this.college = item.college;
        this.intro = item.intro;
      });
      this.getFinishedProblem().then((list) => {
        this.problemList = list;
      });
      this.getCompetition().then((list) => {
        this.competitonList = list;
      });
      this.getUserInfoDetail().then((item) => {
        this.userDetailInfo = item;
      });
    }
  },
  beforeMount: function () {
    this.initialData();
  }
}
</script>

<style lang="stylus">
.user-info
  margin-top 3%
  margin-left auto
  margin-right auto
  margin-bottom 1%
.user-photo
  img
    border-radius 50%
    border 3px solid #548dcc
    max-width 100%
    display block
    width 89px
    height 89px
    margin auto
.user-name
  text-align center
  font-weight bold
  font-size 20px
  color #548dcc
  margin-top 6%
  margin-bottom 4%
.user-college
  font-size 12px
  color #989898
  text-align center
.user-intro
  margin auto
  text-align center
  span
    font-size 12px
    padding-left 2px
.user-nav
  margin auto
  border 1px dashed #eeeeee
  text-align center
  height 49px
.user-nav-content
  position relative
  height 49px
  padding-top 1%
  li
    font-size 16px
    font-weight bold
    padding 0
    width 13%
    margin-left 6%
    margin-right 6%
    &:hover
      border-bottom-color #548dcc
      border-bottom-width 5px
      border-bottom-style solid
  a
    padding-top 15%
    padding-left 0
    padding-right 0
.activeBottom
  border-bottom-color #548dcc
  border-bottom-width 5px
  border-bottom-style solid
.info-content
  //- border 2px solid blue
  margin-top 2%
  margin-left auto
  margin-right auto
.finishing
  margin-right 2%
.general-box
  height 100%
  width 49%
  height 300px
  box-shadow 0px 0px 5px 1px rgba(152, 152, 152, 0.27)
  hr
    margin-bottom 0
    width 96%
.trend-title
  color #548dcc
  font-weight bold
  font-size 14px
  margin-top 3%
  position relative
  height 5%
  .right-item
    &:hover
      cursor pointer
.left-item
  float left
  margin-left 7%
.right-item
  float right
  margin-right 8%
.left-item-content
  float left
  margin-left 3%
.right-item-content
  float right
  margin-right 4%
.trend-list
  width 91%
  height 100%
  font-size 13px
  color #989898
  margin auto
.list-item
  position relative
  display block
  height 8%
  margin-top 5%
  border-bottom-color #eeeeee
  border-bottom-width 1px
  border-bottom-style dashed
.data-content
  width 100%
.one-data-item
  margin-right 13%
  height 300px
  margin-left 3%
.another-data-item
  height 300px
.button-style
  float right
  margin-top -0.6%
.data-info-left
  text-align right
  font-size 15px
  line-height 400%
.data-info-left-show
  color #548dcc
.data-info-right
  margin-left 20px
  font-size 15px
  line-height 400%
  input
    margin-top 3%
    position absolute
.errorInput
  border-color red
.radio-style
  position absolute
  margin-top 1%
.textarea-style
  margin-top 5%
  width 109%
  height 120%
.input-school
  width 50%
.input-major
  width 50%
  margin-left 60%

</style>
