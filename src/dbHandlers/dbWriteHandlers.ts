import {db} from "../firebaseConfig";

export default function writeFirebaseData(data: any) {
    const mailboxInboxRef = db.ref("Letterbox_database").child("inbox");
    mailboxInboxRef.set(data, (error) => error ? console.log(error) : console.log('f:==>' + data));
}
