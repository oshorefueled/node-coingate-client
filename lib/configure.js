"use strict";

const configuration = require('../config/configure');

var configure = exports.configure = function (options) {
    var newOptions = Object.defineProperties(configuration.defaultOptions, options);
};