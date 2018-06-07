const merge = require("webpack-merge");
const fs = require("fs");

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
    config.resolve.alias.set(
      "@fortawesome/fontawesome-free-regular$",
      "@fortawesome/fontawesome-free-regular/shakable.es.js"
    );
    config.resolve.alias.set(
      "@fortawesome/fontawesome-free-solid$",
      "@fortawesome/fontawesome-free-solid/shakable.es.js"
    );
    config.resolve.alias.set(
      "@fortawesome/fontawesome-free-brands$",
      "@fortawesome/fontawesome-free-brands/shakable.es.js"
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
    proxy: null
  }
};
