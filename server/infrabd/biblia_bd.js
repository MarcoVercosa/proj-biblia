const conectaBD = require("./conexao")

class Busca_Biblia_BD {

    BuscaVersaoBiblia() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM biblia.versoes;"

            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    console.log(erro)
                    reject(erro)
                } else {

                    resolve(resultado)
                }
            })
        })
    }

    BuscaTestamento() {
        return new Promise((resolve, reject) => {

            const sql = "SELECT * FROM biblia.testamentos"

            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    BuscaLivros() {
        return new Promise((resolve, reject) => {

            const sql = "SELECT * FROM biblia.livros"

            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }
    BuscaConteudo(versao_id, livro_id, capitulo) {

        return new Promise((resolve, reject) => {

            const sql = `SELECT conteudo FROM  biblia.versiculos WHERE versao_id=${versao_id} AND livro_id=${livro_id} AND capitulo=${capitulo} `

            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                } else { resolve(resultado) }
            })
        })

    }
}

module.exports = Busca_Biblia_BD