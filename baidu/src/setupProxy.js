const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/api1", {
      target: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=",
      pathRewrite: {'^/api1': ''},
      changeOrigin: true,
    })
  ),
  app.use(
    createProxyMiddleware("/api2", {
      target: "https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-20.html",
      pathRewrite: {'^/api2': ''},
      changeOrigin: true,
    })
  ),
  app.use(
    createProxyMiddleware("/api3", {
      target: "https://api.geekzwzs.cn/resou",
      pathRewrite: {'^/api3': ''},
      changeOrigin: true,
    })
  ),
  app.use(
    createProxyMiddleware("/node", {
      target: "http://127.0.0.1:8888",
      pathRewrite: {'^/node': ''},
      changeOrigin: true,
    })
  )
};