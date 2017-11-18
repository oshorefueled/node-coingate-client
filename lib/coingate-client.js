"use strict";

const configuration = require("./configure");
const client = require("./client");

module.exports = function () {
    function configure (options) {
      configuration.configure(options);
    }
    
    return {
        configure: configure,
        createOrder: client.order,
        getOrder: client.getOrder,
        listOrders: client.listOrders
    }
};