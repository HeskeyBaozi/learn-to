# online-judge-fe

> matrix online judge system (front end)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

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
