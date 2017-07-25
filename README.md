# online-judge-fe

> matrix online judge system (front end)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# mock json server at localhost:3000
npm run mock

# devserver and mock server
npm run mock-dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 開發指南

考慮到需求的不明確，不建議採用 BDD 行爲測試驅動開發，使用 TDD 測試驅動開發，具體步驟如下:
> 以下測試均指單元測試，不考慮 e2e 用戶行爲測試

#### TDD 測試驅動開發

- 步骤1 - 考虑要编写的代码模块。
- 步骤2 - 写一个测试
- 步骤3 - 运行测试。
  > 测试失败，因为代码仍然没有写。因此，步骤2通常被称为写入测试失败。
- 步骤4 - 编写可通过测试的最小代码。
- 步骤5 - 运行所有测试以确保它们都通过。单元测试是自动化的，以促进此步骤。
- 步骤6 - 重构。
- 步骤7 - 对下一个代码模块重复步骤1到步骤6。

#### 注意事項

第二期迭代過後大家的開發時間減少了，因此在缺少交流的情況下請大家嚴格堅守開發注意事項

- 請不要隨意改動配置文件，需要引入一些庫文件的時候請告知其他開發者.
- 採用 TDD 測試驅動開發，請各位優先編寫測試文件並進行相關注釋. (一定要使用 @author 標明編寫函數、模塊、文件的人)
- 爲了防止衝突，請各位完成需求的同時也必須對 readme prd 相關模塊或者功能進行標注 

  > 例如： 甲同學開始編寫首頁，對 prd 中的 首頁進行標注: [ ] 首頁 --- doing, 甲同學  
  >       甲同學完成後，修改爲: [x] 首頁 --- done, 甲同學  

- 請使用 feature 分支標明特性，hotfix 分支標明修復，並且 提出 mr 的時候一定要 assign leader (否則他根本不知道你提了 mr)
- 每次提 mr 之前需要 pull 一下解決衝突.

## Matrix OJ PRD v0.1

- [ ] 首页
  - [ ] 導航 --- doing 鄧廷禮
  - [ ] 公告栏
      - [ ] test
  - [ ] 全站数据统计
      - [ ] test
  - [ ] 注册登录
      - [ ] 未登录状态：显示登录注册按钮
      - [ ] 登录状态：右上角显示头像，点击进入个人中心，hover 可登出
      - [ ] 注册
          - [ ] **迁移 Matrix 用户**: 系统不自动帮用户绑定，由用户自行绑定
          - [ ] 邀请码注册
          - [ ] 开放注册
      - [ ] 登录
          - [ ] 弹框登录
          - [ ] 验证码
          - [ ] 忘记密码
  - [ ] 题目搜索框
      - [ ] 按照ID、名称、标签搜索

- [ ] 问题
  - [ ] 题目列表: 用表格展示，提供排序功能。默认以ID排序
      - [ ] 题目名字，ID
      - [ ] **题目标签**: 题目初始化时分配标签, 一道题可以有多个标签, 但是标签只有一级
      - [ ] 通过率（通过次数 ÷ 提交次数）
  - [ ] 题目描述界面
      - [ ] 一个页面展示完题目的所有信息，分容器放置不同板块。页面右侧提供定位功能❓
      - [ ] 题目描述
      - [ ] 代码编写: 分不同文件, 提供多语言选择, 自动保存代码
      - [ ] 提交记录表格
      - [ ] 通过状态
      - [ ] 分数
      - [ ] 错误原因, 评测报告（参考wCourse ）
      - [ ] 题目排名表格
          - [ ] 名次序列
          - [ ] 用户昵称
          - [ ] 通过状态
      - [ ] 题目讨论
      - [ ] 按照热度（评论数+回复数）排序

- [ ] 状态
  - [ ] 状态列表: 用表格展示，只能按照提交时间排序
      - [ ] 提交的ID
      - [ ] 用户ID
      - [ ] 题目ID
      - [ ] 状态
      - [ ] 提交时间
  - [ ] 提供搜索功能
      - [ ] 搜索题目ID
      - [ ] 搜索用户ID
      - [ ] 选择某一状态

- [ ] 排名
  - [ ] 排名列表: 用表格展示，提供排序功能（按照AC数、提交数、AC率排序），默认按照AC数排序
      - [ ] 排名序号
      - [ ] 用户ID
      - [ ] 昵称
      - [ ] AC数
      - [ ] 提交数
      - [ ] AC率（AC数/提交数

- [ ] 比赛

- [ ] 个人主页
  - [ ] 个人信息查看
      - [ ] **普通信息**
          - [ ] 昵称
          - [ ] 注册时间
          - [ ] 简介
          - [ ] 邮箱
          - [ ] 个人网站
      - [ ] 学校/学院信息
          - [ ] 学校
          - [ ] 学院
          - [ ] 年级
          - [ ] 专业
      - [ ] 队伍信息
          - [ ] 队伍个数
          - [ ] 队伍名字
          - [ ] 队伍参赛与获奖记录
  - [ ] 个人信息更改
      - [ ] **昵称**
      - [ ] **密码**
          - [ ] 旧密码
          - [ ] 新密码
          - [ ] 确认密码
  - [ ] 个人收藏夹
      - [ ] 收藏的题目（链接）
      - [ ] 收藏的比赛
  - [ ] 个人数据统计
