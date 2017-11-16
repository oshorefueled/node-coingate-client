"use strict";

const chai = require("chai");
const expect = chai.expect;
const client = require("../lib/client");
const config = require("../lib/configure");
const defaultOptions = require("../config/configure").defaultOptions;

describe.skip('Client - Creating Order', function () {
   it('should return status 200 and payment url', function (done) {
       var options = {
           api_key: 'API-KEY',
           api_secret: 'API-SECRET',
           app_id: 'APP-ID',
           mode: 'sandbox'
       };
       
       var data = {
           order_id:         'ORDER-1412759367',
           price:            1050.99,
           currency:         'USD',
           receive_currency: 'EUR',
           callback_url:     'https://example.com/payments/callback?token=6tCENGUYI62ojkuzDPX7Jg',
           cancel_url:       'https://example.com/cart',
           success_url:      'https://example.com/account/orders',
           description:      'Apple Iphone 6'
       };
       config.configure(options);
       console.log('new options', defaultOptions)
       client.order(data, function (err, res, body) {
           expect(res).property('statusCode').to.equal(200);
           done();
       });
   });
});