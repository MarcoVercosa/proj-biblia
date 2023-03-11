require('dotenv').config()

import mysql, { Pool } from "mysql2"

const conectaBD: Pool = mysql.createPool({

    host: process.env.hostBD,
    port: Number(process.env.portBD),
    user: process.env.userBD,
    password: process.env.passwordBD,
    database: process.env.databaseBD
})

export { conectaBD }
