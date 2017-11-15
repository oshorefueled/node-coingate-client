"use strict";

const chai = require("chai");
const expect = chai.expect;
const auth = require("../lib/authentication");

describe('Auth - Get Signature', function () {
   it('should a unique hash string', function (done) {
        var signature = auth.generateSignature(124, '3923da93zxx9312s', '848292dadaedah3gdnladja');
        expect(signature).to.be.a('string');
        done();
   });
});