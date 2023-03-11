import { conectaBD } from "../../../infrabd/conexao"

import { IBibliaCapitulosRepository, IResultado } from "../../../entities/IBibliaCapitulosRepository"

export class BibliaCapitulosRepository implements IBibliaCapitulosRepository {

    BuscaCapitulo(versao_id: number, livro_id: number): Promise<IResultado[]> {
        return new Promise((resolve, reject) => {
            const sql = ` SELECT capitulo FROM  biblias13v.versiculos WHERE versao_id=${versao_id} AND livro_id=${livro_id} ORDER BY capitulo DESC LIMIT 1`
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