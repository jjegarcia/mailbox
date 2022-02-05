"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRead = void 0;
var firebaseConfig_1 = require("../firebaseConfig");
var serial_1 = require("../serialHandlers/serial");
// import { getDatabase, ref, onValue} from "firebase/database";
function testRead() {
    console.log("Reading");
    firebaseConfig_1.db.ref("Letterbox_database").child("event_list").get().then(function (snapshot) {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        }
        else {
            console.log("No data available");
        }
    }).catch(function (error) {
        console.error(error);
    });
}
exports.testRead = testRead;
function readFirebaseData(serialport) {
    console.log("Reading Firebase data");
    var mailboxRef = firebaseConfig_1.db.ref("Letterbox_database").child("event_list");
    mailboxRef.on('value', function (snapshot) {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            serial_1.writeSerial(serialport, snapshot.val());
        }
        else {
            console.log("No data available");
        }
    });
}
exports.default = readFirebaseData;
