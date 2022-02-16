"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebaseConfig_1 = require("../firebaseConfig");
var serial_1 = require("../serialHandlers/serial");
function readFirebaseData(serialport, init) {
    var mailboxOutboxRef = firebaseConfig_1.db.ref("Letterbox_database").child("outbox");
    mailboxOutboxRef.on('value', function (snapshot) {
        if (snapshot.exists()) {
            console.log('f:<==' + snapshot.val());
            if (init) {
                serial_1.writeSerial(serialport, snapshot.val() + '\n');
                init = true;
            }
            else {
                serial_1.setupBlue(serialport);
            }
        }
        else {
            console.log("unavailable data");
        }
    });
}
exports.default = readFirebaseData;
