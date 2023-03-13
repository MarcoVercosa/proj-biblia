require('dotenv').config()
import { conectaBD } from "../infrabd/conexao"
import { Logger } from "../services/logs/createLogs"
// const router = require("./routes/index_routes")
import { router } from "./routes/index_routes"

const express = require("express")
const app = express()
let port = process.env.portHTTP

function StartServer(): Promise<string> {
    Logger.info("Servidor inciando tentativa de conexão ao banco de dados")
    return new Promise((resolve, reject) => {
        conectaBD.getConnection((erro: any) => {
            try {
                if (!erro) {
                    Logger.info("Conectado no banco de dados com sucesso")
                    app.use(express.json())
                    app.use(router)
                    app.listen(port, '192.168.15.143', () => { (Logger.info(`Servidor rodando na porta ${port} !`)) })
                    resolve("Servidor iniciado")
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
    StartServer().then(dado => Logger.info(dado)).catch((err) => {
        Logger.error("Erro ao iniciar o servidor " + err)
        NovaTentativa(err)
    })
}, 1000)

function NovaTentativa(err: any): void {
    Logger.info("Solicitando nova tentativa")
    setTimeout(() => {
        StartServer().then(dado => console.log(dado)).catch((erro) => {
            Logger.error("Erro ao iniciar o servidor " + err)
            NovaTentativa(erro)
        })
    }, 5000)
}




