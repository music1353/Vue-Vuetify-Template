module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:8080',
        // target: 'http://nthu-sdg.tk',
        changeOrigin: true
      }
    }
  },
  lintOnSave: false
}