import {getPayloadSize,get4Number, get2Number,} from './gnrlParser'
import {writeDb} from '../dbHandlers/dbWriteHandlers'
const ACCEL_SIZE = 12

export function parseAccel(data: any){
    var size= getPayloadSize(data,'X')
    if (size==ACCEL_SIZE){
        writeDb('X', getX(data,size))
        writeDb('Y', getY(data,size))
        writeDb('Z', getZ(data,size))
    }
}

function getX(data: any,size: any){
    return get4Number(data,0,size/3,'X')
}

function getY(data: any,size: any){
    return get4Number(data,size/3,2*size/3,'X')
}

function getZ(data: any,size: any){
    return get4Number(data,2*size/3,size,'X')
}