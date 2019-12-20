define(function(require, exports, module) {
  var template = require("template");

  exports.init = function(elId) {
    var data = {
      title: "温州外宣办",
      list: [{ title: "文艺2", count: 12 }, { title: "文艺", count: 10 }]
    };
    var html = template("test", data);
    document.getElementById(elId).innerHTML = html;
  };
});
