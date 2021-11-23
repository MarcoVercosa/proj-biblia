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

    BuscaCapitulo(versao_id, livro_id,){

        return new Promise((resolve, reject)=>{
            const sql = ` SELECT capitulo FROM  biblia.versiculos WHERE versao_id=${versao_id} AND livro_id=${livro_id}`
            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    async BuscaConteudo(versao_id, testamento_id, livro_id, capitulo) {
        console.log(versao_id, testamento_id, livro_id, capitulo)
        const promessa1 =  new Promise((resolve, reject) => {
            const sql = `SELECT conteudo FROM  biblia.versiculos WHERE versao_id=${versao_id} AND livro_id=${livro_id} AND capitulo=${capitulo} `
            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                    // } else { resolve(resultado) }
                }   else { 
                    // console.log(resultado)
                    resolve(resultado)                    
                }
            })
        })
        const promessa2 = new Promise((resolve, reject) => {
            const sql_buscaNomeLivroPesquisado = `SELECT livro_nome, livro_abreviado FROM biblia.livros WHERE livro_testamento_id=${testamento_id} AND livro_posicao=${livro_id}`

            conectaBD.query(sql_buscaNomeLivroPesquisado, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }   else {
                    resolve(resultado)
                }
            })
        })
        const promessa3 = new Promise((resolve, reject) => {
            const sql_buscaQuantidadeCapitulos = `SELECT capitulo FROM biblia.versiculos WHERE livro_id=${livro_id} AND versao_id=${versao_id} ORDER BY capitulo DESC LIMIT 1`
            //Query busca quantos puxa a tabela inteira de capitulos dado o nome do livro e retorna somente o ultimo valor, que é o mis alto, permitindo saber quantos capitulos o livro tem

            conectaBD.query(sql_buscaQuantidadeCapitulos, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }   else {
                    resolve(resultado)
                }
            })
        })

        const data = await Promise.all([promessa1, promessa2, promessa3])
        let retorno = {conteudo: await promessa1, nomeLivro: await promessa2, quantidadecapitulo: await promessa3}
        return retorno
    }      
    
}

module.exports = Busca_Biblia_BD