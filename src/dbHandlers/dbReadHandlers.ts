import {db} from "../firebaseConfig";
import {writeSerial} from "../serialHandlers/serial";

// import { getDatabase, ref, onValue} from "firebase/database";

export function testRead() {
    console.log("Reading");
    db.ref("Letterbox_database").child("event_list").get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

export default function readFirebaseData(serialport: any) {
    console.log("Reading Firebase data");
    const mailboxRef = db.ref("Letterbox_database").child("event_list");
    mailboxRef.on('value', (snapshot: any) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            writeSerial(serialport, snapshot.val()+'\n');
        } else {
            console.log("No data available");
        }
    });
}
