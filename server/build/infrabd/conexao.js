"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectaBD = void 0;
// const mysql = require("mysql")
const mysql_1 = __importDefault(require("mysql"));
const conectaBD = mysql_1.default.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "deusepoder",
    database: "biblia13v"
});
exports.conectaBD = conectaBD;
