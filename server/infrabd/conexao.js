const mysql = require("mysql")

const conectaBD = mysql.createPool({

    host: "192.168.0.7",
    port: 3306,
    user: "root",
    password: "deusepoder",
    database: "biblia13v"

})

module.exports = conectaBD
