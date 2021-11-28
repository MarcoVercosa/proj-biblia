const mysql = require("mysql")

const conectaBD = mysql.createPool({

    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "deusepoder",
    database: "biblia13v"

})

module.exports = conectaBD
