import {getPayloadSize,getNumber} from './gnrlParser'
const ACCEL_SIZE = 12
export function parseAccel(data: any){
 var size= getPayloadSize(data)
 if (size==ACCEL_SIZE){
//     return(getX(data,size))
//     return getY(data,size)
    return getZ(data,size)
 }
}

function getX(data: any,size: any){
    return getNumber(data,0,size/3)
}
function getY(data: any,size: any){
    return getNumber(data,size/3,2*size/3)
}
function getZ(data: any,size: any){
    return getNumber(data,2*size/3,size)
}