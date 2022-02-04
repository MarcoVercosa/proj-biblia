"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectaBD = void 0;
require('dotenv').config();
const mysql_1 = __importDefault(require("mysql"));
const conectaBD = mysql_1.default.createPool({
    host: process.env.hostBD,
    port: Number(process.env.portBD),
    user: process.env.userBD,
    password: process.env.passwordBD,
    database: process.env.databaseBD
});
exports.conectaBD = conectaBD;
