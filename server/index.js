const customExpress = require("./configExpress/customExpress") //importa os módullos do customExpress
// const conexao = require("./infraestrutura/conexao") // importa módulo de conexão mysql
// const tabelas = require("./infraestrutura/tabelas")




const app = customExpress() //app chma a func importada do customExpress
app.listen(9000, () => { (console.log("Servidor rodando na porta 9000")) })

