import { conectaBD } from "../../../infrabd/conexao"
import { IBibliaBuscaPorPlavraRepository, IResultado } from "../../../entities/IBibliaBuscaPorPalavraRepository"


export class BibliaBuscaPorPalavraRepository implements IBibliaBuscaPorPlavraRepository {

    PesquisaPorPalavra(palavra_pesquisa: string): Promise<IResultado> {

        const sql_query_busca_por_palavra: string =
            //     `SELECT versao_id,versiculos.livro_id, conteudo, capitulo, versiculo, livro_nome, livro_abreviado, livro_testamento_id
            //  FROM biblias13v.versiculos 
            //  INNER JOIN biblias13v.livros ON livros.livro_id = versiculos.livro_id
            //  WHERE versao_id="3" AND  MATCH(conteudo) AGAINST ('${palavra_pesquisa}')
            //  ORDER BY livros.livro_id
            //  LIMIT 300`
            `SELECT versao_id,versiculos.livro_id, conteudo, capitulo, versiculo, livro_nome, livro_abreviado, livro_testamento_id
         FROM biblias13v.versiculos 
         INNER JOIN biblias13v.livros ON livros.livro_id = versiculos.livro_id
         WHERE versao_id="3" AND conteudo LIKE "%${palavra_pesquisa}%"
         ORDER BY livros.livro_id
         LIMIT 300`
        // tras as colunas da tabela versiculos, inclui algumas da tabela livros. 
        //AGAINST é como o LIKE, mas traz o resultado se tiver a palavra exata
        return new Promise((resolve, reject) => {
            conectaBD.query(sql_query_busca_por_palavra, (erro: any, resultado: IResultado) => {
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(resultado)
                }
            })
        })
    }
}