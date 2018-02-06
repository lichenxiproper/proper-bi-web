'use strict';

var handler = module.exports = {};

handler.onPost = function(req, res, data) {
  var username = data.username;
  if (username === 'admin') {
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.end('eyJpZCI6ImRjNjU3NjZjLTAxNzYtNGExZS1hZDBlLWRkMDZiYTY0NWM3bCIsIm5hbWUiOiJhZG1pbiJ9.eyJlbXBOYW1lIjpudWxsLCJyb2xlcyI6ImEsYixjIn0.jgFLzfaFjADFUfti3jGMNqhYb1KN1anU8OkXKh3uKwk');
  } else {
    res.statusCode = 400;
    res.end('用户名或密码错误！');
  }
};
