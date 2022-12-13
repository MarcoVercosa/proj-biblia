const customExpress = require("./configExpress/customExpress") //importa os módullos do customExpress
const conectaBD = require("./infrabd/conexao")
const Tabelas = require("./infrabd/tabelas")
// const conexao = require("./infraestrutura/conexao") // importa módulo de conexão mysql
// const tabelas = require("./infraestrutura/tabelas")


function Busca() {

    console.log("Iniciando tentativa de conexão")

    return new Promise((resolve, reject) => {
        conectaBD.getConnection((erro) => {

            try {

                if (!erro) {

                    let now = new Date()
                    console.log("Conectado no banco de dados HinoHarpa com sucesso no seguinte horário: ")
                    console.log("Hoje é " + now.getDate() + " do mês " + now.getMonth() + " de " + now.getFullYear() + "---" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())

                    Tabelas.init(conectaBD)

                    const app = customExpress() //app chma a func importada do customExpress
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




