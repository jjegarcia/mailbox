import {a2h,a22h,a24h} from "../hex/hex"

export function getPayloadSize(data: string){
 return a22h(data.substring(0,2))
}

export function getPayload(data: string,header: string){
return data.split(header)[1]
}

export function get4Number(data: string,start: any,end: any){
return a24h(data.substring(start+2,end+2))
}

export function get2Number(data: string,start: any,end: any){
return a22h(data.substring(start+2,end+2))
}

export function get1Number(data: string,start: any,end: any){
return a2h(data.substring(start+2,end+2))
}