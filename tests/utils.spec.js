"use strict";

const chai = require("chai");
const expect = chai.expect;
const merge = require("../lib/utils").mergeObjects;

describe("Util function - Merge", function () {
   it("returns a merged object", function (done) {
       var firstObject = {name:"Osho", age: 20};
       var secondObject = {name:"Osho", age: 21};
       var mergedObject = merge(firstObject, secondObject);
       expect(mergedObject).property("age").to.equal(21);
       done();
   })
});