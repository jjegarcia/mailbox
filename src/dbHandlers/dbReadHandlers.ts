import {db} from "../firebaseConfig";
import {writeSerial,setupBlue,writeSerialRet,} from "../serialHandlers/serial";

export default function readFirebaseData(serialport: any,init: boolean) {
    const mailboxOutboxRef = db.ref("Letterbox_database").child("outbox")
    mailboxOutboxRef.on('value', (snapshot: any) => {
        if (snapshot.exists()) {
            console.log('f:<==' + snapshot.val())
            if (!init){
                setupBlue(serialport)
                 init=true
            }
            else{
            writeSerialRet(serialport, snapshot.val())
            }
        } else {
            console.log("unavailable data")
        }
    });
}
