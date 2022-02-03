import conectaBD from "../../infrabd/conexao";
import { ICuriosidadesRepository } from "../../entities/ICuriosidadesHarpa";

interface IResultado {
    livro: string,
    conteudo: string
}

export class CuriosidadesRepository implements ICuriosidadesRepository {

    constructor(

    ) { }

    BuscaCuriosidade(palavra: string): Promise<IResultado> {
        return new Promise((resolve: any, reject: any) => {
            const sql = `SELECT livro, conteudo FROM biblia13v.curiosidades WHERE livro LIKE "%${palavra}%"`
            conectaBD.query(sql, (erro: any, resultado: Array<IResultado>) => {
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(resultado) as Array<IResultado>
                }
            })
        })
    }
}