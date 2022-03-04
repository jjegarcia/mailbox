import {a2h,a22h,a24h} from "../hex/hex"

export function getPayloadSize(data: string,header :string){
 return a22h(getPayload(data,header).substring(0,2))
}

function getPayload(data: string,header: string){
return data.split(header)[1]
}

export function get4Number(data: string,start: any,end: any ,header: string){
return a24h(getPayload(data,header).substring(2+start,2+end))
}

export function get2Number(data: string,start: any,end: any,header: string){
return a22h(getPayload(data,header).substring(2+start,2+end))
}