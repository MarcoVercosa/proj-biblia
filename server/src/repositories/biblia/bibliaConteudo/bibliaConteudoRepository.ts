import { conectaBD } from "../../../infrabd/conexao"
import { IPromessa1, IPromessa2, IPromessa3, IPromessa4, IResultado, IBibliaConteudoRepository } from "./../../../entities/IBibliaConteudoRepository"

export class BibliaConteudoRepository implements IBibliaConteudoRepository {


    async BuscaConteudo(versao_id: number, livro_id: number, testamento_id: number, capitulo: number): Promise<IResultado> {
        const promessa1: Promise<IPromessa1[]> = new Promise((resolve, reject) => {
            //busca os versículos do capitulo, dado a versao, o identificador do livro e o capitulo
            const sql = `SELECT conteudo FROM  biblias13v.versiculos WHERE versao_id=${versao_id} AND livro_id=${livro_id} AND capitulo=${capitulo} `
            conectaBD.query(sql, (erro: any, resultado: Array<IPromessa1>) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
        const promessa2: Promise<IPromessa2> = new Promise((resolve, reject) => {
            //query busca nome do livro e seu nome abreviado, dado o numero do testamento e o id do livro
            const sql = `SELECT livro_nome, livro_abreviado FROM biblias13v.livros WHERE livro_testamento_id=${testamento_id} AND livro_id=${livro_id}`
            conectaBD.query(sql, (erro: any, resultado: IPromessa2) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
        const promessa3: Promise<IPromessa3> = new Promise((resolve, reject) => {
            const sql_buscaQuantidadeCapitulos = `SELECT capitulo FROM biblias13v.versiculos WHERE livro_id=${livro_id} AND versao_id=${versao_id} ORDER BY capitulo DESC LIMIT 1`
            //Query busca q tabela inteira de capitulos dado o nome do livro e retorna somente o ultimo valor, que é o mais alto, permitindo saber quantos capitulos o livro tem

            conectaBD.query(sql_buscaQuantidadeCapitulos, (erro: any, resultado: IPromessa3) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
        const promessa4: Promise<IPromessa4> = new Promise((resolve, reject) => {
            //query retorna a versao do Livro
            const sql_busvaNomeVersao = `SELECT versao_nome FROM biblias13v.versoes WHERE versao_id=${versao_id}`
            conectaBD.query(sql_busvaNomeVersao, (erro: any, resultado: IPromessa4) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })

        try {
            await Promise.all([promessa1, promessa2, promessa3, promessa4])
            let retorno: IResultado = { conteudo: await promessa1, nomeLivro: await promessa2, quantidadecapitulo: await promessa3, nomeVersao: await promessa4, capituloAtual: capitulo }
            return retorno
        } catch (erro: any) {
            // console.log(erro)
            return erro
        }
    }

}