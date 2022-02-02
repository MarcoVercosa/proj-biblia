import conectaBD from "../../infrabd/conexao";
import { IHinoHarpaNumerosRepository } from "./IHinoHarpaNumerosRepository"

export class HinoHarpaNumerosRepository implements IHinoHarpaNumerosRepository {

    ListaNumeroHino(): Promise<Array<{ numero: number }>> {// busca somente o numero de todos os hinos

        const sql = "SELECT numero FROM biblia13v.louvores" //query que traz todas as informs da tabela
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
    // const sql = "SELECT * FROM louvores" //query que traz todas as informs da tabela

    // BuscaHinoPorNumero(numero, res) {//busca o título dado o numero

    //     const sql = `SELECT letra, titulo FROM biblia13v.louvores WHERE numero=${numero}`
    //     conectaBD.query(sql, (erro, resultado) => {

    //         if (erro) {
    //             console.log("ocorreu um erro ao buscar Letra por numero:" + erro)
    //             res.json(erro)
    //         } else {
    //             res.json(resultado)
    //         }
    //     })
    // }

    // BuscaHinoPorPalavra(palavra, res) {//busque numero e titulo onde titulo tenha a palavra recebida

    //     const sql = `SELECT numero, titulo FROM biblia13v.louvores WHERE letra LIKE "%${palavra}%"`
    //     conectaBD.query(sql, (erro, resultado) => {

    //         if (erro) {
    //             console.log("Erro ao buscar titulo por busca palavra: " + erro)
    //         } else {
    //             res.json(resultado)
    //         }
    //     })
    // }
}
