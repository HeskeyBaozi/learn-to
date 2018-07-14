# Online Judge FE

## **[更新日志 ChangeLog.md](./ChangeLog.md)**

以后系统更新日志写在此处，较新的更新写在前面

## 开发环境搭建

安装`Node.js`、`yarn`、`vscode`、`python 2.7`、`vue-devtool`。

`Node.js`：https://nodejs.org/en/ 安装`LTS`版本即可。

`yarn`：安装地址：https://yarnpkg.com/zh-Hans/docs/install#windows-stable 如何使用：https://yarnpkg.com/zh-Hans/docs/usage

`vscode`：https://code.visualstudio.com/ 请注意安装相关`Vetur`、`TSLint`、`TSLint Vue`、`EditorConfig for VS Code`四个插件

`python 2.7`：https://www.python.org/downloads/ 用于解决安装`node-sass`失败问题

`vue-devtool`：https://github.com/vuejs/vue-devtools `Chrome`插件，用于`Vuex`数据流可视化开发

## 脚手架配置

脚手架使用指南：https://cli.vuejs.org/guide/

部署：https://cli.vuejs.org/guide/deployment.html#platform-guides

代理：https://cli.vuejs.org/config/#devserver-proxy

## 项目命令

```bash
yarn install # 安装依赖
yarn run serve # 启用开发环境
yarn start # 等同于 yarn run serve
yarn run build # 构建项目
yarn run lint # 代码风格检查
yarn run test:unit # 单元测试
```
强烈推荐使用`vue-cli UI`构建。首先安装`vue-cli`，运行命令`yarn global add @vue/cli`，然后再当前项目目录下运行`vue ui`。

在UI界面中构建，可以可视化依赖相关情况。[预览界面](./docs/images/build.jpg)

## 知识点

- `Vue`组件类式写法：https://github.com/vuejs/vue-class-component 了解对象式写法到类式写法的转换，计算属性，方法，生命周期的转换。[官方文档的解释](https://cn.vuejs.org/v2/guide/typescript.html#Class-%E9%A3%8E%E6%A0%BC%E7%9A%84-Vue-%E7%BB%84%E4%BB%B6)
- `Vue`属性装饰器：https://github.com/kaorun343/vue-property-decorator 了解`@Prop(...)`，知道写法即可。有余力可以了解什么是类型反射（type reflect）？
    该库的`@Prop(...)`原理为[此行](https://github.com/kaorun343/vue-property-decorator/blob/19136ea9dcdf31e2d8fa93a0997bb6b1869bf8d8/src/vue-property-decorator.ts#L77)获取到了`Typescript`的标注类型
- `Vuex`的组件类式写法：https://github.com/ktsn/vuex-class 语法糖
- `Typescript`文档：https://www.tslang.cn/docs/handbook/modules.html 了解什么是接口（interface），如何导入模块，如何标注一个函数的类型？接口写法通常在其他静态语言中以字母`I`开头，此命名方式不同人各有所爱。特别地，在本项目中，模块名中的`@/`是路径语法糖，表示`src/`。
- `Sass`语法：https://www.sass.hk/docs/ 了解嵌套规则、父选择器`&`、变量`$`
- 发起请求通常是在`Vuex Action`中，请求到的数据通过`commit mutation`，将数据和状态（state）“融合”，反应到当前视图（view）中
- 本项目中一个写`Vuex`模块的例子todo：[example.ts](./src/stores/example.ts)
