require('dotenv').config()
import { conectaBD } from "../infrabd/conexao"
// const router = require("./routes/index_routes")
import { router } from "./routes/index_routes"

const express = require("express")
const app = express()
let port = process.env.portHTTP

function StartServer(): Promise<string> {
    console.log("Iniciando tentativa de conexão")

    return new Promise((resolve, reject) => {
        conectaBD.getConnection((erro: any) => {

            try {
                if (!erro) {
                    let now = new Date()
                    console.log("Conectado no banco de dados com sucesso no seguinte horário: ")
                    console.log("Hoje é " + now.getDate() + " do mês " + now.getMonth() + " de " + now.getFullYear() + "---" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())

                    app.use(express.json())
                    app.use(router)

                    app.listen(port, '192.168.15.143', () => { (console.log(`Servidor rodando na porta ${port} !`)) })
                    resolve("Aceito")

                } else {
                    //encaminha o erro para o catch
                    throw (erro)
                }
            } catch (err) {
                reject(err)
            }
        })
    })
}


setTimeout((): void => {
    StartServer().then(dado => console.log(dado)).catch((err) => {
        console.log("TEMOS O SEGUINTE ERRO " + err)

        NovaTentativa(err)
    })
}, 1000)

function NovaTentativa(err: any): void {
    console.log("Solicitando nova tentativa")
    setTimeout(() => {
        StartServer().then(dado => console.log(dado)).catch((erro) => {
            console.log("TEMOS O SEGUINTE ERRO " + err)
            NovaTentativa(erro)
        })
    }, 5000)
}




