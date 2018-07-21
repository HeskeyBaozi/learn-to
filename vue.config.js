const merge = require("webpack-merge");
const fs = require("fs");
const path = require("path");
const apiMocker = require('webpack-api-mocker');

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options =>
        merge(options, {
          getCustomTransformers: () => ({
            before: [
              require("ts-import-plugin")([
                {
                  libraryName: "element-ui",
                  styleLibraryName: "theme-chalk"
                }
              ])
            ]
          })
        })
      );
  },
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync("src/global-variables.scss", "utf-8")
      }
    }
  },
  pwa: {
    name: "matrix-online-judge"
  },
  devServer: {
    proxy: null,
    before(app) {
      apiMocker(app, path.resolve(__dirname, './mock/index.js'));
    }
  }
};
