Coingate Node.js API Client
==============================
A Nodejs wrapper for making requests to [Coingate's API](https://developer.coingate.com/docs/getting-started)

It allows you to perform the following actions
* Create Order
* Get Order Details
* Get Order List

## Get Started
Install using [Node Package Manager](https://www.npmjs.org/).
```
~$ npm install coingate
```

## Usage

After installing, import coingate

```
var coingate = require('coingate');
```

### Configure
create API keys for testing from [coingate sandbox](https://sandbox.coingate.com/)
or for a live app from [coingate](https://www.coingate.com/)

configure client with parameters (mode,api_key, api_secret, app_id)
```
coingate.configure({
 mode: 'sandbox',
 app_id: '832',
 api_key: '818x8038aaiehca3qidaf',
 api_secret: '9adij3289adjksafduiaiolsdaf'
})
```

### Create Order
A payment url will be return in response after successfully creating
an order. Check [coingate documentation](https://developer.coingate.com/docs/create-order)
for required and optional parameters and example response
```
var params = {
 order_id:         'ORDER-1412759367',
 price:            1050.99,
 currency:         'USD',
 receive_currency: 'EUR',
 callback_url:     'https://example.com/payments/callback?token=6tCENGUYI62ojkuzDPX7Jg',
 cancel_url:       'https://example.com/cart',
 success_url:      'https://example.com/account/orders',
 description:      'Apple Iphone 10'
};
coingate.createOrder(params, function (err, res, body) {
 if (err) {
     console.log(err);
 } else {
     console.log('order created successfully');
     console.log(res.body);
 }
});
```

### Get Order Details
Details for a single order will be returned in response. Check [coingate documentation](https://developer.coingate.com/docs/get-order) for
example response. Required parameter is the Order ID.

```
var orderID = 3421;
coingate.getOrder(orderID, function (err, res, body) {
 if (err) {
     console.log(err);
 } else {
     console.log('get order request successful');
     console.log(res);
 }
});
```

### List Orders
All created orders will be returned in response. Check [coingate documentation](https://developer.coingate.com/docs/list-orders) for
example response and more details about parameters.
```
var params = {
per_page: 50,
page: 1,
sort: 'created_at_desc'
};
coingate.listOrders(params, function (err, res, body) {
  if (err) {
      console.log(err);
  } else {
      console.log('order created successfully');
      console.log(res.body);
  }
});
```

## Contributing
If you would like to contribute, please fork the repo, make your changes and create a pull request.

## License
This library was released under MIT License

## Reference

[Coingate API Documentation](https://developer.coingate.com/docs)

## Authors
* [Osho Emmanuel](https://github.com/oshorefueled)


