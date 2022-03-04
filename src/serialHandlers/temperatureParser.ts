import {getPayloadSize,get4Number, get2Number,} from './gnrlParser'
import {writeDb} from '../dbHandlers/dbWriteHandlers'
const TEMP_SIZE = 4

export function parseTemperature(data: any){
    var size= getPayloadSize(data,'T')
    if (size==TEMP_SIZE){
        writeDb('T', getT(data,size))
     }
}

function getT(data: any,size: any){
    return get2Number(data,0,size/2,'T')*16/100
}