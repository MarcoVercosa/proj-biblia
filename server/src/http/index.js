const conectaBD = require("../infrabd/conexao")
const router = require("./routes/index_routes")
// const router = require("../http/routes/rotas/rotasJson")

const express = require("express")
const app = express()

function Busca() {
    console.log("Iniciando tentativa de conexão")

    return new Promise((resolve, reject) => {
        conectaBD.getConnection((erro) => {

            try {
                if (!erro) {

                    let now = new Date()
                    console.log("Conectado no banco de dados com sucesso no seguinte horário: ")
                    console.log("Hoje é " + now.getDate() + " do mês " + now.getMonth() + " de " + now.getFullYear() + "---" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())

                    app.use(express.json())
                    app.use(router)

                    app.listen(9000, () => { (console.log("Servidor rodando na porta 9000 !")) })
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


setTimeout(() => {
    Busca().then(dado => console.log(dado)).catch((err) => {
        console.log("TEMOS O SEGUINTE ERRO " + err)

        NovaTentativa(err)
    })
}, 1000)

function NovaTentativa(err) {
    console.log("Solicitando nova tentativa")
    setTimeout(() => {

        Busca().then(dado => console.log(dado)).catch((erro) => {
            console.log("TEMOS O SEGUINTE ERRO " + err)
            NovaTentativa(erro)
        })

    }, 5000)
}




