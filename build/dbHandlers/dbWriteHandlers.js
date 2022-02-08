"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebaseConfig_1 = require("../firebaseConfig");
function writeFirebaseData(data) {
    data.replace('\n', "");
    var mailboxInboxRef = firebaseConfig_1.db.ref("Letterbox_database").child("inbox");
    mailboxInboxRef.set(data, function (error) { return error ? console.log(error) : console.log('f:==>' + data); });
}
exports.default = writeFirebaseData;
