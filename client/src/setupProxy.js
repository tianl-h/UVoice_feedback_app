/*
* @Author: tianl
* @Date:   2021-03-16 11:38:57
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-16 11:39:28
*/
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};