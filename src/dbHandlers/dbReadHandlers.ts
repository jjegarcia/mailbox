import {db} from "../firebaseConfig";
import {writeSerial,setupBlue,} from "../serialHandlers/serial";

export default function readFirebaseData(serialport: any,init: boolean) {
    const mailboxOutboxRef = db.ref("Letterbox_database").child("outbox")
    mailboxOutboxRef.on('value', (snapshot: any) => {
        if (snapshot.exists()) {
            console.log('f:<==' + snapshot.val())
            if (init){
                writeSerial(serialport, snapshot.val() + '\n')
                init=true
            }
            else{
                setupBlue(serialport)
            }
        } else {
            console.log("unavailable data")
        }
    });
}
