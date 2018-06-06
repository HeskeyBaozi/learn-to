# Online Judge FE

## 开发环境搭建

1. 安装`Node.js`、`yarn`、`vscode`、`python 2.7`。

`Node.js`：https://nodejs.org/en/，安装`LTS`版本即可。

`yarn`：https://yarn.bootcss.com/docs/install.html

`vscode`：https://code.visualstudio.com/

`python 2.7`：https://www.python.org/ 用于解决安装`node-sass`失败问题

2. 项目命令

```bash
yarn install # 安装依赖

yarn run serve # 启用开发环境

yarn start # 等同于 yarn run serve

yarn run build # 构建项目

yarn run lint # 代码风格检查

yarn run test:unit # 单元测试
```

## 脚手架配置

详细配置：https://github.com/vuejs/vue-cli/tree/dev/docs/config

### 代理

配置`vue.config.js`中的`devServer.proxy`字段

## 目录结构

- public: 静态文件夹
- src.assets: 内嵌资源文件
- src.components: 组件文件，**不含业务逻辑**
- src.utils: 工具函数，包括常用的日期格式化、请求函数等
- src.views: 视图，以页面维度作为标准，一个页面一个`.vue`文件，包含业务逻辑
- App.vue：路由入口，全局样式引入入口
- global-variables.scss: 全局样式变量，已经全部自动引入，其他组件中直接使用变量即可
- main.ts: 总入口
- registerServiceWorker.ts: PWA控制文件，内置了常用的缓存控制
- router.ts: 总路由配置
- shims-tsx.d.ts | shims-vue.d.ts: `typescript`适配文件
- store.ts: 总状态管理配置
- tests.unit: 单元测试文件夹