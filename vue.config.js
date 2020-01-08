const path = require('path');

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        actions: path.resolve(__dirname, 'src/store/actions'),
        utils: path.resolve(__dirname, 'src/utils')
      }
    }
  }
};
