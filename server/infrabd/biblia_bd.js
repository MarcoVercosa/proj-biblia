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

    BuscaLivros() {
        return new Promise((resolve, reject) => {


        })
    }
}

module.exports = Busca_Biblia_BD