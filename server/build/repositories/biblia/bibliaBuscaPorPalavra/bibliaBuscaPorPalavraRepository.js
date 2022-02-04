"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliaBuscaPorPalavraRepository = void 0;
const conexao_1 = require("../../../infrabd/conexao");
class BibliaBuscaPorPalavraRepository {
    PesquisaPorPalavra(palavra_pesquisa) {
        const sql_query_busca_por_palavra = `SELECT versao_id,versiculos.livro_id, conteudo, capitulo, versiculo, livro_nome, livro_abreviado, livro_testamento_id
         FROM biblia13v.versiculos 
         INNER JOIN biblia13v.livros ON livros.livro_id = versiculos.livro_id
         WHERE versao_id="3" AND  MATCH(conteudo) AGAINST ('${palavra_pesquisa}')
         ORDER BY livros.livro_id
         LIMIT 300`;
        // tras as colunas da tabela versiculos, inclui algumas da tabela livros. 
        //AGAINST é como o LIKE, mas traz o resultado se tiver a palavra exata
        return new Promise((resolve, reject) => {
            conexao_1.conectaBD.query(sql_query_busca_por_palavra, (erro, resultado) => {
                if (erro) {
                    return reject(erro);
                }
                else {
                    return resolve(resultado);
                }
            });
        });
    }
}
exports.BibliaBuscaPorPalavraRepository = BibliaBuscaPorPalavraRepository;
