let table = new Map()

table.set('0',0)
table.set('1',1)
table.set('2',2)
table.set('3',3)
table.set('4',4)
table.set('5',5)
table.set('6',6)
table.set('7',7)
table.set('8',8)
table.set('9',9)
table.set('A',10)
table.set('B',11)
table.set('C',12)
table.set('D',13)
table.set('E',14)
table.set('F',15)


export function a2h(value: string){
    return table.get(value)
}

export function a22h(value: string){
    return a2h(value.charAt(0))*16+a2h(value.charAt(1))
}
export function a24h(value: string){
return a2h(value.charAt(0))*4096+a2h(value.charAt(1))*256+a2h(value.charAt(2))*16+a2h(value.charAt(3))
}