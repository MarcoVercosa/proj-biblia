const mysql = require("mysql")

const conectaBD = mysql.createConnection({

    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "deusepoder",
    database: "hinoHarpa"

})

module.exports = conectaBD