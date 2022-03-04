import {a2h,a22h,a24h} from "../hex/hex"

export function getPayloadSize(data: string){
 return a22h(getPayload(data).substring(0,2))
}

function getPayload(data: string){
return data.split('X')[1]
}

export function getNumber(data: string,start: any,end: any ){
return a24h(getPayload(data).substring(2+start,2+end))
}