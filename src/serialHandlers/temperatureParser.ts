import {getPayload,getPayloadSize,get4Number,get2Number,} from './gnrlParser'
import {writeDb} from '../dbHandlers/dbWriteHandlers'
const TEMP_SIZE = 4

export function parseTemperature(data: any){
    var payload= getPayload(data,'T')
    var size= getPayloadSize(payload)
    if (size==TEMP_SIZE && payload.length== size+3){
        writeDb('T', getT(payload,size))
     }
}

function getT(data: any,size: any){
    return get2Number(data,0,size/2)*16/100
}