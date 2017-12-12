"use strict";

const configuration = require('../config/configure');
const utils = require("./utils");

var configure = exports.configure = function (options) {
	Object.assign(configuration.defaultOptions, options);
};