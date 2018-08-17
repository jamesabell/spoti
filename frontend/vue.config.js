var path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~bourbon/core/_bourbon.scss";`
      }
    }
  }
};
