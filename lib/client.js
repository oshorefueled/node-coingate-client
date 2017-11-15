'use strict';

const request = require('request');
const apiConfig = require('../config/configure');
const auth = require('./authentication');

/**
 * get the base endpoint based on selected application mode
 * available modes are sandbox and live
 */
var baseEndpoint = (function () {
    if (apiConfig.defaultOptions.mode == 'live') {
        return apiConfig.defaultOptions.live_url;
    }
    return apiConfig.defaultOptions.sandbox_url;
})();

function headers () {
    var options  = apiConfig.defaultOptions;
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Nodejs',
        'Access-Nonce':  auth.getNonce(),
        'Access-Key': apiConfig.defaultOptions.api_key,
        'Access-Signature': auth.generateSignature(options.app_id, options.api_key, options.api_secret)
    }
}

var order = exports.order = function (data, callback) {
    var options = {
        method: 'POST',
        url: baseEndpoint + '/orders',
        headers: headers(),
        data: data
    };

    request(options, function (err, res, body) {
        if (err) {
            return callback(err);
        }

    });

};

var getOrder = exports.getOrder = function () {
    
};

var listOrders = exports.listOrders = function () {

};