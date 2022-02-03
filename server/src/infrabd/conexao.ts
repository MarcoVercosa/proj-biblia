// const mysql = require("mysql")
import mysql, { Pool } from "mysql"

const conectaBD: Pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "deusepoder",
    database: "biblia13v"

})

module.exports = conectaBD
