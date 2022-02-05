import express, {urlencoded, json, Router} from 'express'
import cors from 'cors'
import {PORT, RESPONSE_DELAY} from './env'
import {responseDelay, logger} from './utils'
import addUser from './routes/addUser'
import getUser from './routes/getUser'
import testRead from './dbHandlers/dbReadHandlers'
import testWrite from './dbHandlers/dbWriteHandlers'

const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline

function getSerialPort(path:any,speed:any) {
    return new SerialPort(path, {
        baudRate: speed
    });
}

const serialport = getSerialPort('/dev/tty.usbmodem02691',9600)

function openSerial(serialport:any) {
    const parser = new Readline()
    serialport.pipe(parser)
    serialport.on('open', () => {
        console.log('Port is open!')
    })
    return parser;
}

const parser = openSerial(serialport);



const app = express()

// MIDDLEWARE
app.use(cors())
app.use(logger())
app.use(responseDelay(RESPONSE_DELAY))

// ENDPOINTS

app.post('/user', json(), addUser) //(endpointUrl,handlers)
app.get('/user', getUser)

app.listen({port: PORT}, () => console.log(`Server running on port ${PORT}`))

// testRead()
// testWrite()

parser.on('data', (data: any) => {
    console.log('==>' + data)
    // io.sockets.emit('new message', data)
})
serialport.on('close', () => {
    console.log('Serial port disconnected.')
    // io.sockets.emit('close')
})


