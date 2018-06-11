# Online Judge FE

## 开发环境搭建

安装`Node.js`、`yarn`、`vscode`、`python 2.7`。

`Node.js`：https://nodejs.org/en/ 安装`LTS`版本即可。

`yarn`：https://yarn.bootcss.com/docs/install.html

`vscode`：https://code.visualstudio.com/ 请注意安装相关`Vetur`、`TSLint`、`TSLint Vue`、`EditorConfig for VS Code
`四个插件

`python 2.7`：https://www.python.org/ 用于解决安装`node-sass`失败问题

### 项目命令

```bash
yarn install # 安装依赖

yarn run serve # 启用开发环境

yarn start # 等同于 yarn run serve

yarn run build # 构建项目

yarn run lint # 代码风格检查

yarn run test:unit # 单元测试
```
特别注意构建的时候推荐使用`vue-cli UI`构建。首先安装`vue-cli`，运行命令`yarn global add @vue/cli`，然后再当前项目目录下运行`vue ui`。

在UI界面中构建，可以可视化依赖相关情况。[预览界面](./docs/images/build.jpg)

### 知识点

- `Vue`组件类式写法：https://github.com/vuejs/vue-class-component 了解对象式写法到类式写法的转换，计算属性，方法，生命周期的转换。官方文档的解释：https://cn.vuejs.org/v2/guide/typescript.html#Class-%E9%A3%8E%E6%A0%BC%E7%9A%84-Vue-%E7%BB%84%E4%BB%B6
- `Vue`属性装饰器：https://github.com/kaorun343/vue-property-decorator 了解`@Prop(...)`，知道写法即可。有余力可以了解什么是类型反射（type reflect）？
    该库的`@Prop(...)`原理为[此行](https://github.com/kaorun343/vue-property-decorator/blob/19136ea9dcdf31e2d8fa93a0997bb6b1869bf8d8/src/vue-property-decorator.ts#L77)获取到了`Typescript`的标注类型
- `Vuex`的组件类式写法：https://github.com/ktsn/vuex-class 语法糖
- `Typescript`文档：https://www.tslang.cn/docs/handbook/modules.html 了解什么是接口（interface），如何导入模块，模块名中的`@/`是路径语法糖，表示`src/`。如何标注一个函数的类型？接口写法通常在其他静态语言中以字母`I`开头，此命名方式不同人各有所爱
- `Sass`语法：https://www.sass.hk/docs/ 了解嵌套规则、父选择器`&`、变量`$`
- 发起请求通常是在`Vuex Action`中，请求到的数据通过`commit mutation`，将数据和状态（state）“融合”，反应到当前视图（view）中
- 谷歌浏览器可安装`vue-devtool`开发工具：https://github.com/vuejs/vue-devtools

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
