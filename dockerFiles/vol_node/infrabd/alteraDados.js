const conectaBD = require("./conexao")

class AlteraDadosBD {



    ListaNumeroHino(res) {// busca somente o numero de todos os hinos

        const sql = "SELECT numero FROM hinoHarpa.louvores" //query que traz todas as informs da tabela
        conectaBD.query(sql, (erro, resultado) => {
            if (erro) {
                console.log(erro)
                res.json(erro)
            } else {

                return res.json(resultado)
            }
        })
    }
    // const sql = "SELECT * FROM louvores" //query que traz todas as informs da tabela

    BuscaHinoPorNumero(numero, res) {//busca o título dado o numero

        const sql = `SELECT letra, titulo FROM hinoHarpa.louvores WHERE numero=${numero}`
        conectaBD.query(sql, (erro, resultado) => {

            if (erro) {
                console.log("ocorreu um erro ao buscar Letra por numero:" + erro)
                res.json(erro)
            } else {
                res.json(resultado)
            }
        })
    }

    BuscaHinoPorPalavra(palavra, res) {//busque numero e titulo onde titulo tenha a palavra recebida

        const sql = `SELECT numero, titulo FROM hinoHarpa.louvores WHERE letra LIKE "%${palavra}%"`
        conectaBD.query(sql, (erro, resultado) => {

            if (erro) {
                console.log("Erro ao buscar titulo por busca palavra: " + erro)
            } else {
                res.json(resultado)
            }
        })
    }

    AdicionaCuriosidades(dadosPost, res) {//usado para cadastro de curiosidades

        const sql = `INSERT INTO curiosidades SET ?`
        conectaBD.query(sql, dadosPost, (erro, resultado) => {
            if (erro) {
                return (erro)
            } else {
                return (resultado)
            }
        })
        console.log("ADD curiosidades no BD")

    }

    BuscaCuriosidade(palavra, res) {
        const sql = `SELECT livro, conteudo FROM hinoHarpa.curiosidades WHERE livro LIKE "%${palavra}%"`
        conectaBD.query(sql, (erro, resultado) => {
            if (erro) {
                console.log(erro)
            } else {
                // console.log(resultado)
                res.json(resultado)
            }
        })
    }


}

module.exports = new AlteraDadosBD