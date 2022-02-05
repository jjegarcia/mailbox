"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebaseConfig_1 = require("../firebaseConfig");
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
exports.default = testRead;
