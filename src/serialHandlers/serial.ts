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
export function readSerialListener(parser:any) {
    parser.on('data', (data: any) => {
        console.log('==>' + data)
        // io.sockets.emit('new message', data)
    })
}
export function closeSerial(serialport:any) {
    serialport.on('close', () => {
        console.log('Serial port disconnected.')
        // io.sockets.emit('close')
    })
}

