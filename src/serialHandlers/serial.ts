import writeFirebaseData from "../dbHandlers/dbWriteHandlers";

const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline


export function getSerialPort(path: any, speed: any) {
    return new SerialPort(path, {
        baudRate: speed
    });
}

export function openSerial(serialport: any) {
    const parser = new Readline()
    serialport.pipe(parser)
    serialport.on('open', () => {
        console.log('Port is open!')
    })
    return parser;
}

export function readSerialListener(parser: any) {
    parser.on('data', (data: any) => {
        console.log('s:<==' + data)
        writeFirebaseData(data)
    })
}

export function writeSerial(serialport: any, data: any) {
    console.log('s:==>' + data)
    serialport.write(data + '\n')
}

export function closeSerial(serialport: any) {
    serialport.on('close', () => {
        console.log('Serial port disconnected.')
    })
}

export function setupBlue(serialport: any) {
    serialport.write(serialport,'$$$+\nSS,C0\n,C,0,049162978378')
}

