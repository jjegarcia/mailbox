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
