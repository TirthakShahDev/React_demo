const { createProxyMiddleware } = require('http-proxy-middleware');

const mockServerPort = 9999;


module.exports = function (app) {
  app.use(
    process.env.REACT_APP_BASE_API,
    createProxyMiddleware({
      target: `http://localhost:${mockServerPort}/mock-api/v1`,
      changeOrigin: true,
      pathRewrite: {
        ['^' + process.env.REACT_APP_BASE_API]: ''
      }
    })
  );
};
