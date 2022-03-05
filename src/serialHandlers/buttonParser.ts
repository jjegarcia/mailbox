import {getPayloadSize,get2Number,get4Number,} from './gnrlParser'
import {writeDb} from '../dbHandlers/dbWriteHandlers'
const BUTTON_SIZE = 2

export function parseButton(data: any){
//  var size= getPayloadSize(data,'P')
//  if (size==BUTTON_SIZE){
//     writeDb('P', getP(data,size))
//      }
}

function getP(data: any,size: any){
    return get2Number(data,0,size)
}

