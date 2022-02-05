import {db} from "../firebaseConfig";

// export function testWrite() {
//     console.log("Writting");
//     const obj = {name: 'testName6', id: 10};
//     db.ref('testDir').set(obj, (error) => error ? console.log(error) : console.log('success o'));
// }

export default function writeFirebaseData(data: any) {
    const mailboxInboxRef = db.ref("Letterbox_database").child("inbox");
    mailboxInboxRef.set(data, (error) => error ? console.log(error) : console.log('f:==>' + data));
}
