import {getPayloadSize,get2Number,get4Number,get1Number} from './gnrlParser'
import {writeDb} from '../dbHandlers/dbWriteHandlers'
const LED_SIZE = 2

export function parseLed(data: any){
//  var size= getPayloadSize(data,'L')
//  if (size==LED_SIZE){
//     writeDb('L'+getLNumber(data,size), getLValue(data,size))
//      }
}

function getLNumber(data: any,size: any){
    return get1Number(data,0,1)
}

function getLValue(data: any,size: any){
    return get1Number(data,1,size)
}

