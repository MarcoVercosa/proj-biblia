const conectaBD = require("../../../infrabd/conexao")

interface IResultado {
    letra: string;
    titulo: string
}

export class HinoHarpaTitulosRepository implements IHinoHarpaTitulosRepository {

    BuscaHinoPorNumero(numero: number): Promise<Array<IResultado>> {//busca o título dado o numero

        const sql = `SELECT letra, titulo FROM biblia13v.louvores WHERE numero=${numero}`
        return new Promise((resolve: any, reject: any) => {
            conectaBD.query(sql, (erro: any, resultado: Array<IResultado>) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(resultado) as Array<IResultado>
                }
            })
        })

    }
}