"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSerial = void 0;
var SerialPort = require("serialport");
var ReadLine = require("@serialport/parser-readline");
function runSerial() {
    var port = new SerialPort("/dev/tty.usbmodem02691", { baudRate: 9600, });
    var parser = new ReadLine();
    port.on('open', function () {
        console.log('Port is open!');
    });
    console.log("here");
    port.write("A/n");
    port.pipe(parser);
    parser.on('data', handleRead);
    function handleRead(data) {
        console.log('==>' + data);
    }
}
exports.runSerial = runSerial;
