const mysql = require("mysql")

const conectaBD = mysql.createPool({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "deusepoder",
    database: "hinoHarpa"

})

module.exports = conectaBD