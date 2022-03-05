import {getPayload,getPayloadSize,get2Number,get4Number,} from './gnrlParser'
import {writeDb} from '../dbHandlers/dbWriteHandlers'
const BUTTON_SIZE = 2

export function parseButton(data: any){
    var payload= getPayload(data,'P')
    var size= getPayloadSize(payload)
 if (size==BUTTON_SIZE && payload.length== size+3){
    writeDb('P', getP(payload,size))
     }
}

function getP(data: any,size: any){
    return get2Number(data,0,size)
}

