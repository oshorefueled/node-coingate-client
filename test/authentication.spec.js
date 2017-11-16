"use strict";

const chai = require("chai");
const expect = chai.expect;
const auth = require("../lib/authentication");

describe('Auth - Get Signature', function () {
   it('should a unique hash string', function (done) {
        var signature = auth.generateSignature(654, 'etQ3234rs436702c2', 'm1ivbhCDiskurnsuweriusvVs');
        expect(signature).to.be.a('string');
        done();
   });
});