import conectaBD from "../../../infrabd/conexao"

import { IBibliaLivrosRepository } from "./IBibliaLivrosRepository"
import { IResultado } from "./IBibliaLivrosRepository"


export class BibliaLivrosRepository implements IBibliaLivrosRepository {
    BuscaLivros(testamento_id: number): Promise<IResultado[]> {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM biblia13v.livros WHERE livro_testamento_id=${testamento_id}`
            conectaBD.query(sql, (erro: any, resultado: Promise<IResultado[]>) => {
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(resultado)
                }
            })
        })
    }

}