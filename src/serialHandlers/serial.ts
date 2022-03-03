import writeFirebaseData from "../dbHandlers/dbWriteHandlers";
import {parseLed} from "./ledParser"
import {parseButton} from "./buttonParser"
import {parseTemperature} from "./temperatureParser"
import {parseAccel} from "./accelParser"

const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
var header=""


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
//         writeFirebaseData(data)
    parseSerial(data)
    })
}

export function writeSerial(serialport: any, data: any) {
    console.log('s:==>' + data)
    serialport.write(data)
}

export function writeSerialRet(serialport: any, data: any){
     console.log('sr:==>' + data)
    serialport.write(data + '\n')
}

export function closeSerial(serialport: any) {
    serialport.on('close', () => {
        console.log('Serial port disconnected.')
    })
}

export function setupBlue(serialport: any) {
    writeSerial(serialport,'$$$')
    writeSerial(serialport,'+'+ '\n')
    writeSerial(serialport,'SS,C0'+ '\n')
    writeSerial(serialport,'C,0,049162978378'+ '\n')
}

function parseSerial(data: any){
        if(data.includes(Headers.PROTOCOL_VERSION_ID)) {
        console.log(Headers.PROTOCOL_VERSION_ID)
        return
        }
        if(data.includes(Headers.LED_STATE_ID)) {
        console.log(Headers.LED_STATE_ID)
        parseLed(data)
        return
        }
        if(data.includes(Headers.BUTTON_STATE_ID)) {
        console.log(Headers.BUTTON_STATE_ID)
        parseButton(data)
        return
        }
        if(data.includes(Headers.TEMPERATURE_DATA_ID)) {
        console.log(Headers.TEMPERATURE_DATA_ID)
        parseTemperature(data)
        return
        }
        if(data.includes(Headers.ACCEL_DATA_ID)) {
        console.log(Headers.ACCEL_DATA_ID)
        parseAccel(data)
        return
        }
        if(data.includes(Headers.SERIAL_DATA_ID)) {
        console.log(Headers.SERIAL_DATA_ID)
        return
        }
        if(data.includes(Headers.ERROR_ID)) {
        console.log(Headers.ERROR_ID)
        return
        }
        if(data.includes(Headers.UI_CONFIG_DATA_ID)) {
        console.log(Headers.UI_CONFIG_DATA_ID)
        return
        }
}

 enum Headers {
    PROTOCOL_VERSION_ID = 'V',
    LED_STATE_ID = 'L',
    BUTTON_STATE_ID = 'P',
    TEMPERATURE_DATA_ID = 'T',
    ACCEL_DATA_ID = 'X',
    SERIAL_DATA_ID = 'S',
    ERROR_ID = 'R',
    UI_CONFIG_DATA_ID = 'U'
}