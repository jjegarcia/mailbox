import express, {urlencoded, json, Router} from 'express'
import cors from 'cors'
import {PORT, RESPONSE_DELAY} from './env'
import addUser from './routes/addUser'
import getUser from './routes/getUser'
import {closeSerial, getSerialPort, openSerial, readSerialListener,} from "./serialHandlers/serial"
import readFirebaseData from "./dbHandlers/dbReadHandlers"
// import {a2h,a22h,a24h} from "./hex/hex"
// console.log(a24h('A1B0'))
// import {parseAccel,} from "./serialHandlers/accelParser"
// console.log(parseAccel('[FX0C4201DE0C1802]'))
import {parseButton,} from "./serialHandlers/buttonParser"
console.log(parseButton('[3P0200]'))


// const app = express()
// const initDb= false
// const initSerial= false
//
// // SERIAL INTERFACE
// // const serialport = getSerialPort('/dev/tty.usbmodem02691', 9600)
// const serialport = getSerialPort('/dev/ttyS0', 9600)
// const parser = openSerial(serialport)
// readSerialListener(parser)
// closeSerial(serialport)
// readFirebaseData(serialport,initDb)
//
// // MIDDLEWARE
// app.use(cors())
// app.use(logger())
// app.use(responseDelay(RESPONSE_DELAY))
//
// // ENDPOINTS
// app.post('/user', json(), addUser) //(endpointUrl,handlers)
// app.get('/user', getUser)
//
// //MAIN
// app.listen({port: PORT}, () => console.log(`Server running on port ${PORT}`))
//
//
