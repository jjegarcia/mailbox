import {db} from "../firebaseConfig";
import {writeSerial} from "../serialHandlers/serial";

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
