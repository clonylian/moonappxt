const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        "/moon-server": {
          target: "http://43.134.115.222:8080/moon-server/",
          changeOrigin: true,
          ws: true,
          pathRewrite: { "^/moon-server": "" },
        },
      },
    },
  },
});
