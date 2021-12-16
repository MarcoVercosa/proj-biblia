//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   

const fs =  require("fs")
function LiberaOrigemRegistraLog(req, res, next) {

    const origem = req.headers.origin || "indefinido"
    console.log(origem)

    if (origem.match(/vidadafonte.com.br/) || origem.match(/localhost/) && req.method === "GET") {
    // if (origem.match(/vidadafonte.com.br/) && req.method === "GET") {
        //se conter :vidadafonte.com.br na origem solicitante ou localhost e for do método get
        now = new Date
        fs.appendFile("./logs.txt", `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}-- ${now.getHours()} horas e ${now.getMinutes()} minutos => LIBERADO acesso da origem
         - ${req.headers.origin} com o método - ${req.method} na rota - ${req.originalUrl}\n`, (err) => {

            if (err) {
                console.log("Houve algum erro ao escrever o log" + err)
            }
        })
        next()
    } else {
        now = new Date
        fs.appendFile("./logs.txt", `${now.getDay()}/${now.getMonth()}/${now.getFullYear()} -- ${now.getHours()}horas e ${now.getMinutes()} minutos => NEGADO acesso da origem
         - ${req.headers.origin} com o método - ${req.method}  na rota - ${req.originalUrl}\n`, (err) => {
            if (err) {
                console.log("Houve algum erro ao escrever o log" + err)
            }
        })
        res.status(403).send("Não permitido")
    }

}

module.exports = LiberaOrigemRegistraLog