import express, {urlencoded, json, Router} from 'express'
import cors from 'cors'
import {PORT, RESPONSE_DELAY} from './env'
import {responseDelay, logger} from './utils'
import addUser from './routes/addUser'
import getUser from './routes/getUser'
import testRead from './dbHandlers/dbReadHandlers'
import testWrite from './dbHandlers/dbWriteHandlers'
import {getSerialPort, openSerial,} from "./serialHandlers/serial";


const serialport = getSerialPort('/dev/tty.usbmodem02691',9600)


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


