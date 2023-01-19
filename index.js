"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _server = require("react-dom/server");
var render = function render() {
  var html = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement("p", null, "Hello World"));
  var str = "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>My App</title>\n      </head>\n      <body>\n        <div id=\"root\">".concat(html, "</div>\n      </body>\n    </html>\n  ");
  console.log({
    str: str
  });
  return str;
};
render();
