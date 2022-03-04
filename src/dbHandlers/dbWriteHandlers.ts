import {db} from "../firebaseConfig";
    const mailboxRef=db.ref("Letterbox_database")
export default function writeFirebaseData(data: any) {
    const mailboxInboxRef = mailboxRef.child("inbox")
    data.replace('\n',"")
    mailboxInboxRef.set(data, (error) => error ? console.log(error) : console.log('f:==>' + data))
}
export function writeDb(path: string, data: string){
    mailboxRef.child(path).set(data, (error) => error ? console.log(error) : console.log('f:==>' + data))
}

