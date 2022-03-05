import {getPayload,getPayloadSize,get4Number, get2Number,} from './gnrlParser'
import {writeDb} from '../dbHandlers/dbWriteHandlers'
const ACCEL_SIZE = 12

export function parseAccel(data: any){
   var payload= getPayload(data,'X')
    var size= getPayloadSize(payload)
 if (size==ACCEL_SIZE && payload.length== size+3){
        writeDb('X', getX(payload,size))
        writeDb('Y', getY(payload,size))
        writeDb('Z', getZ(payload,size))
    }
}

function getX(data: any,size: any){
    return get4Number(data,0,size/3)
}

function getY(data: any,size: any){
    return get4Number(data,size/3,2*size/3)
}

function getZ(data: any,size: any){
    return get4Number(data,2*size/3,size)
}