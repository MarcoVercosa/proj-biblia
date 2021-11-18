// const customExpress = require("./configExpress/customExpress") //importa os módullos do customExpress
// const conectaBD = require("./infrabd/conexao")
// const Tabelas = require("./infrabd/tabelas")
// // const conexao = require("./infraestrutura/conexao") // importa módulo de conexão mysql
// // const tabelas = require("./infraestrutura/tabelas")

// conectaBD.connect((erro) => {


//     if (erro) {
//         console.log("Houve um erro para carregar o banco de dados => " + erro)

//     } else {
//         console.log("Conectado no banco de dados HinoHarpa com sucesso")
//         Tabelas.init(conectaBD)

//         const app = customExpress() //app chma a func importada do customExpress
//         app.listen(9000, () => { (console.log("Servidor rodando na porta 9000")) })

//     }

// })



const customExpress = require("./configExpress/customExpress") //importa os módullos do customExpress
const conectaBD = require("./infrabd/conexao")
const Tabelas = require("./infrabd/tabelas")
// const conexao = require("./infraestrutura/conexao") // importa módulo de conexão mysql
// const tabelas = require("./infraestrutura/tabelas")


function Busca() {

    console.log("Iniciando tentativa de conexão")

    return new Promise((resolve, reject) => {

        try {
            conectaBD.connect((erro) => {
                if (erro) {
                    console.log("Houve um erro para carregar o banco de dados -==> " + erro)
                    reject("rejeitado")

                } else {
                    let now = new Date()
                    console.log("Conectado no banco de dados HinoHarpa com sucesso no seguinte horário: ")
                    console.log("Hoje é " + now.getDate() + " do mês " + now.getMonth() + " de " + now.getFullYear() + "---" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())

                    Tabelas.init(conectaBD)

                    const app = customExpress() //app chma a func importada do customExpress
                    app.listen(9000, () => { (console.log("Servidor rodando na porta 9000 !")) })

                    resolve("Aceito")
                }
            })
        } catch (erro) { console.log("caiu no catch") }
    })
}

// const resposta = async () => {
//     try {
//         let dados = await Busca()
//         if (dados == "Aceito") { console.log("Aceito") } else { Busca() }
//     } catch (erro) { console.log(erro) }
// }

setTimeout(() => { Busca().then(res => console.log(res)).catch(err => console.log(err)) }, 3000)


// conectaBD.connect((erro) => {


//     if (erro) {
//         console.log("Houve um erro para carregar o banco de dados ==> " + erro)

//     } else {
//         console.log("Conectado no banco de dados HinoHarpa com sucesso")
//         Tabelas.init(conectaBD)

//         const app = customExpress() //app chma a func importada do customExpress
//         app.listen(9000, () => { (console.log("Servidor rodando na porta 9000 !")) })

//     }

// })









