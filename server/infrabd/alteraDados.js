const conectaBD = require("./conexao")

class AlteraDadosBD {


    Adiciona(atendimento, res) { //recebe do controller/atendimentos o post de dados recebido e a resposta (sucesso ou não)

        const sql = "INSERT INTO louvores SET ?" //insira dentro  da tabela atendimentos. o ? informa que oq vier será incluído
        conectaBD.query(sql, atendimento, (erro, resultados) => { //insira a query da var sql oq vier no parametro atendimentoDatado
            if (erro) {

                //console.log(erro) //imprime o erro na console do NODE
                res.json(erro) //envia para o navegador o erro

            } else {
                //console.log(resultados)
                console.log("T" + resultados)
                return (resultados)
            }
        })
    }

    Lista(res) {

        const sql = "SELECT * FROM louvores" //query que traz todas as informs da tabela
        conectaBD.query(sql, (erro, resultado) => {
            if (erro) {
                console.log(erro)
                res.json(erro)
            } else {
                console.log(resultado)
                return res.json(resultado)
            }
        })
    }


}

module.exports = new AlteraDadosBD