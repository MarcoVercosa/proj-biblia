import { conectaBD } from "../../../infrabd/conexao"
import { IBibliaVersaoRepository } from "../../..//entities/IBibliaVersaoRepository"

interface IResultado {
    versao_id: Number;
    versao_nome: String
}

export class BibliaVersaoRepository implements IBibliaVersaoRepository {

    BuscaVersaoBiblia(): Promise<IResultado[]> {
        return new Promise((resolve, reject) => {
            const sql: string = "SELECT * FROM biblia13v.versoes;"

            conectaBD.query(sql, (erro: any, resultado: Promise<IResultado[]>) => {
                if (erro) {
                    // console.log(erro)
                    return reject(erro)
                } else {
                    return resolve(resultado)
                }
            })
        })
    }

}