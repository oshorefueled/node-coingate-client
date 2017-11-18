"use strict";

const chai = require("chai");
const expect = chai.expect;
const client = require("../lib/client");
const config = require("../lib/configure");

var options = {
    api_key: 'api-key',
    api_secret: 'api-secret',
    app_id: 'app-id',
    mode: 'sandbox'
};
config.configure(options);

describe.skip('Client - Creating Order', function () {
   it('should return status 200 and payment url', function (done) {
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
       client.order(data, function (err, res, body) {
           expect(res).property('statusCode').to.equal(200);
           expect(body).property('id').to.be.finite;
           done();
       });
   });
});

describe.skip('Client - Get Order Details', function () {
    it('should return status 200 and order details', function (done) {
        var orderID = '13245';
        client.getOrder(orderID, function (err, res, body) {
            expect(res).property('statusCode').to.equal(200);
            expect(body).to.have.property('price');
            expect(body).to.have.property('status');
            done();
        })
    })
});

describe.skip('Client - Get All Orders', function () {
    it('should return status 200 and all orders', function (done) {
        var data = {
            per_page: 50,
            page: 1,
            sort: 'created_at_desc'
        };
        client.listOrders(data, function (err, res, body) {
            expect(res).property('statusCode').to.equal(200);
            expect(body).to.have.property('orders');
            done();
        })
    });
});