import {getPayload,getPayloadSize,get2Number,get4Number,get1Number} from './gnrlParser'
import {writeDb} from '../dbHandlers/dbWriteHandlers'
const LED_SIZE = 2

export function parseLed(data: any){
    var payload= getPayload(data,'L')
    var size= getPayloadSize(payload)
    if (size==LED_SIZE && payload.length== size+3){
        writeDb('L'+getLNumber(payload,size), getLValue(payload,size))
    }
}

function getLNumber(data: any,size: any){
    return get1Number(data,0,1)
}

function getLValue(data: any,size: any){
    return get1Number(data,1,size)
}

