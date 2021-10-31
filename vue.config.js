module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,

  devServer: {
    port: 8080,
    host: '0.0.0.0',
    https: false,
    open: true,

    proxy: {
      '/mcs': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/mcs': ''
        }
      },
    }
  },
}