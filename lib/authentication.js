'use strict';
const crypto = require('crypto');

var generateSignature = exports.generateSignature = function (appID, apiKey, apiSecret) {
    var message = getMessage(appID, apiKey);
    return crypto.createHmac('SHA256', apiSecret)
        .update(message)
        .digest('hex');
};

var getMessage = exports.getMessage = function (appID, apiKey) {
    var nonce = getNonce();
    return nonce + appID + apiKey;
};

var getNonce =  exports.getNonce = function getNonce () {
    var date = new Date();
    return date.getTime();
};