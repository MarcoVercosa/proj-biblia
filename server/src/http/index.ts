require('dotenv').config()
import process from "node:process"
import { conectaBD } from "../infrabd/conexao"
import { Logger } from "../services/logs/createLogs"
import { router } from "./routes/index_routes"


const express = require("express")
const app = express()
let port = process.env.portHTTP

function StartServerWEB(): Promise<string> {
    Logger.warn("Servidor inciando tentativa de conexão ao banco de dados")
    return new Promise((resolve, reject) => {
        conectaBD.getConnection((erro: any) => {
            try {
                if (!erro) {
                    Logger.warn("Conectado no banco de dados com sucesso")
                    app.use(express.json())
                    app.use(router)
                    const server: any = app.listen(port, '192.168.15.143', () => {
                        Logger.warn(`Servidor rodando na porta ${port} !`)
                        Logger.warn(`Servidor rodando na porta ${port} on process ${process.pid} !`)
                    })

                    process.on('SIGINT', (): void => {
                        server.close((): void => {
                            Logger.warn('SIGTERM signal received: closing HTTP server and process' + process.pid);
                            process.exit(1)
                        })
                    });
                    process.on('SIGTERM', (): void => {
                        server.close((): void => {
                            Logger.warn('SIGTERM signal received: closing HTTP server and the process ' + process.pid);
                            process.exit(1)
                        })
                    });

                    process.on('uncaughtException', (err, origin): void => {
                        Logger.error(`${err} -- ${origin} on process ${process.pid}`)
                        process.exit(1)
                    });

                    resolve("Server is started on process " + process.pid)
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
// ##########################
// START SERVER
// ##########################

function StartServer(): void {
    setTimeout((): void => {
        StartServerWEB().then(dado => Logger.warn(dado)).catch((err) => {
            Logger.error("Erro ao iniciar o servidor " + err)
            NovaTentativa(err)
        })
    }, 1000)
}

function NovaTentativa(err: any): void {
    Logger.warn("Solicitando nova tentativa")
    setTimeout(() => {
        StartServerWEB().then(dado => Logger.warn(dado)).catch((erro) => {
            Logger.error("Erro ao iniciar o servidor " + err)
            NovaTentativa(erro)
        })
    }, 5000)
}

export { StartServer }




