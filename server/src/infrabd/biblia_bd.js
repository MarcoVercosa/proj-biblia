const conectaBD = require("./conexao")

class Busca_Biblia_BD {

    BuscaVersaoBiblia() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM biblia13v.versoes;"

            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    // console.log(erro)
                    reject(erro)
                } else {

                    resolve(resultado)
                }
            })
        })
    }

    BuscaTestamento() {
        return new Promise((resolve, reject) => {

            const sql = "SELECT * FROM biblia13v.testamentos"

            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    BuscaLivros(testamento_id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM biblia13v.livros WHERE livro_testamento_id=${testamento_id}`
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
            const sql = ` SELECT capitulo FROM  biblia13v.versiculos WHERE versao_id=${versao_id} AND livro_id=${livro_id}`
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
            //busca os versículos do capitulo, dado a versao o identificador do livro e o capitulo
            const sql = `SELECT conteudo FROM  biblia13v.versiculos WHERE versao_id=${versao_id} AND livro_id=${livro_id} AND capitulo=${capitulo} `
            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }   else { 
                    resolve(resultado)                    
                }
            })
        })
        const promessa2 = new Promise((resolve, reject) => {
            //query busca nome do livro e seu nome abreviado, dado o numero do testamento e o id do livro
            const sql = `SELECT livro_nome, livro_abreviado FROM biblia13v.livros WHERE livro_testamento_id=${testamento_id} AND livro_id=${livro_id}`
            conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }   else {
                    resolve(resultado)
                }
            })
        })
        const promessa3 = new Promise((resolve, reject) => {
            const sql_buscaQuantidadeCapitulos = `SELECT capitulo FROM biblia13v.versiculos WHERE livro_id=${livro_id} AND versao_id=${versao_id} ORDER BY capitulo DESC LIMIT 1`
            //Query busca q tabela inteira de capitulos dado o nome do livro e retorna somente o ultimo valor, que é o mais alto, permitindo saber quantos capitulos o livro tem

            conectaBD.query(sql_buscaQuantidadeCapitulos, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }   else {
                    resolve(resultado)
                }
            })
        })

        function Erro(erro){
            return new Promise
        }

        const promessa4 = new Promise((resolve, reject)=>{

            const sql_busvaNomeVersao = `SELECT versao_nome FROM biblia13v.versoes WHERE versao_id=${versao_id}`
            conectaBD.query(sql_busvaNomeVersao, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }   else {
                    resolve(resultado)
                }
            })
        })

        try{
            await Promise.all([promessa1, promessa2, promessa3, promessa4])
            let retorno = {conteudo: await promessa1, nomeLivro: await promessa2, quantidadecapitulo: await promessa3, nomeVersao: await promessa4, capituloAtual: capitulo}
            return retorno
        }catch(erro){
            // console.log(erro)
            return erro
        }
    } 

    PesquisaPorPalavra(palavra_pesquisa){
        const sql_query_busca_por_palavra = 
        `SELECT versao_id,versiculos.livro_id, conteudo, capitulo, versiculo, livro_nome, livro_abreviado, livro_testamento_id
         FROM biblia13v.versiculos 
         INNER JOIN biblia13v.livros ON livros.livro_id = versiculos.livro_id
         WHERE versao_id="3" AND  MATCH(conteudo) AGAINST ('${palavra_pesquisa}')
         ORDER BY livros.livro_id
         LIMIT 300`
         // tras as colunas da tabela versiculos, inclui algunas da tabela livros. 
         //AGAINST é como o LIKE, mas tras o resultado se tiver a palavra exata
        return new Promise((resolve, reject)=>{
            conectaBD.query(sql_query_busca_por_palavra , (erro, resultado)=> {
                if(erro){
                    reject(erro)
                }else{
                    resolve(resultado)
                }
            })
        })
    }
}

module.exports = Busca_Biblia_BD