'use strict';
const crypto = require('crypto');

function generateSignature (appID, apiKey, apiSecret) {
    var message = getMessage(appID, apiKey);
    return crypto.createHmac('sha256', apiSecret)
        .update(message)
        .digest('hex');
}

function getMessage (appID, apiKey) {
    var nonce = getNonce();
    return nonce + appID + apiKey;
}

function getNonce () {
    var date = new Date();
    return date.getTime();
}

module.exports = generateSignature;