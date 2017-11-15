"use strict";

const configuration = require("./configure");

module.exports = function () {
    function configure (options) {
      configuration.configure(options);
    }

    return {
        configure: configure
    }
};