import { conectaBD } from "../../../infrabd/conexao"
import { IBibliaTestamentoRepository } from "../../../entities/IBibliaTestamentoRepository"

interface IResultado {
    testamento_id: Number;
    testamento_nome: string
}

export class BibliaTestamentoRepository implements IBibliaTestamentoRepository {

    BuscaTestamento(): Promise<IResultado[]> {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM biblia13v.testamentos"
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