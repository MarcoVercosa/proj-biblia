//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   

import { Request, Response, NextFunction } from "express"
import fs from "fs"
function LiberaOrigemRegistraLog(request: Request, response: Response, next: NextFunction) {

    const origem = request.headers.origin || "indefinido"
    console.log(origem)

    if (origem.match(/vidadafonte.com.br/) || origem.match(/localhost/) && request.method === "GET") {
        // if (origem.match(/vidadafonte.com.br/) && req.method === "GET") {
        //se conter :vidadafonte.com.br na origem solicitante ou localhost e for do método get
        let now = new Date
        fs.appendFile("./logs.txt", `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}-- ${now.getHours()} horas e ${now.getMinutes()} minutos => LIBERADO acesso da origem
         - ${request.headers.origin} com o método - ${request.method} na rota - ${request.originalUrl}\n`, (err: any) => {

            if (err) {
                console.log("Houve algum erro ao escrever o log" + err)
            }
        })
        next()
    } else {
        let now: Date = new Date
        fs.appendFile("./logs.txt", `${now.getDay()}/${now.getMonth()}/${now.getFullYear()} -- ${now.getHours()}horas e ${now.getMinutes()} minutos => NEGADO acesso da origem
         - ${request.headers.origin} com o método - ${request.method}  na rota - ${request.originalUrl}\n`, (err: any) => {
            if (err) {
                console.log("Houve algum erro ao escrever o log" + err)
            }
        })
        response.status(403).send("Não permitido")
    }

}

export { LiberaOrigemRegistraLog }