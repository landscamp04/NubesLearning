const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000', // your backend URL
      changeOrigin: true,
    })
  );
  
  // Don't proxy static assets
  app.use('/static', createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
  }));
};