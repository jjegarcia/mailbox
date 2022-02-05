import {db} from "../firebaseConfig";
import {writeSerial} from "../serialHandlers/serial";

export default function readFirebaseData(serialport: any) {
    const mailboxOutboxRef = db.ref("Letterbox_database").child("outbox");
    mailboxOutboxRef.on('value', (snapshot: any) => {
        if (snapshot.exists()) {
            console.log('f:<==' + snapshot.val());
            writeSerial(serialport, snapshot.val() + '\n');
        } else {
            console.log("unavailable data");
        }
    });
}
