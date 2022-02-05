"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebaseConfig_1 = require("../firebaseConfig");
function testWrite() {
    console.log("Writting");
    var obj = { name: 'testName6', id: 10 };
    firebaseConfig_1.db.ref('testDir').set(obj, function (error) { return error ? console.log(error) : console.log('success o'); });
}
exports.default = testWrite;
