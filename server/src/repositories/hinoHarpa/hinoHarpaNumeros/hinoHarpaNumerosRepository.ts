import { conectaBD } from "../../../infrabd/conexao";
import { IHinoHarpaNumerosRepository } from "../../../entities/IHinoHarpaNumerosRepository"

export class HinoHarpaNumerosRepository implements IHinoHarpaNumerosRepository {

    ListaNumeroHino(): Promise<Array<{ numero: number }>> {// busca somente o numero de todos os hinos

        const sql = "SELECT numero FROM biblias13v.louvores" //query que traz todas as informs da tabela
        return new Promise((resolve, reject) => {
            conectaBD.query(sql, (erro: any, resultado: Array<{ numero: number }>) => {
                if (erro) {
                    reject(erro)
                } else {
                    return resolve(resultado)
                }
            })
        })
    }
}
