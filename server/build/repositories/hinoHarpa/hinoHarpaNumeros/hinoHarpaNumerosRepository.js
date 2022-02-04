"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HinoHarpaNumerosRepository = void 0;
const conexao_1 = require("../../../infrabd/conexao");
class HinoHarpaNumerosRepository {
    ListaNumeroHino() {
        const sql = "SELECT numero FROM biblia13v.louvores"; //query que traz todas as informs da tabela
        return new Promise((resolve, reject) => {
            conexao_1.conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro);
                }
                else {
                    return resolve(resultado);
                }
            });
        });
    }
}
exports.HinoHarpaNumerosRepository = HinoHarpaNumerosRepository;
