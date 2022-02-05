"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebaseConfig_1 = require("../firebaseConfig");
var serial_1 = require("../serialHandlers/serial");
// export function testRead() {
//     console.log("Reading");
//     db.ref("Letterbox_database").child("event_list").get().then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot.val());
//         } else {
//             console.log("No data available");
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
// }
function readFirebaseData(serialport) {
    var mailboxOutboxRef = firebaseConfig_1.db.ref("Letterbox_database").child("outbox");
    mailboxOutboxRef.on('value', function (snapshot) {
        if (snapshot.exists()) {
            console.log('f:<==' + snapshot.val());
            serial_1.writeSerial(serialport, snapshot.val() + '\n');
        }
        else {
            console.log("unavailable data");
        }
    });
}
exports.default = readFirebaseData;
