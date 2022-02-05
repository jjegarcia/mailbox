"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var cors_1 = __importDefault(require("cors"));
var env_1 = require("./env");
var utils_1 = require("./utils");
var addUser_1 = __importDefault(require("./routes/addUser"));
var getUser_1 = __importDefault(require("./routes/getUser"));
var serial_1 = require("./serialHandlers/serial");
var dbReadHandlers_1 = __importDefault(require("./dbHandlers/dbReadHandlers"));
var app = express_1.default();
// SERIAL INTERFACE
var serialport = serial_1.getSerialPort('/dev/tty.usbmodem02691', 9600);
var parser = serial_1.openSerial(serialport);
serial_1.readSerialListener(parser);
serial_1.closeSerial(serialport);
dbReadHandlers_1.default(serialport);
// MIDDLEWARE
app.use(cors_1.default());
app.use(utils_1.logger());
app.use(utils_1.responseDelay(env_1.RESPONSE_DELAY));
// ENDPOINTS
app.post('/user', express_1.json(), addUser_1.default); //(endpointUrl,handlers)
app.get('/user', getUser_1.default);
//MAIN
app.listen({ port: env_1.PORT }, function () { return console.log("Server running on port " + env_1.PORT); });
