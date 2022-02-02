import conectaBD from "../../infrabd/conexao";
import { IHinoHarpaBuscaPorPalavraRepository } from "./IHinoHarpaBuscaPorPalavraRepository";

export interface IResultado {
    numero: number;
    titulo: string
}

export class HinoHarpaBuscaPorPalavraRepository implements IHinoHarpaBuscaPorPalavraRepository {

    BuscaHinoPorPalavra(palavra: string): Promise<IResultado> {
        const sql = `SELECT numero, titulo FROM biblia13v.louvores WHERE letra LIKE "%${palavra}%"`
        return new Promise((resolve, reject) => {
            conectaBD.query(sql, (erro: any, resultado: IResultado) => {

                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(resultado)
                }
            })
        })
    }

}