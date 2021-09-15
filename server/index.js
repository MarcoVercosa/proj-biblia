const customExpress = require("./configExpress/customExpress") //importa os módullos do customExpress
const conectaBD = require("./infrabd/conexao")
const Tabelas = require("./infrabd/tabelas")
// const conexao = require("./infraestrutura/conexao") // importa módulo de conexão mysql
// const tabelas = require("./infraestrutura/tabelas")

conectaBD.connect((erro) => {


    if (erro) {
        console.log("Houve um erro para carregar o banco de dados => " + erro)
        
    } else {
        console.log("Conectado no banco de dados HinoHarpa com sucesso")
        Tabelas.init(conectaBD)

        const app = customExpress() //app chma a func importada do customExpress
        app.listen(9000, () => { (console.log("Servidor rodando na porta 9000")) })

    }

})




