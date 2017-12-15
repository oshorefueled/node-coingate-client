/**
 * Created by osho on 11/8/17.
 */

var parseResponse = exports.parseResponse = function (res, body) {
    var parsedResBody = {
        body: JSON.parse(res.body)
    };
    var returnResponse = Object.assign({}, res, parsedResBody);
    var parsedBody =  JSON.parse(body);
    return [returnResponse, parsedBody];
};