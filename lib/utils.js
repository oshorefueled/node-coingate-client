/**
 * Created by osho on 11/8/17.
 */

var merge = exports.mergeObjects = function () {
    var argLength = arguments.length,
        newObject = {},
        i = 0,
        key;

    for (; i < argLength; i++) {
        for (key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                newObject[key] = arguments[i][key]
            }
        }
    }
    return newObject;
};

var parseResponse = exports.parseResponse = function (res, body) {
    var parsedResBody = {
        "body": JSON.parse(res.body)
    };
    var returnResponse = merge(res, parsedResBody);
    var parsedBody =  JSON.parse(body);
    return [returnResponse, parsedBody];
};