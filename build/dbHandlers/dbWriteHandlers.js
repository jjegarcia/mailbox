"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebaseConfig_1 = require("../firebaseConfig");
// export function testWrite() {
//     console.log("Writting");
//     const obj = {name: 'testName6', id: 10};
//     db.ref('testDir').set(obj, (error) => error ? console.log(error) : console.log('success o'));
// }
function writeFirebaseData(data) {
    var mailboxInboxRef = firebaseConfig_1.db.ref("Letterbox_database").child("inbox");
    mailboxInboxRef.set(data, function (error) { return error ? console.log(error) : console.log('f:==>' + data); });
}
exports.default = writeFirebaseData;
