"use strict";

const configuration = require('../config/configure');
const utils = require("./utils");

var configure = exports.configure = function (options) {
    configuration.defaultOptions = utils.mergeObjects(configuration.defaultOptions, options);
};