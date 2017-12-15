'use strict';

const request = require('request');
const apiConfig = require('../config/configure');
const auth = require('./authentication');
const utils = require('../lib/utils');

/**
 * get the base endpoint based on selected application mode
 * available modes are sandbox and live
 */
function baseEndpoint () {
    if (apiConfig.defaultOptions.mode == 'live') {
        return apiConfig.defaultOptions.live_url;
    }
    return apiConfig.defaultOptions.sandbox_url;
}

/**
 * Sets required Headers for authentication when making request to
 * coingate endpoints
 * @returns {{User-Agent: string, Access-Nonce, Access-Key: string, Access-Signature}}
 */
function headers () {
    var options  = apiConfig.defaultOptions;
    var nonce = auth.getNonce();
    var signature = auth.generateSignature(options.app_id, options.api_key, options.api_secret);
    return {
        'User-Agent': 'Nodejs',
        'Access-Nonce': nonce,
        'Access-Key': apiConfig.defaultOptions.api_key,
        'Access-Signature': signature
    };
}

/**
 * creates a coingate order
 * @data is an Object that contains parameters to be passed to
 * order endpoint.
 * check https://developer.coingate.com/docs/create-order for
 * required and optional parammeters
 */
var order = exports.order = function (data, callback) {
    var options = {
        method: 'POST',
        url: baseEndpoint() + '/orders',
        headers: headers(),
        form: data
    };

    request(options, function (err, res, body){
        if (err) {
            return callback(err);
        }
        var response = utils.parseResponse(res, body);
        return callback(err, response[0], response[1]);
    });
};

/**
 * gets details for a single order
 * @orderID ID for order to get data for
 */
var getOrder = exports.getOrder = function (orderID, callback) {
    var options = {
        method: 'GET',
        url: baseEndpoint() + '/orders/' + orderID,
        headers: headers()
    };

    request(options, function (err, res, body){
        if (err) {
            return callback(err);
        }
        var response = utils.parseResponse(res, body);
        return callback(err, response[0], response[1]);
    });
};

/**
 * gets details for a single order
 * @data is an Object that contains key value pairs
 * for parameters that would be passed when making a
 * request to the endpoint.
 * check https://developer.coingate.com/docs/list-orders
 * for parameters to be passed to the endpoint.
 */
var listOrders = exports.listOrders = function (data, callback) {
    var options = {
        method: 'GET',
        url: baseEndpoint() + '/orders',
        headers: headers(),
        qs: data
    };

    request(options, function (err, res, body){
        if (err) {
            return callback(err);
        }
        var response = utils.parseResponse(res, body);
        return callback(err, response[0], response[1]);
    });
};