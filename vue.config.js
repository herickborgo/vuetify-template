module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'url_api',
        changeOrigin: true,
      }
    }
  }
};
